import React from 'react'
import { Card } from 'reactstrap';
import styled from 'styled-components';
import { useEffect } from 'react';

function MenuFis(props) {
  
const {extraTop,setExtraTop,menu,selectedItems,setSelectedItems}=props;{/*menunun icinden price i cek bu yanlis oluyo asagida!!!!*/
}


  const SipTop=styled.h2`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Barlow';
  `;
  

  return (
    <div>

        <Card >
          <SipTop>Sipariş Toplamı</SipTop>
          <div><p>Seçimler</p> <p>{extraTop}</p> </div>
          <div><p>Toplam</p> <p></p>{extraTop+menu} </div>

        </Card>




    </div>
  )
}

export default MenuFis