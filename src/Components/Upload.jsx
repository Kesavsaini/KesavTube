import React from 'react'
import styled from 'styled-components'
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
const Upload = ({setOpen}) => {
  return (
    <Container>
     <Box>
     <Cut onClick={()=>setOpen(false)}>X</Cut>
     <Title>Upload a New Video</Title>
     <Label>Video</Label>
     <Input  type='file' accept="video/*" name='golu'></Input>
     <Input type='text' placeholder='Title'></Input>
     <Desc rows={8} placeholder="Description"></Desc>
     <Input type='text' placeholder='Add Tags separated by comma'></Input>
     <Label>Image</Label>
     <Input  type='file' accept="image/*"></Input>
     <Button>UPLOAD</Button>
     </Box>
    </Container>
  )
}

export default Upload