import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FormGroup, Input, Label } from 'reactstrap';
import styled from 'styled-components'

const ButtonX=styled.button`
  color:blue;
  background-color:grey;
  `
  
function OrderForm() {
  let history=useHistory();

  function Verildi (){
    console.log("tebrikler!");
    history.push("/success")

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
                <Input type="radio" />
                <Label>Orta </Label>
                <Input type="radio" />
                <Label>Buyuk </Label>
                <Input type="radio" />
              </FormGroup>
        </FormGroup>

        <FormGroup className='kalin'>
          <Label for="kalinlik">Hamur Kalinligi </Label>
          <Input type='select' id="kalinlik" name='kalinlik'>
                  <option value="kalinlik">Ekstra ince</option>
                  <option value="kalinlik">Ince</option>
                  <option value="kalinlik">Normal</option>
                  <option value="kalinlik">Kalin</option> 
          </Input>
        </FormGroup>
    </FormGroup>
        <ButtonX onClick={Verildi}>Siparis Ver</ButtonX>
        </div>
    </div>
  )
}

export default OrderForm