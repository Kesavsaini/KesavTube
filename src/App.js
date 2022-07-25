import './App.css';
import Home from './Page/Home';
import Navbar from './Components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import Menubar from './Components/Menubar';
import { darkTheme, LightTheme } from './utils/Theme';
import { useState } from 'react';
import Video from './Page/Video';
import AuthPage from './Page/AuthPage';

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
    <BrowserRouter>
      <Navbar/>
      <Wrapper>
        <Menubar isDark={isDark} setDark={setDark}/>
        <Pages>
        
    <Routes>
        <Route path="/" element={<Home type="random"/>} />
        <Route path="/trending" element={<Home type="trends"/>} />
        <Route path="/subscription" element={<Home type="subs"/>} />
        <Route path="/signin" element={<AuthPage />} />
        <Route path="/video/:id" element={<Video />} />
        Route
    </Routes>

  </Pages>
      </Wrapper>
      </BrowserRouter>
    </Container>

    </ThemeProvider>
   </>
  );
}

export default App;
