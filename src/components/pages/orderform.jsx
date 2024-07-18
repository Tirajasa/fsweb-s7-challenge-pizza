import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";
import MenuFis from "../parts/order/MenuFis";
import FooterC from "../parts/home/footer";

const SipBut = styled.button`
  color: white;
  background-color: rgb(253, 201, 18);
  border-radius: 6px;
`;
const Num = styled.div`
  border: 1px solid #d9d9d9;
  background-color: white;
  color: #000000;
  width: 50px;
  height: 50px;
  display: flex;

 align-items: center;
 justify-content: center;
`;

const AzBut = styled.button`
  background-color: rgb(253, 201, 18);
  color: black;
  border-radius: 6px 0 0 6px;
 

`;
const CokBut = styled.button`
  background-color: rgb(253, 201, 18);
  color: black;
  border-radius: 0 6px 6px 0;
 
  
`;

function OrderForm(props) {
  const {initialForm,
    errors,
    setErrors,
    numberx,
    setNumberx,
    showed,
    setShowed,
    selectedItems,
    setSelectedItems,
   form,setForm,fis,setFis
  } = props;


  const errorlar={
    userName:"Gecerli bir isim giriniz, en az 3 harf icermelidir.",
    //direk order sayfasini acinca bir urun secmelisiniz erroru yazabiliriz veya hizli satin al butonu insa edebiliriz
    buyukluk:"Urunun boyutunu secmeyi unuttunuz",
    kalinlik:"Urunun inceligini secmelisiniz",
    toppings:["en az 4 ek malzeme seciniz.","10 adetten fazla ek malzeme secemezsiniz.",],
    adet:"Ayni urun icin 10 adetten fazla pizza siparis veremezsiniz.",
    not:"Siparis notunuz "
      }
function checkMate(event){
  const {name}=event.target;

    if(form.toppings.includes(name)){
      const isaretlenenler=form.toppings.filter(topping=>topping!=name)
      setForm({...form,toppings:isaretlenenler})
      
    }else{
      const newForm=[...form.toppings,name]
      setForm({...form,toppings:newForm})
    
  }
}
  let history = useHistory();

  function increase(event) {
    event.preventDefault();
    setNumberx((number) => number + 1);
    setForm({...form,adet:numberx+1})
  }
  function decrease(event) {
    event.preventDefault();
    if (numberx > 1) {
      setNumberx((number) => number - 1);
      setForm({...form,adet:numberx-1})
    }
  }
  
  
 function successegit(){
  history.push("/success");
 }

  function sipVerildi(event) {
    event.preventDefault();
    successegit();

    setForm({
      ...form,
      username:form.username,
      ad:selectedItems.ad,
      adet:form.adet,
      buyukluk: form.buyukluk,
      kalinlik: form.kalinlik,
      toppings: form.toppings,
      not:form.not,
    }) ;
    setFis({
      ...fis,
      menu: selectedItems.price,
  });


    console.log("Siparis detaylari:", {
      username:form.username,
      ad:selectedItems.ad,
      toppings: form.toppings,
      adet:form.adet,
      buyukluk:form.buyukluk,
      kalinlik:form.kalinlik,
      not:form.not,
    });
    console.log("here are the toppings:",fis.extras,"here menu:", fis.menu);
    
 
 
    console.log("fis:",form);
   
  
  }
  function icerikGelsin(selectedItems) {
    setShowed(selectedItems);
    setForm({...form,ad:selectedItems.ad})
  }
  // ✔
  function showErrors(){
    if(!form.buyukluk){
      setErrors({...errors,buyukluk:errorlar.buyukluk})

    }else{
      setErrors({...errors})}

  }

  useEffect(() => {
    if (selectedItems) {
      icerikGelsin(selectedItems);
    }
  }, [selectedItems]);

  function handleClear(){

    setForm(initialForm);
  }
 

  return (
    <>
     <form>
      <div className="arkasari">
        <div className="OredBan">
  
          <img src="../../../Assets/mile1-assets/logo.svg" alt="flag" />
          <div className="ince">
            <span className="anasayfa">Anasayfa-</span>
            <span className="sipo">Sipariş Oluştur</span>
          </div>
        </div>
        <div className="pattes">
          <img
            src="../../../Assets/mile2-aseets/pictures/form-banner.png"
            alt="yarim pizza"
          />
        </div>
      
        <div className="OformLong">
          {showed && (
            <div className="absolute">
              <h3>{showed.ad}</h3>
              <div className="price-number">
                <p>{showed.price}₺</p>
                <div className="sessiz">
                  <p>{showed.rate}</p>
                  <p>({showed.yorum})</p>
                </div>
              </div>
              <div className="acikla">
                <p>{showed.aciklama}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="white">
        <div className="ortaAlan">
          <div className="ikili">
            <div className="boyut">
           { errors.buyukluk&&
              <p className="red">*{errors.buyukluk}*</p>}
              <div>
              <h3 className="inline">Boyut Seç </h3><p  className="red inline">*</p>
              </div>
              <div className="boy">
                <FormGroup>
                  <Label htmlFor="küçük " className="kuccukx ">
                    S
                    <Input 
                      id="küçük"
                      type="radio"
                      name="boyut"
                      value="küçük"
                      checked={form.buyukluk === "küçük"}
                      onChange={(e) => setForm({...form,buyukluk:e.target.value})}
                      className="kuccuk"
                    />
                    <div className="kuc"></div>
                  </Label>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="orta " className="kuccukx">
                    M
                    <Input 
                      id="orta"
                      type="radio"
                      name="boyut"
                      value="orta"
                      checked={form.buyukluk === "orta"}
                      onChange={(e) => setForm({...form,buyukluk:e.target.value})}
                      className="kuccuk"
                    />
                    <div className="kuc"></div>
                  </Label>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="büyük " className="kuccukx">
                    L
                    <Input 
                      type="radio"
                      name="boyut"
                      value="büyük"
                      checked={form.buyukluk === "büyük"}
                      onChange={(e) => setForm({...form,buyukluk:e.target.value})}
                      className="kuccuk"
                      id="büyük "
                    />
                    <div className="kuc"></div>
                  </Label>
                </FormGroup>
                
              </div>
            </div>
            <div className="kalin">
              <FormGroup>
                <Label for="kalinlik">
                  Hamur Seç
                  <Input 
                    className="dropdown"
                    type="select"
                    id="kalinlik"
                    name="kalinlik"
                    value={form.kalinlik}
                    onChange={(e) => setForm({...form,kalinlik:e.target.value})}
                  >
                    <option value="Seçim">-Hamur Kalınlığı Seç-</option>
                    <option value="EkstraInce">Ekstra ince</option>
                    <option value="Ince">Ince</option>
                    <option value="Normal">Normal</option>
                    <option value="Kalin">Kalin</option>
                  </Input>
                </Label>
              </FormGroup>
            </div>
          </div>
          <div className="ikmal">
            <h2>Ek Malzemeler </h2>
            <p>En Fazla 10 malzeme seçebilirsiniz. </p>
            <div className="malzeme">
              <FormGroup check>
              {showed &&
                showed.toppings &&
                showed.toppings.map((topping) => (
                  <div className="Ekin" key={topping.id}>
                    <Label className="container" htmlFor={topping.id}>
                      {topping.ad}: {topping.fiyat}₺
                      <Input
                        type="checkbox"
                        id={topping.id}
                        name={topping.ad}
                        checked={form.toppings?.includes(topping.ad)}
                        onChange={checkMate}
                        className="malin"
                        value={topping.ad}
                      />
              
                     <span className="checkmark"></span>
                      {/* tekrar bi bak------------------------ */}
                    </Label>
                  </div>
                   ))}
                  </FormGroup>
                  
            </div>
          </div>
          
          <div className="altKisim">
            <div className="sipNot">
              <FormGroup>
                <Label className="siparisNotu" htmlFor="not">
                  Sipariş Notu
                  <Input
                    className="notin"
                    id="not"
                    type="text"
                    name="not"
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                    onChange={(e)=>{setForm({...form,not:e.target.value})}}
                  />
                </Label>
               
              </FormGroup>
              <FormGroup>
              <div className="userIn">
                <Label className="userName" htmlFor="user">
                  UserName
                  <Input
                    className="userin"
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username giriniz"
                    onChange={(e)=>{setForm({...form,userName:e.target.value})}}
                  />
                </Label>
               
                </div>
                </FormGroup>
              </div>
            
            
            <div className="yanYana">
              
              <div className="artiEksi">
              <h5>Menü Sayısı</h5>
                <FormGroup className="about">
                  <AzBut onClick={decrease}>-</AzBut>
                  <Num>{numberx}</Num>
                  <CokBut onClick={increase}>+</CokBut>
               
                </FormGroup>
              </div>
              
              <div className="whole">
                <MenuFis 
                fis={fis} form={form}
                  selectedItem={selectedItems}
                  setSelectedItem={setSelectedItems}
                />
                <SipBut type="submit" onClick={sipVerildi}>Siparis Ver</SipBut>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
      </form>
      <FooterC />
    </>
  );
}

export default OrderForm;
