import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from "./Card"
const Container=styled.div`
flex: 2;
`;
const Recomandation = ({tags}) => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    const getVideos=async()=>{
       try{
        const res=await axios.get(`/video/tag?tags=${tags}`);
        setVideos(res.data);
       }catch(err){
        console.log(err);
       }
     }
     getVideos();
  },[tags])
  return (
    <Container>
      { videos && videos.map((data)=>{
        return(
          <Card type="hz" data={data}/>
        );
      })
        
      }

    </Container>
  )
}

export default Recomandation