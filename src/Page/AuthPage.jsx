import React from 'react'
import styled from 'styled-components'
import Signin from '../Components/Signin';
import Signup from '../Components/Signup';
const Container=styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper=styled.div`
background-color:${({theme})=>theme.bgLighter};
padding: 40px;
`;
const AuthCard=styled.div`
width: 300px;
display: flex;
flex-direction: center;
justify-content: center;
align-items: center;
`;
const Title=styled.div`
width: 100%;
color:${({theme})=>theme.text};
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
margin: 3px 0px;
font-weight: 600;
`;
const Desc=styled.div`
width: 100%;
color:${({theme})=>theme.text};
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
font-weight: 500;
`;
const Input=styled.input`
width: 90%;
color:${({theme})=>theme.text};
background:transparent;
outline: none;
border: 0.2px solid ${({theme})=>theme.soft};
padding: 10px;
margin:5px 0px;
`;
const Buttonwrapper=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const Button=styled.button`
background-color:  ${({theme})=>theme.soft};
border: none;
padding: 10px 20px;
color: ${({theme})=>theme.text};
cursor: pointer;
margin:10px 0px;
border-radius: 3px;
`;
const AuthPage = () => {
  return (
    <>
     <Container>
       <AuthCard>
        <Wrapper>
         <Title>Sign In</Title>
         <Desc>Continue to KesavTube</Desc>
          <Signin/>
         <Title>Or</Title>
         <Signup/>
        </Wrapper>
       </AuthCard>
     </Container>
    </>
  )
}

export default AuthPage