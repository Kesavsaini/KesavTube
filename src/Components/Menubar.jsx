import { AccountCircleOutlined, EmojiEventsOutlined, ExploreOutlined, FlagOutlined, HelpCenterOutlined, HelpCenterRounded, HelpOutlineOutlined, HistoryOutlined, Home, LibraryAddCheckOutlined, LibraryAddOutlined, LibraryMusicOutlined, LiveTvOutlined, LocalMoviesOutlined, MovieCreationOutlined, MusicNoteOutlined, MusicVideoOutlined, NewspaperOutlined, ReportOutlined, Settings, SettingsBrightnessOutlined, SportsBarOutlined, SportsEsportsOutlined, SubscriptionsOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
const Container=styled.div`
background-color: #282828;
height: calc(100vh - 60px);
color: white;
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
margin: 8px 5px;
gap: 10px;
cursor: pointer;
`;
const IconsTitle=styled.div`
color: gray;
font-size: 13px;
margin-bottom: 20px;
`;
const Hr=styled.hr`
margin: 15px 0px;
border:0.5px solid #373737;
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
const Menubar = () => {
  return (
    <>
    <Container>
      <IconBox>
        <Home/>
        Home
      </IconBox>
      <IconBox>
        <ExploreOutlined/>
        Explore
      </IconBox>
      <IconBox>
        <SubscriptionsOutlined/>
        Subscriptions
      </IconBox>
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
      <IconBox>
        <SettingsBrightnessOutlined/>
         Ligh Mode
      </IconBox>
    </Container>
    </>
  )
}

export default Menubar