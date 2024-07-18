import React from 'react'
import { Card } from 'reactstrap';
import styled from 'styled-components';
import { useEffect } from 'react';




const SipTop=styled.h2`
font-size: 20px;
font-weight: 600;
font-family: 'Barlow';
`;

function MenuFis({fis,form}) {
  
// const {}}=props;{/*menunun icinden price i cek bu yanlis oluyo asagida!!!!*/}
// {cevap:menu tek bir sayiydi sen nasil price i cekiyorsun icinden ya!!}{artik degistirdim arraye alabilirsin, bunu bir dusun}



  return (
   
    <div className='ekstresi' >
       
{/* hatirlatma :her secilen menu icin maple donmeyi unutma -----------------*/}
   
        
          <SipTop>Sipariş Toplamı</SipTop>
          <div>
          {/* {.map((menu, index) => ( */}
           {/* <div key={index}> <h3>{menu.ad}({menu.adet})</h3></div> */}
          {/* ))} */}
            <h5>{}</h5>
            <p>Ek Malzeme:</p><p>{form.toppings.join(', ')}</p>
            <div><p>Ek Malzeme Toplami:</p> <p>{fis.extras}</p> </div>
          </div>
          <div><p>Seçimler: {form.adet} adet</p> <p> {form.ad}</p> </div>
          
          <div><p>Menu Toplami:</p> <p>{fis.menu+fis.extras}*{form.adet}</p> </div>
       
          <div><p>Toplam:</p> <p>{(fis.menu+fis.extras)*form.adet}</p> </div>

      
      
    

    </div>
  )
}

export default MenuFis