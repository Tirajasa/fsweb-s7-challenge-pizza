import React from 'react'
import { Card } from 'reactstrap';
import styled from 'styled-components';
import { useEffect } from 'react';




const SipTop=styled.h2`
font-size: 20px;
font-weight: 600;
font-family: 'Barlow';
`;

function MenuFis(props) {
  
const {extraTop,menu,selectedItems,toppings,menuSayisi,eklenmisItems }=props;{/*menunun icinden price i cek bu yanlis oluyo asagida!!!!*/}
// {cevap:menu tek bir sayiydi sen nasil price i cekiyorsun icinden ya!!}{artik degistirdim arraye alabilirsin, bunu bir dusun}



  return (
    <div>
       
{/* hatirlatma :her secilen menu icin maple donmeyi unutma -----------------*/}
   
        <Card >
          <SipTop>Sipariş Toplamı</SipTop>
          <div>
          {menuSayisi.map((menu, index) => (
           <div key={index}> <h3>{menu.ad}({menu.adet})</h3></div>
          ))}
            <h5>{}</h5>
            <h5>Ek Malzeme:{/*toppings*/}</h5>
          </div>
          <div><p>Seçimler:</p> <p>{/*extraTop*/}</p> </div>
          <div><p>Menu Toplami:</p> <p></p>{/*menu*/} </div>
       
          <div><p>Toplam:</p> <p></p>{/*totalPrice*/} </div>

        </Card>
      
    

    </div>
  )
}

export default MenuFis