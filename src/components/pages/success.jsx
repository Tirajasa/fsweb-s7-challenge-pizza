import React from 'react'
import styled from 'styled-components'
const Banner=styled.img`
  position: relative;
  align-items: center;
  top: 50px;
 
  `
function Success() {
  
  return (
    < >
      <div className='redflag'>
        <Banner src="../../../Assets/mile1-assets/logo.svg" ></Banner>
        <div className='wrap'>
          <div className='onay'>
          <p>TEBRİKLER!</p>
          <p>SİPARİŞİNİZ ALINDI!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Success