import styled from 'styled-components'
import React from 'react'
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
const Comment = () => {
  return (
    <Container>
        <Userinfo>
        <ChenalImg src='https://yt3.ggpht.com/ytc/AKedOLTbg045fGOFicfS_gni7VvWycFSDMN-rLIalR79pw=s900-c-k-c0x00ffffff-no-rj'/>
        <ChennalInfo>
        <ChennalName>Rob C 
          <Date>2 days ago</Date>
            </ChennalName> 
            <CommentText>Aaj tak kabhi kyo tu aaya nahi label pe ? Abhi bhi tu betha kyon wahee same level pe ?Tu aana chahta TV pe, main aa Chuka kabka</CommentText>
        </ChennalInfo>
        </Userinfo>
    </Container>
  )
}

export default Comment