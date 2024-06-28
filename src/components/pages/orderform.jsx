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
    numberx,
    setNumberx,
    showed,
    setShowed,
    setBuyukluk,
    extraTop,
    setExtraTop,
    menu,
    setMenu,
    fis,
    setFis,
    kalinlik,
    setKalinlik,
    buyukluk,
    selectedItems,
    setSelectedItems,
    toppings,
    setToppings,
    eklenmisItems,
    setEklenmisItems,
    menuSayisi,
    setMenuSayisi,
  } = props;

  let history = useHistory();

  function checkMate(event) {
    const { id, checked } = event.currentTarget;

    setShowed(prevShowed => {
  
      const updatedToppings = prevShowed.toppings.map(topping =>
        topping.id === parseInt(id) ? { ...topping, checked: checked } : topping
      );
      return {...prevShowed, toppings: updatedToppings};
    });
    // tikgelsin();
  }

  function ToppingIsimleriniKaydet(event) {
    const { id, checked } = event.target;
    setToppings((prevToppings) =>
      prevToppings.map((topping) =>
        topping.id === parseInt(id) ? { ...topping, checked: checked } : topping
      )
    );
  }

  //   function cilginToppingler(event){
  //     checkMate(event);
  //   ToppingIsimleriniKaydet(event);

  // }
  //bir tane urun(absolute pizza) secilince  fiyat hesapliyor)
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
      setMenuSayisi(numberx);
      setNumberx(1);
    } 
  }

  function SipVerildi(event) {
    // const { id }=event.target;
  
    console.log("Siparis detaylari:", {
      showed,
      Toppings: showed.toppings.filter((topping) => topping.checked),
      numberx,
      buyukluk,
      kalinlik,
    });
    history.push("/success");
    setFis({
      ...fis,
      selectedItems,
      menuSayisi,
      extraTop,
      menu,
      buyukluk: showed.size.filter((boy) => boy.checked),
      kalinlik: showed.thickness.filter((kalinlik) => kalinlik.checked),
      toppings: showed.toppings.map((topping) => topping.checked),
    });
    // hatirlatma :fisi appjsx de ve sipverildinin icinde degistirdim. datanin nasil olmasi gerektigine karar ver!!!--------
  }
  function icerikGelsin(selectedItems) {
    setShowed(selectedItems);
  }
  // ✔
  // secilen item absolu pizza
  // showed butun detaylari order sayfasinda gosteriyor.+bunu yaparken form da yenilenmeli forma ekle.
  //toppings kismini duzeltmek icin fonksiyon yaz
  // büyüklük ,kalinlik  ekle menu js icine

  // function xyx(id){

  //   selectedItems.find(item=>item.id===parseInt(id))
  // }
  // useEffect(()=>{
  //  function tikgelsin(){
  // tiklananTopping=showed.toppings.filter(topping => topping.checked);

  //   const ToppingCheck=document.querySelector(".checkmark");
  //  if(ToppingCheck){
  //     if(tiklananTopping.length>10){
  //       ToppingCheck.classList.add("tehlike");

  //  } else {
  //   ToppingCheck.classList.remove("tehlike");
  //         }
  //         ToppingCheck.classList.toggle("yellowtik");
  //   }
  //   return ToppingCheck;
  // }
  // ToppingCheck.addEventListener("click",tikgelsin)
  // setIsChecked(tiklananTopping=>tiklananTopping?true:false);
  // },[isChecked])

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
                      checked={buyukluk === "küçük"}
                      onChange={(e) => setBuyukluk(e.target.value)}
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
                      checked={buyukluk === "orta"}
                      onChange={(e) => setBuyukluk(e.target.value)}
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
                      checked={buyukluk === "büyük"}
                      onChange={(e) => setBuyukluk(e.target.value)}
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
                    value={kalinlik}
                    onChange={(e) => setKalinlik(e.target.value)}
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
                        onChange={checkMate}
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
                  extraTop={extraTop}
                  setExtraTop={setExtraTop}
                  eklenmisItems={eklenmisItems}
                  menu={menu}
                  topping={toppings}
                  fis={fis}
                  menuSayisi={menuSayisi}
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
