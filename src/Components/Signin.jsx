import axios from 'axios';
import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { auth, provider } from '../firebase';
import { loginFail, loginStart, loginSuccess } from '../redux/userRedux';
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
flex-direction: column;
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
const Button=styled.button`
background-color:  ${({theme})=>theme.soft};
border: none;
padding: 10px 20px;
color: ${({theme})=>theme.text};
cursor: pointer;
margin:10px 0px;
border-radius: 3px;
`;
const Signin = () => {
  const handleGoogle=()=>{
    dispatch(loginStart());
    signInWithPopup(auth,provider).then((result)=>
      axios.post("/auth/signin/google",{
        name:result.user.displayName,
        email:result.user.email,
        img:result.user.photoURL
      }).then((user)=>{
        dispatch(loginSuccess(user.data));
      }).catch(err=>dispatch(loginFail()))
    ).catch(err=>console.log(err));
  }
  const [name,setName]=useState();
  const [password,setPassword]=useState();
  const dispatch=useDispatch();
  const handleLogin=async(e)=>{
      e.preventDefault();
      dispatch(loginStart())
       try{
        const res=await axios.post(`/auth/signin`,{name,password});
        dispatch(loginSuccess(res))
       }catch(err){
        dispatch(loginFail())
       }
  }
  return (
    <>
     <Container>
         <Input placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
         <Input placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
         <Buttonwrapper>
         <Button onClick={handleLogin}>Sign In</Button>
         <Title>Or</Title>
         <Button onClick={handleGoogle}>Sign In With Google</Button>
         </Buttonwrapper>
     </Container>
    </>
  )
}

export default Signin