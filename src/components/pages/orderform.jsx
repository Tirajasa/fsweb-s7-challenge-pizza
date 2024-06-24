import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FormGroup, Input, Label } from 'reactstrap';
import styled from 'styled-components'
import MenuFis from '../parts/order/MenuFis';
import FooterC from '../parts/home/footer';



const SipBut=styled.button`
  color:white;
  background-color:rgb(253,201,18);
  border-radius: 6px;
  `
const Num=styled.button`
border: 1px solid #d9d9d9;
background-color: white;
color: #000000;
`;

 const AzBut=styled.button`
 background-color:rgb(253,201,18);
 color:black;
 border-radius: 6px 0 0 6px;
 `; 
 const CokBut=styled.button`
 background-color:rgb(253,201,18);
 color:black;
 border-radius: 0 6px 6px 0;
 `; 
 
function OrderForm(props) {
const {numberx,setNumberx,showed,setShowed,
setBuyukluk,extraTop,setExtraTop,menu,setMenu,fis,setFis,
kalinlik,setKalinlik,buyukluk,selectedItems,setSelectedItems}=props;

  let history=useHistory();
 
function checkMate (event) {
  const { id, checked }=event.currentTarget;
  
    setToppings(prevtoppings=>prevtoppings.map(topping=>
      topping.id=== parseInt(id)?{...topping,checked:checked }:topping)
    );
    
}
function increase(){

  setNumberx(number=>number+1);
  }
  function decrease(){
    if(numberx>1){
     
      setNumberx(number=>number-1);
    }
  }

function SipVerildi (event){
  // const { id }=event.target;
  console.log("Siparis detaylari:",{showed,toppings: toppings.filter(topping => topping.checked),
    numberx,
    buyukluk,
    kalinlik,});
  history.push("/success")
  

 

}
function icerikGelsin(selectedItems){
  setShowed(selectedItems);
}


  return (
   
    <>
   
     <div className='OredBan'>
      <img src="" alt="flag" />
      <span className='anasayfa'>Anasayfa-<span className='sipo'>Sipariş Oluştur</span></span>
     </div>
     <div className='OformLong'>
     {showed && (
      <div className='absolute'>
            <h3>{showed.ad}₺</h3>
        <div className='price-number'>
            <p>{showed.price}₺</p>
            <p>{showed.rate}</p>
            <p>{showed.yorum}</p>
          </div>
          <p>{showed.aciklama}</p>
        </div>
         )}
        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
      </div>
   
    <FormGroup>
        <FormGroup className='boyut'>
            <Label>Boyut Sec </Label>
            <FormGroup >

                <Label>Küçük</Label>
                <Input type="radio" name='boyut' value='küçük"' 
                checked={buyukluk === "küçük"}
                onChange={(e) => setBuyukluk(e.target.value)} />

                <Label>Orta </Label>
                <Input type="radio" name='boyut' value="orta"
                checked={buyukluk === "orta"}
                onChange={(e) => setBuyukluk(e.target.value)}/>

                <Label>Buyuk </Label>
                <Input type="radio" name='boyut' value="büyük"
                checked={buyukluk === "büyük"}
                onChange={(e) => setBuyukluk(e.target.value)} />
              </FormGroup>
        </FormGroup>

        <FormGroup onChange={kalinlik} className='kalin'>
          <Label for="kalinlik">Hamur Kalinligi </Label>
          <Input type='select' id="kalinlik" name='kalinlik' value={kalinlik}
              onChange={(e) => setKalinlik(e.target.value)}>
                  <option value="EkstraInce">Ekstra ince</option>
                  <option value="Ince">Ince</option>
                  <option value="Normal">Normal</option>
                  <option value="Kalin">Kalin</option> 
          </Input>
        </FormGroup>

        <h2>Ek Malzemeler </h2>
        {
        willSelectedToppings.map((topping)=>(
         <FormGroup check key={topping.id} className='malzeme'>
      
          <Label htmlFor={topping.id}>{topping.ad}</Label>
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
        <FormGroup>
          <AzBut onClick={decrease}>-</AzBut>
          <Num>{numberx}</Num>
          <CokBut onClick={increase}>+</CokBut>
        </FormGroup>
       <MenuFis extraTop={extraTop} setExtraTop={setExtraTop} menu={menu} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        
    </FormGroup>
        <SipBut onClick={SipVerildi}>Siparis Ver</SipBut>
        <FooterC/>
    </>
  
  )
}


export default OrderForm