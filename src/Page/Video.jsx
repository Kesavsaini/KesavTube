import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
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
        const res=await axios.get(`http://localhost:8000/api/video/find/${videoid}`);
        dispatch(fetchSuccess(res.data));
       }catch(err){
        dispatch(fetchFail());
       }
     }
     getVideo();
  },[videoid])
  return (
    <>
    <Container>
      Heelo
     <VideoSection/>
     {/* <Recomandation/> */}
    </Container>
    </>
  )
}

export default Video