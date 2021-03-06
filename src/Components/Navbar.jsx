import {VideoCallOutlined, AccountCircleOutlined, DensityMedium, Search } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import Upload from './Upload';
import { useNavigate } from 'react-router-dom';

const Container=styled.div`
display: flex;
justify-content: space-between;
background-color:${({theme})=>theme.bgLighter};
color: ${({theme})=>theme.text};
padding: 10px;
height: 40px;
position: sticky;
top: 0;
z-index: 99;
`;
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Mainlogo=styled.div`
display: flex;
margin-left: 10px;
align-items: center;
`;
const Logo=styled.img`
height: 20px;
`;
const Title=styled.h2`
letter-spacing:-2px;
`;
const Center=styled.div`
flex: 2;

`;
const Searchbox=styled.div`
display: flex;
align-items: center;
border: 2px solid ${({theme})=>theme.soft};
width: 100%;
height: 40px;
`;
const SearchInput=styled.input`
background-color:${({theme})=>theme.bg};
border: none;
outline: none;
color:${({theme})=>theme.text};
width: 90%;
height: 100%;
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: ${({theme})=>theme.text};
  opacity: 1; /* Firefox */
}
`;
const SerachIconbox=styled.div`
/* background-color:#313131; */
background-color: ${({theme})=>theme.bgLighter};
width:10%;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
cursor: pointer;
`;
const Right=styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
`;
const SignIn=styled.button`
display: flex;
align-items: center;
background: transparent;
color: #107bd8;
border:2px #107bd8 solid;
padding: 0px 10px;
cursor: pointer;
`;
const Avtar=styled.img`
width: 32px; 
height: 32px;
border-radius: 50%;

`
const Acount=styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({theme})=>theme.text};
`
const Navbar = () => {
  const navigate=useNavigate();
  const user=useSelector(state=>state.user.currUser);
  const [open,setOpen]=useState(false)
  const [q,setQ]=useState("");
  return (
    <>
     <Container>
        <Left>
        <DensityMedium/>
         <Mainlogo>
         <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"/>
         <Title>
          KesavTube
         </Title>
         </Mainlogo>
        </Left>
        <Center>
         <Searchbox>
          <SearchInput placeholder='Search' onChange={(e)=>setQ(e.target.value)}/>
          <SerachIconbox onClick={()=>navigate(`/search?q=${q}`)}>
          <Search/>
          </SerachIconbox>
         </Searchbox>
        </Center>
        <Right>
        
         { user ?
         <Acount>
          <VideoCallOutlined style={{fontSize:"35px",cursor:"pointer"}} onClick={()=>setOpen(true)}/>
          <Link to="/signin" style={{textDecoration:"none"}}>
            <Avtar src={user.img}/>
          </Link>
         </Acount>:
         <Link to="/signin" style={{textDecoration:"none"}}>
         <SignIn>
            <AccountCircleOutlined/>
            SIGN IN 
          </SignIn>
          </Link>
          }

        </Right>
     </Container>
     {open && <Upload setOpen={setOpen}/> }
    </>
  )
}

export default Navbar