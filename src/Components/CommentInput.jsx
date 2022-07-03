import React, { useRef, useState } from 'react'
import styled from 'styled-components'
const Container=styled.div``;
const ChenalImg=styled.img`
height: 50px;
width: 50px;
border-radius:50%;
object-fit: cover;
`;
const Wrapper=styled.div`
display: flex;
align-items: center;
gap: 12px;
`;
const Commentbar=styled.input`
width: 100%;
background-color: transparent;
border: none;
outline: none;
border-bottom:0.5px solid ${props=>props.focus ? ({theme})=>theme.text : ({theme})=>theme.soft};
color:${({theme})=>theme.text};
transition: all 0.5s ease;
`;
const Buttons=styled.div`
display: ${props=>props.focus?"flex":"none"};
justify-content: end;
gap: 12px;

`;
const Cancel=styled.button`
background: none;
border: none;
color: ${({theme})=>theme.textSoft};
font-size: 14px;
cursor: pointer;
`;
const Comment=styled.button`
background-color: ${props=>props.text? "#3ea6ff" :({theme})=>theme.soft};
color: ${props=>props.text? "black" :({theme})=>theme.textSoft};
border-radius: 2px;
cursor: pointer;
border: none;
padding: 10px 15px;
`;
const CommentInput = () => {
  const inputRef=useRef();
  const [focus,setFocus]=useState(false); 
  const [text,setText]=useState("");
  const handleCancle=()=>{
    setFocus(false);
    setText("");
    inputRef.current.value="";
    inputRef.blur();
  }
  return (
    <Container>
        <Wrapper>
          <ChenalImg src='https://yt3.ggpht.com/ytc/AKedOLTbg045fGOFicfS_gni7VvWycFSDMN-rLIalR79pw=s900-c-k-c0x00ffffff-no-rj'/>
          <Commentbar placeholder='Add a Comment...' ref={inputRef} onFocus={()=>setFocus(true)} focus={focus} onChange={(e)=>setText(e.target.value)}/>
        </Wrapper>
        <Buttons focus={focus}>
         <Cancel onClick={handleCancle}>CANCEL</Cancel>
         <Comment text={text.length>0} disabled={text.length<1}>COMMENT</Comment>
        </Buttons>
    </Container>
  )
}

export default CommentInput