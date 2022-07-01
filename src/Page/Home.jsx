import React from 'react'
import styled from 'styled-components'
import Card from '../Components/Card'
const Container=styled.div`
width: 88vw;
display: flex;
flex-wrap: wrap;
background-color: ${({theme})=>theme.bg};
padding: 10px;
`;
const Home = () => {
  return (
   <>
   <Container>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   <Card/>
   </Container>
   </>
  )
}

export default Home