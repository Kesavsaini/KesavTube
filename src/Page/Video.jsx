import { VideoSettingsSharp } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Recomandation from '../Components/Recomandation';
import VideoSection from '../Components/VideoSection';
import { fetchFail, fetchStart, fetchSuccess } from '../redux/VideoRedux';
const Container=styled.div`
width: 100%;
display: flex;
`;
const Video = () => {
  const videoid=useLocation().pathname.split("/")[2];
  const dispatch=useDispatch();
  useEffect(()=>{
    console.log(videoid)
    const getVideo=async()=>{
     
      dispatch(fetchStart());
       try{
        const res=await axios.get(`/video/find/${videoid}`);
        dispatch(fetchSuccess(res.data));
       }catch(err){
        dispatch(fetchFail());
       }
     }
     getVideo();
  },[videoid])
  const videotags=useSelector(state=>state.video.videodata.tags);
  return (
    <>
    <Container>
     <VideoSection/>
     <Recomandation tags={videotags}/>
    </Container>
    </>
  )
}

export default Video