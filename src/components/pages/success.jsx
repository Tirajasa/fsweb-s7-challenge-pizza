import React from 'react'
import { Card } from 'reactstrap';
import styled from 'styled-components'
const Banner=styled.img`
  position: relative;
  align-items: center;
  top: 50px;
  `


function Success(props) {
  const {fis}=props;
  return (
    < >
      <div className='redflag'>
        <Banner src="../../../Assets/mile1-assets/logo.svg" ></Banner>
        <div className='sipozet'>

        </div>
        <Card className='ekstresi'>
          

        </Card>
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