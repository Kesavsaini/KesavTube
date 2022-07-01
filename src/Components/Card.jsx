import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
width: 360px;
margin-bottom: 45px;
cursor: pointer;
margin: 10px;
margin-bottom: 10px;
`;
const Image=styled.img`
width: 100%;
height: 202px;
background-color: #999;
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
`;
const VideoTitle=styled.div`
color: ${({theme})=>theme.text};
font-size: 16px;
margin-bottom: 5px;
`;
const Textwrapper=styled.div`
display: flex;
flex-direction: column;
`;
const Info=styled.div`

`;
const ChennalName=styled.div`
color: ${({theme})=>theme.textSoft};
`;
const Otherinfo=styled.div`
color: ${({theme})=>theme.textSoft};
`;
const Card = () => {
  return (
   <>
   <Container>
      <Image src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/232616182/original/0f65e9367af2fa2433533f5e6fa5a301f98fce41/design-eye-catchy-clickbait-youtube-thumbnails-in-2-hours.jpg'/>
      <Details>
        <ChenalImg src="https://www.thewikifeed.com/wp-content/uploads/2021/06/neha-sharma-1.jpg"/>
        <Textwrapper>
        <VideoTitle>How to Make Money Online | Ghar baithe paise kamaye</VideoTitle>
        <Info>
       <ChennalName>Neha sharma</ChennalName>
       <Otherinfo>600k views. 12 hours ago</Otherinfo>
       </Info>
        </Textwrapper>
      </Details>
   </Container>
   </>    
  )
}

export default Card