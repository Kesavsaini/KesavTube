import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import styled from 'styled-components'
import Card from '../Components/Card'
const Container=styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`;
const Home = ({type}) => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    const getVideos=async()=>{
       try{
        const res=await axios.get(`/video/${type}`);
        setVideos(res.data);
       }catch(err){
        console.log(err);
       }
     }
     getVideos();
  },[type])
  return (
   <>
   <Container>
    {
      videos && videos.map((item)=>{
        return(
          <Card data={item} key={item.videoId}/>
        );
      })
    }
   
   </Container>
   </>
  )
}

export default Home