import styled from 'styled-components'
import React from 'react'
import {format} from "timeago.js"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Container=styled.div`
margin: 20px 0px;
`;
const ChenalImg=styled.img`
height: 50px;
width: 50px;
border-radius:50%;
object-fit: cover;
`;
const Userinfo=styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const CommentText=styled.div`
color: ${({theme})=>theme.text};
font-size: 14px;
margin-top: 4px;
`;
const ChennalName=styled.div`
display: flex;
align-items: center;
gap: 5px;
font-size: 13px;
font-weight: 500;
`;
const ChennalInfo=styled.div`
color: ${({theme})=>theme.text};
`;
const Date=styled.div`
font-size: 12px;
color: ${({theme})=>theme.textSoft};

`;
const Comment = ({cmnt}) => {
  const [user,setUser]=useState({})
  useEffect(()=>{
    const getUser=async()=>{
       try{
           const res=await axios.get(`/user/find/${cmnt.userId}`);
           setUser(res.data);
       }catch(err){
           
       }
    }
    getUser();
  },[cmnt.userId])
  return (
    <Container>
        <Userinfo>
        <ChenalImg src={user.img}/>
        <ChennalInfo>
        <ChennalName>{user.name}
          <Date>{format(cmnt.createdAt)}</Date>
            </ChennalName> 
            <CommentText>{cmnt.desc}</CommentText>
        </ChennalInfo>
        </Userinfo>
    </Container>
  )
}

export default Comment