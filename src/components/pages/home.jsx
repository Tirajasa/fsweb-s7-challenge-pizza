import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const HomeImage=styled.img`
width: 100vw;
height: 100vh;
margin: 0;
padding: 0;
object-fit: cover;
top: 0px;
left:0px; 
z-index: 0;
position: absolute;


`
const YaziContainer=styled.div`
display: flex;
flex-direction: column;
width: 586px;
height: 300px;
margin: 0;
padding: 0;
z-index: 1;
justify-content: baseline;
align-items: center;

`
const Tekno=styled.img`
z-index: 1;
top:30px; 
position: relative;
margin: 0;
padding: 0;

`
const YellowButton=styled.div`
padding: 10px 5px;
width: 195px;
background-color: rgb(253,201,18);
border-radius: 50px;
font-family: 'Barlow';
margin: 0;
text-align: center;
z-index: 1;
cursor: pointer;
&:hover
{background-color: rgb(252, 224, 121);}
vertical-align: bottom;
justify-content: end;
`

const Parag=styled.p`
padding: 0;
margin: 0;
color: white;
font-family: 'Roboto condensed';
z-index: 1;
font-size: 76px;
font-weight: 300;
`

const Raf=styled.p`
padding: 0;
margin: -2rem 0 0 0;
z-index: 1;
color: white;
font-family: 'Roboto condensed';
font-weight: 300;
font-size: 76px;
`

function Home() {
  let history=useHistory()
function buttonHandler(){
console.log("buttonclicked!");
history.push("/order");
}
  return (
   <>
    <div className='orumcek'>
      <HomeImage src="../../../Assets/mile1-assets/home-banner.png" alt="home">
      </HomeImage>
      <div className='tepe'>
        <Tekno src="../../../Assets/mile1-assets/logo.svg" alt="logo" >
        </Tekno>
       </div>
      <YaziContainer>
        <div className='yaziPartial'>
        <Parag>KOD ACIKTIRIR, </Parag>
        <Raf>PİZZA DOYURUR</Raf>
        </div>
        <YellowButton onClick={buttonHandler}> ACIKTIM </YellowButton>
      </YaziContainer>
    </div>
    </> 
  )
}

export default Home