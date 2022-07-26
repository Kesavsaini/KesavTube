import { AddTaskOutlined, AddTaskSharp, Replay, ReplayCircleFilledOutlined, Reply, SaveAltOutlined, ShareOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Comment from './Comment';
import CommentInput from './CommentInput';
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
background-color: red;
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
const CommentSection=styled.div``;
const VideoSection = () => {
  const video=useSelector(state=>state.video.videodata);
  return (
    <>
    <Container>
    <VideoBox>
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/-qkog6G2lV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </VideoBox>
    <Details>
        <VideoInfo>
        <VideoTitle>{video.title}</VideoTitle>
        <VideoStatsWrapper>
        <VideoinfoLeft>
            <Videostats>{video.views} views .{video.createdAt}</Videostats>
        </VideoinfoLeft>
        <VideoinfoRight>
             <VideoButtons>
                <ThumbUpAltOutlined/>
                59K
             </VideoButtons>
             <VideoButtons>
                <ThumbDownAltOutlined/>
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
        <ChenalImg src='https://pbs.twimg.com/profile_images/1346778158129770497/0aem5Mmv_400x400.jpg'/>
        <ChennalName>Kalamkaar
            <Subscribers>230k subscribers</Subscribers>
        </ChennalName>
        </Youtuberinfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </ChennalInfo>
    </Details>
    <Description>{video.desc}</Description>
     <Hr/>
     <CommentInput/>
     <CommentSection>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
     </CommentSection>
    </Container>
    </>
  )
}

export default VideoSection