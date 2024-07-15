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
const Num = styled.button`
  border: 1px solid #d9d9d9;
  background-color: white;
  color: #000000;
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
   form,setForm
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

  function increase() {
    setNumberx((number) => number + 1);
  }
  function decrease() {
    if (numberx > 1) {
      setNumberx((number) => number - 1);
    }
  }
  function ekleReset(event) {
    const {id}=event.target;
    if (id === "resetButton"){
     {/*--------------------yarim kaldi*/}
    }
    handleClear();
    setNumberx(1);
  }
function handleClear(){

  setForm(initialForm);
}
  function sipVerildi(event) {
    event.preventDefault();
    if(!form.buyukluk){
      setErrors({...errors,buyukluk:errorlar.buyukluk})

    }else{
      setErrors({...errors})}
    const { value }=event.target;
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
  
    console.log("Siparis detaylari:", {
      username:form.username,
      ad:selectedItems.ad,
      toppings: form.toppings,
      adet:numberx,
      buyukluk:form.buyukluk,
      kalinlik:form.kalinlik,
      not:form.not,
    });
    history.push("/success");
 
  
    console.log("fis:",form);
   
  
    // handleClear();
    // hatirlatma :fisi appjsx de ve sipverildinin icinde degistirdim. datanin nasil olmasi gerektigine karar ver!!!--------
  }
  function icerikGelsin(selectedItems) {
    setShowed(selectedItems);
    setForm({...form,ad:selectedItems.ad})
  }
  // ✔
  

  useEffect(() => {
    if (selectedItems) {
      icerikGelsin(selectedItems);
    }
  }, [selectedItems]);


 

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
              <h3>Boyut Seç </h3>
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
                  Siparis Notu
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
                <FormGroup>
                  <AzBut onClick={decrease}>-</AzBut>
                  <Num>{numberx}</Num>
                  <CokBut onClick={increase}>+</CokBut>
                </FormGroup>
                <Button id="resetButton" onClick={ekleReset}className="white">
                  Ekle
                </Button>
              </div>
              
              <div className="whole">
                <MenuFis
                  selectedItem={selectedItems}
                  setSelectedItem={setSelectedItems}
                />
                <SipBut type="submit" onSubmit={sipVerildi}>Siparis Ver</SipBut>
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
