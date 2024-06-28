import React from 'react'
import styled from 'styled-components'




const Footerx= styled.div`
background-color: black;
display: flex;
column-gap:2vw;
margin:2vw auto 0;
width: 100vw;
height:340px;
justify-content: space-between;


`;
const Footery= styled.div`
background-color: black;
border-top: 1px solid gray;
height: 80px;
align-items: center;
color: white;
display: flex;
justify-content: space-between;


`;

const Sol= styled.div`
display: flex;
flex-direction: column;
row-gap: 15px;
margin-left: 140px;
position: relative;
left: 40px;
`;



const Sag= styled.div`
display: flex;
flex-direction: column;
position: relative;
right: 220px;
top: 60px;
margin: 0;
padding:0;


`;




function FooterC() {
  return (
    <div className='wholeDown'>
        <Footerx>
                    <div className='teknolojik'>
                        <Sol>
                            <div className='tumBina'>
                              <h2>Teknolojik Yemekler</h2>
                                <div className='altTabaka'>
                                    <img src="../../../Assets//mile2-aseets/footer/icons/icon-1.png" alt="konum" />
                                    <div className='istanbul'>
                                        <p>341 Londonderry Road,</p>
                                        <p>Istanbul Türkiye</p>
                                    </div>
                                </div>
                            </div>
                            <div className='pasta'>
                                <img src="../../../Assets//mile2-aseets/footer/icons/icon-2.png" alt="zarf" />
                                <p>aciktim@teknolojikyemekler.com</p>
                            </div>
                            <div className='pasta'>
                                <img src="../../../Assets//mile2-aseets/footer/icons/icon-3.png" alt="telefon" />
                                <p>+90 216 123 45 67</p>
                            </div>
                        </Sol>
                        <div className='orta'>
                            <div className='ates'>
                                <p className='ortah4'>Sıccacık Menuler</p>
                            </div>
                            <div className='textler'>
                                <p>Terminal Pizza</p>
                                <p>5 Kişilik Hackathlon Pizza</p>
                                <p>useEffect Tavuklu Pizza</p>
                                <p>Beyaz  Console Frosty</p>
                                <p>Testler Geçti Mutlu Burger</p>
                                <p>Position Absolute Acı Burger</p>
                            </div>
                        </div>
                    </div>
                    <Sag>
                        <h4 className='ins'>Instagram</h4>
                        <div className='ustSira'>
                            <img src="../../../Assets//mile2-aseets/footer/insta/li-0.png" alt="0" />
                            <img src="../../../Assets//mile2-aseets/footer/insta/li-1.png" alt="1" />
                            <img src="../../../Assets//mile2-aseets/footer/insta/li-2.png" alt="2" />
                        </div>
                        <div className='altSira'>
                            <img src="../../../Assets//mile2-aseets/footer/insta/li-3.png" alt="3" />
                            <img src="../../../Assets//mile2-aseets/footer/insta/li-4.png" alt="4" />
                            <img src="../../../Assets//mile2-aseets/footer/insta/li-5.png" alt="5" />
                        </div>
                    </Sag>
        </Footerx>
        <Footery>
            <p className='parti'>© 2023 Teknolojik Yemekler. </p>
            <i className="fab fa-twitter biter" aria-hidden="true"></i>
        </Footery>
    </div>
  )
}

export default FooterC