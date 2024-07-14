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
  const {
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

  let history = useHistory();

  function checkMate(e) {
    const { id, checked } = e.currentTarget;
    
    setForm(prevForm => ({
      ...prevForm,
      toppings: prevForm.toppings.map(topping =>
        topping.id === parseInt(id)
          ? { ...topping, checked:checked }
          : topping
      )
    }));
  }
  function eklenmismenuleribelirle(id) {
    setEklenmisItems((prevEklenmis) => [...prevEklenmis, id]);
  }

  function hesaplaMenu(event,id){
   
    eklenmismenuleribelirle(id);
  const total=menu.reduce((toplam,item)=>{
    const toplamtop=item.toppings.reduce((aratoplam,topping)=>{
      return topping.checked? aratoplam+topping.fiyat :aratoplam
    },0);

    setExtraTop(toplamtop);
    return toplam+ (item.price+ toplamtop)
  },0);

  setMenu(total);
  reset(event);
  return total;

  }

  // function buyuklukSec(event){
  //   setBuyukluk(event.target.value);
  // }
  function increase() {
    setNumberx((number) => number + 1);
  }
  function decrease() {
    if (numberx > 1) {
      setNumberx((number) => number - 1);
    }
  }
  function reset(event) {
    if (event.target.id === "resetButton"){
      
      setNumberx(1);
    } 
  }

  function SipVerildi(event) {
    if(!form.buyukluk){
      setErrors({...errors,buyukluk:errorlar.buyukluk})

    }else{
      setErrors({...errors})}
    // const { id }=event.target;
  
    console.log("Siparis detaylari:", {
      ad:selectedItems.ad,
      Toppings: showed.toppings.filter((topping) => topping.checked),
      adet:numberx,
      buyukluk:form.buyukluk,
      kalinlik:form.kalinlik,
    });
    history.push("/success");
    setForm({
      ...form,
       adi:selectedItems.ad,
      adet:form.adet,
      toppings:form.toppings,
      menu:0,
      buyukluk: form.buyukluk.find((boy) => boy.checked),
      kalinlik: form.kalinlik.find((kalinlik) => kalinlik.checked),
      toppings: showed.toppings.map((topping) => topping.checked===true),
    });
    console.log("fis:",form)
    // hatirlatma :fisi appjsx de ve sipverildinin icinde degistirdim. datanin nasil olmasi gerektigine karar ver!!!--------
  }
  function icerikGelsin(selectedItems) {
    setShowed(selectedItems);

  }
  // ✔
  

  useEffect(() => {
    if (selectedItems) {
      icerikGelsin(selectedItems);
    }
  }, [selectedItems]);


 

  return (
    <>
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
            <div className="malzeme container ">
              {showed &&
                showed.toppings &&
                showed.toppings.map((topping) => (
                  <FormGroup check key={topping.id}>
                    <Label htmlFor={topping.id}>
                      {topping.ad}: {topping.fiyat}₺
                      <Input
                        type="checkbox"
                        id={topping.id}
                        checked={topping.checked || false}
                        onChange={()=>checkMate(e)}
                        value={topping.id}
                        className="malin"
                      />
                      {/* <div className="checkmark">✔</div> */}
                      {/* tekrar bi bak------------------------ */}
                    </Label>
                  </FormGroup>
                ))}
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
                  />
                </Label>
              </FormGroup>
            </div>
            <div className="yanYana">
              <div className="artiEksi">
                <FormGroup>
                  <AzBut onClick={decrease}>-</AzBut>
                  <Num>{numberx}</Num>
                  <CokBut onClick={increase}>+</CokBut>
                </FormGroup>
                <Button id="resetButton" onClick={(e) => hesaplaMenu(e, selectedItems.id)}className="white">
                  Ekle
                </Button>
              </div>
              <div className="whole">
                <MenuFis
                  selectedItem={selectedItems}
                  setSelectedItem={setSelectedItems}
                />
                <SipBut onClick={SipVerildi}>Siparis Ver</SipBut>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterC />
    </>
  );
}

export default OrderForm;
