import React from 'react'
import { Card } from 'reactstrap';
import styled from 'styled-components'
const Banner=styled.img`
  position: relative;
  align-items: center;
  top: 50px;
  `


function Success(props) {
  const {fis,menuSayisi}=props;
  return (
    < >
      <div className='redflag'>
        <Banner src="../../../Assets/mile1-assets/logo.svg" ></Banner>
       
        <div className='wrap'>
          <div className='onay'>
          <p>TEBRİKLER!</p>
          <p>SİPARİŞİNİZ ALINDI!</p>
          </div>
          <div className="siparis-ekstre">
            {menuSayisi.ad}
            {menuSayisi.adet}
          {/* {yanlis oluyo bunu duzeltmen lazim---------------} */}
          <div className='sipozet'>

          </div>
          <div className='ekstresi'>
  

         </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Success