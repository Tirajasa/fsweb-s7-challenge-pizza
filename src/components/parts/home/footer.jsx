import React from 'react'
import styled from 'styled-components'




const Footerx= styled.div`
background-color: black;

`;
const Footery= styled.div`
background-color: black;
border-top: 1px solid gray;

`;

const Sol= styled.div``;

const Orta= styled.div``;

const Sag= styled.div`
display: flex;
flex-direction: column;
`;




function FooterC() {
  return (
    <div>
        <Footerx>
        <div>
            <Sol>
                <div>
                    <img src="../../../Assets//mile2-aseets/footer/icons/icon-1.png" alt="konum" />
                    <p>341 Londonderry Road,</p>
                    <p>Istanbul Türkiye</p>
                </div>
                <div>
                    <img src="../../../Assets//mile2-aseets/footer/icons/icon-2.png" alt="zarf" />
                    <p>aciktim@teknolojikyemekler.com</p>
                </div>
                <div>
                    <img src="../../../Assets//mile2-aseets/footer/icons/icon-3.png" alt="telefon" />
                    <p>+90 216 123 45 67</p>
                </div>
            </Sol>
            <Orta>
                <h4>Sıccacık Menuler</h4>
                <div className='textler'>
                <p>Terminal Pizza</p>
                <p>5 Kişilik Hackathlon Pizza</p>
                <p>useEffect Tavuklu Pizza</p>
                <p>Beyaz  Console Frosty</p>
                <p>Testler Geçti Mutlu Burger</p>
                <p>Position Absolute Acı Burger</p>
                </div>
            </Orta>
        </div>
        <Sag>
            <h4>Instagram</h4>
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
            <p>© 2023 Teknolojik Yemekler. </p>
            <i class="fa fa-twitter" aria-hidden="true"></i>
        </Footery>
    </div>
  )
}

export default FooterC