import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

function Home() {
 
 
  const HomeImage=styled.img`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  object-fit: cover;
  top: 0px;
  position: fixed;
  z-index: 0;
  
  `
  const YaziContainer=styled.div`
  display: flex;
  flex-direction: column;
  width: 586px;
  height: 300px;
  margin: 0;
  padding: 0;
  z-index: 1;

  
  
  `
 const Tekno=styled.img`
 z-index: 1;

`
const YellowButton=styled.div`
  padding: 10px 5px;
  width: 193.27px;
  background-color: rgb(253,201,18);
  border-radius: 50px;
  font-family: 'Barlow';
  margin: 0;
  text-align: center;
  z-index: 1;
  cursor: pointer;
  &:hover
  {background-color: rgb(252, 224, 121);}
  `
  
  const Parag=styled.p`
  padding: 0;
  margin: 0;
  color: white;
  font-family: 'Roboto condensed';
  z-index: 1;

  `

const Raf=styled.p`
  padding: 0;
  margin: 0;
  z-index: 1;
  color: white;
  font-family: 'Roboto condensed';

  `
  let history=useHistory()
function buttonHandler(){
console.log("buttonclicked!");
history.push("/order");
}
  return (
   <>
    <Link to="/home">
      <HomeImage src="../../../Assets/mile1-assets/home-banner.png" alt="home">
      </HomeImage>
    </Link>
    <YaziContainer>
    <Tekno src="../../../Assets/mile1-assets/logo.svg" alt="logo" >
     </Tekno>
    <Parag>KOD ACIKTIRIR, </Parag>
    <Raf>PIZZA DOYURUR</Raf>
    <YellowButton onClick={buttonHandler}> ACIKTIM </YellowButton>
    </YaziContainer>
    </> 
  )
}

export default Home