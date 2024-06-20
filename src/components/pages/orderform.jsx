import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components'

function OrderForm() {
  const Button=styled.button`
  color:blue;
  background-color:grey;
  `
  let history=useHistory();
  function Verildi (){
    console.log("tebrikler!");
    history.push("/success")

  }
  return (
    <div>
     
      <Button onClick={Verildi}>Siparis Ver</Button>
    
    </div>
  )
}

export default OrderForm