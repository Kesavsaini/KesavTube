import { AccountCircleOutlined, EmojiEventsOutlined, ExploreOutlined, FlagOutlined, HelpOutlineOutlined, HistoryOutlined, Home,  LibraryAddOutlined, LibraryMusicOutlined, LiveTvOutlined, MovieCreationOutlined,NewspaperOutlined,Settings, SettingsBrightnessOutlined,  SportsEsportsOutlined, SubscriptionsOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import {Link } from "react-router-dom"
const Container=styled.div`
background-color:${({theme})=>theme.bgLighter};
height: calc(100vh - 60px);
color: ${({theme})=>theme.text};
padding: 0px 10px;
width: 12vw;
position: sticky;
left: 0;
top:60px;
overflow-y: scroll;
overflow-x: hidden;
::-webkit-scrollbar {
  width:3px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: gray; 
  border-radius: 10px;
}

`;
const IconBox=styled.div`
display: flex;
align-items: center;
padding: 5px;
margin: 8px 0px;
gap: 10px;
width: 100%;
color: ${({theme})=>theme.text};
cursor: pointer;
&:hover{
  background-color: ${({theme})=>theme.soft};
}
border-radius: 5px;
`;
const IconsTitle=styled.div`
color: gray;
font-size: 13px;
margin-bottom: 20px;
`;
const Hr=styled.hr`
margin: 15px 0px;
border:0.5px solid ${({theme})=>theme.soft};
`;
const SignInBox=styled.div`
width: 100%;
font-size: 12px;
margin: 12px 10px;
`;
const SignIn=styled.button`
display: flex;
align-items: center;
background: transparent;
color: #107bd8;
border:2px #107bd8 solid;
padding: 0px 10px;
cursor: pointer;
margin: 12px 10px;
`;
const Menubar = ({isDark,setDark}) => {
  return (
    <>
    <Container>
      <IconBox>
        <Home/>
        Home
      </IconBox>
      <Link to="/trending" style={{textDecoration:"none"}}>
      <IconBox>
        <ExploreOutlined/>
        Explore
      </IconBox>
      </Link>
      <Link to="/subscription" style={{textDecoration:"none"}}>
      <IconBox>
        <SubscriptionsOutlined/>
        Subscriptions
      </IconBox>
      </Link>
      <Hr/>
      <IconBox>
        <LibraryAddOutlined/>
        Library
      </IconBox>
      <IconBox>
        <HistoryOutlined/>
        History
      </IconBox>
      <Hr/>
      <SignInBox>
        Sign in to like videos, comment and subscribe
      </SignInBox>
      <SignIn>
            <AccountCircleOutlined/>
            SIGN IN 
          </SignIn>
          <Hr/>
          <IconsTitle>BEST OF KESAVTUBE</IconsTitle>
      <IconBox>
        <LibraryMusicOutlined/>
        Music
      </IconBox>
      <IconBox>
        <EmojiEventsOutlined/>
        Sports
      </IconBox>
      <IconBox>
        <SportsEsportsOutlined/>
         Gaming
      </IconBox>
      <IconBox>
        <MovieCreationOutlined/>
         Movies
      </IconBox> 
      <IconBox>
        <NewspaperOutlined/>
         News
      </IconBox> 
      <IconBox>
        <LiveTvOutlined/>
         Live
      </IconBox> 
      <Hr/>
      <IconBox>
        <Settings/>
         Settings
      </IconBox> 
      <IconBox>
        <FlagOutlined/>
         Report
      </IconBox>
      <IconBox>
        <HelpOutlineOutlined/>
         Help
      </IconBox>
      <IconBox onClick={()=>setDark(!isDark)}>
        <SettingsBrightnessOutlined/>
         Ligh Mode
      </IconBox>
    </Container>
    </>
  )
}

export default Menubar