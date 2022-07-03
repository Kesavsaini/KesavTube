import React from 'react'
import styled from 'styled-components';
import Recomandation from '../Components/Recomandation';
import VideoSection from '../Components/VideoSection';
const Container=styled.div`
width: 100%;
display: flex;
`;
const Video = () => {
  return (
    <>
    <Container>
     <VideoSection/>
     <Recomandation/>
    </Container>
    </>
  )
}

export default Video