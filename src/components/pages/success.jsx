import React from 'react'
import styled from 'styled-components'

function Success() {
  const Banner=styled.img`
  position: fixed;
  align-items: center;
  
 border: 1px solid black;
  `
  return (
    < >
      <div className='redflag'>
      <Banner src="../../../Assets/mile1-assets/logo.svg" ></Banner>
      <div className='onay'>
      <p>TEBRIKLER!</p>
      <p>SIPARISINIZ ALINDI!</p>
      </div>
      </div>
    </>
  )
}

export default Success