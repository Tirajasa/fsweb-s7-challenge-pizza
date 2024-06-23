import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { Button, Card } from 'reactstrap'
import styled from 'styled-components'
import FooterC from '../parts/home/footer'
import Siparisver from "../parts/home/siparisver"



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
const Hat=styled.div`
background-color:gray;

`;


function Homeb(props) {
  const {selectedCategory,setSelectedCategory,selectedItems, setSelectedItems}=props;
  const [clicked,setClicked]=useState("Pizza")
  let history=useHistory()

function buttonHandler(){
console.log("buttonclicked!");
history.push("/order");
}
function iconaTikla(event){
  history.push("/home#icons");
  setClicked(event.target);
  setSelectedCategory(event.target);
}

function categorySec (event){
 
  setClicked(event.currentTarget);
  setSelectedCategory(event.currentTarget);
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
      <div className='bosluk'>
      <div className='ikonlar' onClick={iconaTikla} >
        <div><img src="../../../Assets//mile2-aseets/icons/1.svg"/><span>YENI!Kore</span></div>
        <div><img src="../../../Assets//mile2-aseets/icons/2.svg"/><span>Pizza</span></div>
        <div><img src="../../../Assets//mile2-aseets/icons/3.svg"/><span>Burger</span></div>
        <div><img src="../../../Assets//mile2-aseets/icons/4.svg"/><span>Kizartmalar</span></div>
        <div><img src="../../../Assets//mile2-aseets/icons/5.svg"/><span>Fast food</span></div>
        <div><img src="../../../Assets//mile2-aseets/icons/6.svg"/><span>Gazli Icecek</span></div>
        </div>
      </div>
      <div className='ortaPart'>
        <div className='solyanres'>
        <img  src="../../../Assets//mile2-aseets/cta/kart-1.png" alt="pizza"/>
       <div className="toplayici">
        <h1>Özel</h1>
        <h1>  Lezzetus</h1>
        <p>Position:Absolute Acı Pizza</p>
        <Siparisver onClick={buttonHandler}/>
        </div>
        </div>
        <div className='sagyanres'>
          <div className='ustres'>
            <img src="../../../Assets//mile2-aseets/cta/kart-2.png" alt="hackathlon" />
            <div className="toplayici">
            <h3>Hackathlon</h3>
            <h3>Burger Menü</h3>
            <Siparisver/>
            </div>
          </div>
          <div className='altres'>
            <img src="../../../Assets//mile2-aseets/cta/kart-3.png" alt="kurye" />
            <div className="toplayici">
            <div> <span className="red">Çoooook </span><span>hızlı </span></div>
              <p>npm gibi kurye</p>
              <Siparisver/>
            </div>
          </div>
        </div>
        </div>
      
      <div id='icons'>
        <h3 className="satisfy" >en çok paketlenen menüler</h3>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
      
    

        <div className='saydam' >
              <div className="bot">
                      <div class="bale" onClick={categorySec}><img src="../../../Assets//mile2-aseets/icons/1.svg"/><p>Ramen</p></div>
                      <div class="bale" onClick={categorySec}><img src="../../../Assets//mile2-aseets/icons/2.svg"/><p>Pizza</p></div>
                      <div class="bale" onClick={categorySec}><img src="../../../Assets//mile2-aseets/icons/3.svg"/><p>Burger</p></div>
                      <div class="bale" onClick={categorySec}><img src="../../../Assets//mile2-aseets/icons/4.svg"/><p>French Fries</p></div>
                      <div class="bale" onClick={categorySec}><img src="../../../Assets//mile2-aseets/icons/5.svg"/><p>Fast food</p></div>
                      <div class="bale" onClick={categorySec}><img src="../../../Assets//mile2-aseets/icons/6.svg"/><p>Soft Drinks</p></div>
              </div>
        </div >
    

        <div className="ortu">
                <div className="sunum">
                {selectedCategory.items.map((item, index) => (
                    <div className="cardcik" onClick={(e)=>setSelectedItems(e.target.value)} key={item.id}>
                      
                        <img src={item.resim} alt={item.ad} />
                        <div className="kat" >
                      
                          <h4>{item.ad}</h4>
                          <div className="line">
                                  <p>{item.rate}</p>
                                  <p>({item.yorum})</p>
                                  <h5>{item.price}</h5>
                          </div>
                        </div>
                    
                     
                    </div>
                     ))}
                </div>
        </div>
      </div>
      <FooterC></FooterC>
    </> 
  )
}

export default Homeb