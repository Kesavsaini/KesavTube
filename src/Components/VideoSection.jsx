import { AddTaskOutlined, AddTaskSharp, Replay, ReplayCircleFilledOutlined, Reply, SaveAltOutlined, ShareOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import React from 'react'
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
  return (
    <>
    <Container>
    <VideoBox>
    <iframe width="800" height="500" src="https://www.youtube.com/embed/-qkog6G2lV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </VideoBox>
    <Details>
        <VideoInfo>
        <VideoTitle>KARMA - POMFRET FRY (OFFICIAL MUSIC VIDEO) | KALAMKAAR</VideoTitle>
        <VideoStatsWrapper>
        <VideoinfoLeft>
            <Videostats>576,420 views .1 Jul 2022</Videostats>
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
    <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At placeat sapiente, fugit saepe voluptas impedit asperiores minus maiores, adipisci omnis laudantium cupiditate iure delectus nesciunt architecto ipsum. Aspernatur, cupiditate aut. Eveniet, optio velit provident labore commodi iste atque soluta ullam impedit beatae voluptates animi, dolor laudantium architecto earum est quam.</Description>
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