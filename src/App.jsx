import './App.css';
import Home from './Page/Home';
import Navbar from './Components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import Menubar from './Components/Menubar';
import { darkTheme, LightTheme } from './utils/Theme';
import { useState } from 'react';
import Video from './Page/Video';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const Container=styled.div`

`;
const Wrapper=styled.div`
display: flex;

`;
const Pages=styled.div`
width: 88vw;
padding: 15px;
background-color: ${({theme})=>theme.bg};
`;
function App() {
  const [isDark,setDark]=useState(true);
  return (
   <>
   <ThemeProvider theme={isDark?darkTheme:LightTheme}>
    <Container>
      <Navbar/>
      <Wrapper>
        <Menubar isDark={isDark} setDark={setDark}/>
        <Pages>
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Video />} />
    </Routes>
  </BrowserRouter>
  </Pages>
      </Wrapper>
    </Container>
    </ThemeProvider>
   </>
  );
}

export default App;
