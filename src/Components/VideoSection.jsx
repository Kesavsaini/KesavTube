import { AddTaskOutlined, AddTaskSharp, Replay, ReplayCircleFilledOutlined, Reply, SaveAltOutlined, ShareOutlined, ThumbDown, ThumbDownAltOutlined, ThumbUp, ThumbUpAltOutlined } from '@mui/icons-material';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Comment from './Comment';
import CommentInput from './CommentInput';
import {format} from "timeago.js"
import { dislike, like } from '../redux/VideoRedux';
import { subscription } from '../redux/userRedux';
const Container=styled.div`
flex: 5;
`;
const VideoBox=styled.div``;
const Details=styled.div``;
const VideoInfo=styled.div`
margin:10px 0px;
`;
const VideoStatsWrapper=styled.div`
display: flex;
justify-content: space-between;
`;
const VideoinfoLeft=styled.div``;
const VideoTitle=styled.h2`
color: ${({theme})=>theme.text};
font-size: 18px;
font-weight: 400;
`;
const Videostats=styled.div`
color: ${({theme})=>theme.textSoft};
font-size: 13px;
`;
const VideoButtons=styled.button`
background: transparent;
border: none;
display: flex;
gap: 5px;
align-items: center;
cursor: pointer;
color: ${({theme})=>theme.text};
`;
const VideoinfoRight=styled.div`
color: white;
display: flex;
gap: 12px;
`;
const ChennalInfo=styled.div`
display: flex;
justify-content: space-between;
`;
const ChenalImg=styled.img`
height: 50px;
width: 50px;
border-radius:50%;
object-fit: cover;
`;
const ChennalName=styled.div`
color: ${({theme})=>theme.text};
`;
const Subscribers=styled.div`
color: ${({theme})=>theme.textSoft};
font-size: 11px;
`;
const Youtuberinfo=styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const Subscribe=styled.button`
background-color:${props=>props.scubscribed?"grey":"red"};
color: white;
border: none;
outline: none;
width: 120px;
height: 40px;
cursor: pointer;
border-radius: 2px;
`;
const Hr=styled.hr`
margin: 15px 0px;
border:0.3px solid ${({theme})=>theme.soft};
`;
const Description=styled.p`
margin-left: 60px;
margin-top: 10px;
color: ${({theme})=>theme.text};
font-size: 14px;
`;
const Videoframe=styled.video`
width: 100%;
height:500px;
`
const CommentSection=styled.div``;
const VideoSection = () => {
  const dispatch=useDispatch();
  const video=useSelector(state=>state.video.videodata);
  const user=useSelector(state=>state.user.currUser);
  const [chenal,setChenal]=useState({});
  const [cmmnts,setCmmnts]=useState([]);
  useEffect(()=>{
    const getChenal=async()=>{
       try{
           const res=await axios.get(`/user/find/${video.userId}`);
           setChenal(res.data);
       }catch(err){
           
       }
    }
    getChenal();
  },[video.userId])
  useEffect(()=>{
    const getCommnt=async()=>{
       try{
           const res=await axios.get(`/comment/${video._id}`);
           setCmmnts(res.data);
       }catch(err){
           
       }
    }
    getCommnt();
  },[video._id])
  const handleLike=async()=>{
   await axios.put(`/user/like/${video._id}`);
   dispatch(like(user._id))
  }
  const handleDisLike=async()=>{
    await axios.put(`/user/dislike/${video._id}`);
    dispatch(dislike(user._id))
   }
   const handlesub=async()=>{
     dispatch(subscription(chenal._id))
    if(!user.subscribedUsers.includes(chenal._id)){
      await axios.put(`/user/subscribe/${chenal._id}`);
     }else await axios.put(`/user/unsubscribe/${chenal._id}`);
   }

  return (
    <>
    <Container>
    <VideoBox>
    <Videoframe src={video.videoUrl} controls></Videoframe>
    </VideoBox>
    <Details>
        <VideoInfo>
        <VideoTitle>{video.title}</VideoTitle>
        <VideoStatsWrapper>
        <VideoinfoLeft>
            <Videostats>{video.views} views .{format(video.createdAt)}</Videostats>
        </VideoinfoLeft>
        <VideoinfoRight>
             <VideoButtons onClick={handleLike}>
              {video.likes.includes(user._id) ? <ThumbUp/>: <ThumbUpAltOutlined/>}
                {video.likes?.length}
             </VideoButtons>
             <VideoButtons onClick={handleDisLike}>
             {video.dislikes?.includes(user._id) ? <ThumbDown/>: <ThumbDownAltOutlined/>}
                Dislike
             </VideoButtons>
             <VideoButtons>
                <Reply/>
                 Share
             </VideoButtons>
             <VideoButtons>
                <AddTaskOutlined/>
                 Save
             </VideoButtons>
        </VideoinfoRight>
        </VideoStatsWrapper>
        </VideoInfo>
        <Hr/>
        <ChennalInfo>
        <Youtuberinfo>
        <ChenalImg src={chenal.img}/>
        <ChennalName>{chenal.name}
            <Subscribers>{chenal.subscribers?chenal.subscribers:0} subscribers</Subscribers>
        </ChennalName>
        </Youtuberinfo>
        <Subscribe scubscribed={user.subscribedUsers?.includes(chenal._id)} onClick={handlesub}>{
         user.subscribedUsers?.includes(chenal._id)?"SUBSCRIBED":"SUBSCRIBE"
        }</Subscribe> 
        </ChennalInfo>
    </Details>
    <Description>{video.desc}</Description>
     <Hr/>
     <CommentInput videoid={video._id}/>
     <CommentSection>
      {cmmnts && cmmnts.map((cmnt)=>{
             return(
              <Comment cmnt={cmnt}/>
             )
      })
       }

     </CommentSection>
    </Container>
    </>
  )
}

export default VideoSection