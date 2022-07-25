import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
`
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
const Signup = () => {
  return (
    <>
     <Container>
         <Input placeholder='Username'/>
         <Input placeholder='email'/>
         <Input placeholder='Password'/>
         <Buttonwrapper>
         <Button>Sign Up</Button>
         </Buttonwrapper>
     </Container>
    </>
  )
}

export default Signup