import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {app }from "../firebase.js"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios"
const Container=styled.div`
position: absolute;
width: 100%;
height: 100%;
z-index: 1000;
top: 0;
left: 0;
background-color: #00000042;
display: flex;
justify-content: center;
align-items: center;
`
const Box=styled.div`
width: 50%;
height: 90%;
background-color: ${({theme})=>theme.bg};
padding:20px;
border-radius: 10px;
`
const Cut=styled.div`
color: ${({theme})=>theme.text};
font-size: 20px;
font-weight: 600;
display: flex;
justify-content: flex-end;
width: 100%;
cursor: pointer;
`
const Title=styled.div`
color: ${({theme})=>theme.text};
font-size: 40px;
font-weight: 600;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
`
const Label=styled.label`
color: ${({theme})=>theme.text};
font-size: 30px;
font-weight: 600;
width: 100%;
margin-bottom: -20px;
`;
const Input=styled.input`
width: 100%;
background-color:${({theme})=>theme.bgLighter};
border: none;
outline: none;
margin-top:20px;
padding:10px 0px;
color:${({theme})=>theme.text};
font-size: 20px;
border-radius:7px;
`;
const Desc=styled.textarea`
width: 100%;
background-color:${({theme})=>theme.bgLighter};
border: none;
outline: none;
margin-top:20px;
padding: 3px;
color:${({theme})=>theme.text};
`;
const Button=styled.button`
width: 100%;
background-color:${({theme})=>theme.bgLighter};
border: none;
outline: none;
margin-top:20px;
padding: 10px;
color:${({theme})=>theme.text};
font-size: 20px;
border-radius:7px;
cursor: pointer;
`;
const Process=styled.div`
color: ${({theme})=>theme.text};
font-size: 20px;
font-weight: 600;
width: 100%;
margin-bottom: -20px;
`
const Upload = ({setOpen}) => {
  const [input,setInput]=useState({});
  const [video,setVideo]=useState("");
  const [videoPerc,setVideoPerc]=useState(0);
  const [imgPerc,setImgPerc]=useState(0);
  const [img,setImg]=useState("");
  const uploadFile=(file,urlType)=>{
    const storage = getStorage(app);
    const fileName = new Date().getTime()+file.name;
    const storageRef = ref(storage, fileName);
     const uploadTask = uploadBytesResumable(storageRef, file);
     uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if(urlType==="imgUrl") setImgPerc(progress)
    else setVideoPerc(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
          break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
      default:
          break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setInput(prev=>{
        return{...prev,[urlType]:downloadURL};
      })
    });
  }
);

  }
  const handleChange=(e)=>{
    setInput(prev=>{
      return{...prev,[e.target.name]:e.target.value};
    })
  }
  const handleTags=(e)=>{
    setInput(prev=>{
      return{...prev,tags:e.target.value.split(",")};
    })
  }
  const handleUpload= async(e) =>{
    e.preventDefault();
    await axios.post('/video/add',input);
    setOpen(false)
  }
  useEffect(()=>{video && uploadFile(video,"videoUrl")},[video])
  useEffect(()=>{img && uploadFile(img,"imgUrl")},[img])
  return (
    <Container>
     <Box>
     <Cut onClick={()=>setOpen(false)}>X</Cut>
     <Title>Upload a New Video</Title>
     <Label>Video</Label>
    {videoPerc>0?
    <Process>Uploading {Math.round(videoPerc)}%</Process>:
    (<Input  type='file' accept="video/*"  onChange={(e)=>setVideo(e.target.files[0])}></Input>)}
     <Input type='text' placeholder='Title' name='title' onChange={handleChange}></Input>
     <Desc rows={8} placeholder="Description" name='desc' onChange={handleChange}></Desc>
     <Input type='text' placeholder='Add Tags separated by comma' onChange={handleTags}></Input>
     <Label>Image</Label>
     {imgPerc>0?<Process>Uploading {Math.round(imgPerc)}%</Process> : (<Input  type='file' accept="image/*" onChange={(e)=>setImg(e.target.files[0])}></Input>)}
     <Button onClick={handleUpload}>UPLOAD</Button>
     </Box>
    </Container>
  )
}

export default Upload