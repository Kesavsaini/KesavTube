import React from 'react'
import styled from 'styled-components';
import {Link } from "react-router-dom";
import { useEffect,useState  } from 'react';
import axios from 'axios';
import {format} from "timeago.js"
const Container=styled.div`
width: 360px;
margin-bottom: 45px;
cursor: pointer;
margin: 10px;
margin:${props=>props.type==="hz" && "0px"};
margin-left:${props=>props.type==="hz" && "10px"};
margin-bottom: 10px;
display: ${props=>props.type==="hz" && "flex"};
width: ${props=>props.type==="hz" && "100%"};
gap:${props=>props.type==="hz" && "8px"};
`;
const Image=styled.img`
width: 100%;
height: 202px;
background-color: #999;
width: ${props=>props.type==="hz" && "50%"};
height: ${props=>props.type==="hz" && "100%"};
`;
const Details=styled.div`
display: flex;
margin-top: 2px;
gap:12px;
`;
const ChenalImg=styled.img`
height: 36px;
width: 36px;
border-radius:50%;
object-fit: cover;
display: ${props=>props.type==="hz" && "none"};
`;
const VideoTitle=styled.div`
color: ${({theme})=>theme.text};
font-size: 16px;
margin-bottom: 5px;
font-size: ${props=>props.type==="hz" && "14px"};
`;
const Textwrapper=styled.div`
display: flex;
flex-direction: column;
`;
const Info=styled.div`

`;
const ChennalName=styled.div`
color: ${({theme})=>theme.textSoft};
font-size: ${props=>props.type==="hz" && "13px"};
`;
const Otherinfo=styled.div`
color: ${({theme})=>theme.textSoft};
font-size: ${props=>props.type==="hz" && "12px"};
`;
const Card = ({data,type}) => {
  const [chenal,setChenal]=useState({});
  useEffect(()=>{
    const getChenal=async()=>{
       try{
        const res=await axios.get(`http://localhost:8000/api/user/find/${data.userId}`);
        console.log(res.data);
        setChenal(res.data);
       }catch(err){
        console.log(err);
       }
     }
     getChenal();
  },[data.userId])
  return (
   <>
   <Link to={`/video/${data._id}`} style={{textDecoration:"none"}}>
   <Container type={type}>
      <Image src={data.imgUrl} type={type}/>
      <Details type={type}>
        <ChenalImg src={chenal.img} type={type}/>
        <Textwrapper>
        <VideoTitle type={type}>{data.title}</VideoTitle>
        <Info>
       <ChennalName type={type}>{chenal.name}</ChennalName>
       <Otherinfo type={type}>{data.views} views. {format(data.createdAt)}</Otherinfo>
       </Info>
        </Textwrapper>
      </Details>
   </Container>
   </Link>
   </>    
  )
}

export default Card