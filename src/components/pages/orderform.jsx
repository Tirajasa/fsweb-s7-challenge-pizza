import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FormGroup, Input, Label } from 'reactstrap';
import styled from 'styled-components'
import Toppings from "../api/toppings"
import { useState } from 'react';


const ButtonX=styled.button`
  color:blue;
  background-color:grey;
  `
  
function OrderForm() {
  let history=useHistory();
const [toppings,setToppings]=useState(Toppings);

  function Verildi (){
    console.log("tebrikler!");
    history.push("/success")

  }
function checkMate (event) {
  const { id, checked }=event.target;
  
    setToppings(pretoppings=>pretoppings.map(topping=>
      topping.id=== parseInt(id)?{...topping,checked:checked }:topping)
    );
  
   
  
}

  return (
    <div>
     <div className='OredBan'>
      <img src="" alt="flag" />
      <p className='anasayfa'>Anasayfa-<p className='sipo'>Sipariş Oluştur</p></p>
     </div>
     <div className='OformLong'>
      <div className='absolute'>
        <div className='price-number'>
          {/* <p>{price}₺</p>
          <p>{rank}</p>
          <p>{(kisiSayisi)}</p> */}
        </div>
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
      </div>
    <FormGroup>
        <FormGroup className='boyut'>
            <Label>Boyut Sec </Label>
            <FormGroup >
                <Label>Kücük</Label>
                <Input type="radio" name='boyut' />
                <Label>Orta </Label>
                <Input type="radio" name='boyut' />
                <Label>Buyuk </Label>
                <Input type="radio" name='boyut' />
              </FormGroup>
        </FormGroup>

        <FormGroup className='kalin'>
          <Label for="kalinlik">Hamur Kalinligi </Label>
          <Input type='select' id="kalinlik" name='kalinlik'>
                  <option value="EkstraInce">Ekstra ince</option>
                  <option value="Ince">Ince</option>
                  <option value="Normal">Normal</option>
                  <option value="Kalin">Kalin</option> 
          </Input>
        </FormGroup>

        <h2>Ek Malzemeler </h2>
        {toppings.map((topping)=>(
         <FormGroup check key={topping.id} className='malzeme'>
      
          <Label htmlFor={topping.id}>{topping.name}</Label>
          <Input
           type='checkbox' 
           id={topping.id} 
           checked={topping.checked||false}
           onChange={checkMate}
           value={topping.id}
           />
       </FormGroup>
        ))}
        <FormGroup className='sipNot'>
          <Label htmlFor='not'>Siparis Notu</Label>
          <Input type='textarea' name='not'placeholder='Siparişine eklemek istediğin bir not var mı?'/>
        </FormGroup>
        
    </FormGroup>
        <ButtonX onClick={Verildi}>Siparis Ver</ButtonX>
        </div>
    </div>
  )
}

export default OrderForm