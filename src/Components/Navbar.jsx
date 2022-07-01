import { AccountBox, AccountBoxRounded, AccountCircle, AccountCircleOutlined, DensityMedium, Search } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
display: flex;
justify-content: space-between;
background-color: #282828;
color: white;
padding: 10px;
height: 40px;
position: sticky;
top: 0;
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
border: 2px solid #303030;
width: 100%;
height: 40px;
`;
const SearchInput=styled.input`
background:transparent;
border: none;
outline: none;
color:white;
width: 90%;
height: 100%;
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color:white;
  opacity: 1; /* Firefox */
}
`;
const SerachIconbox=styled.div`
background-color:#313131;
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
const Navbar = () => {
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
          <SearchInput placeholder='Search'/>
          <SerachIconbox>
          <Search/>
          </SerachIconbox>
         </Searchbox>
        </Center>
        <Right>
          <SignIn>
            <AccountCircleOutlined/>
            SIGN IN 
          </SignIn>
        </Right>
     </Container>
    </>
  )
}

export default Navbar