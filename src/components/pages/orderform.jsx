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
  width: 287px;
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
   form,setForm,fis,setFis
  } = props;

  let history = useHistory();
  const errorlar={
    userName:"Gecerli bir isim giriniz, en az 3 harf icermelidir.",
    //direk order sayfasini acinca bir urun secmelisiniz erroru yazabiliriz veya hizli satin al butonu insa edebiliriz
    buyukluk:"Urunun boyutunu secmeyi unuttunuz",
    kalinlik:"Urunun inceligini secmelisiniz",
    toppings:["en az 4 ek malzeme seciniz.","10 adetten fazla ek malzeme secemezsiniz.",],
    adet:"Ayni urun icin 10 adetten fazla pizza siparis veremezsiniz.",
    not:"Siparis notunuzu unutmayin "
      }


function icerikGelsin (selectedItems) {
   setShowed(selectedItems);
   setForm({...form,ad:selectedItems.ad});
   setFis({...fis,menu:Number(selectedItems.price).toFixed(2)});
   }

 useEffect(() => {
    if (selectedItems) {
      icerikGelsin(selectedItems);
      
    }
  }, [selectedItems]);

  useEffect(() => {
    if (selectedItems) {
      localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    
    }
  }, [selectedItems]);

  useEffect(() => {
    const savedItems = localStorage.getItem('selectedItems');
    if (savedItems) {
      setShowed(JSON.parse(savedItems));
      setForm(initialForm);
      setForm({...form,ad:JSON.parse(savedItems).ad});
      setFis({...fis,menu:Number(JSON.parse(savedItems).price).toFixed(2)});
    

    }
  }, []);

function checkMate(event){
  const {name}=event.target;

    if(form.toppings.includes(name)){
      const isaretliyseCikar=form.toppings.filter(topping=>topping!=name)
      setForm({...form,toppings:isaretliyseCikar})
      
    }else{
      const newForm=[...form.toppings,name]
      setForm({...form,toppings:newForm})
    
  }
  
    fiyatEkle(event);
    
}


  function increase(event) {
    event.preventDefault();
    setNumberx((numberx) => numberx + 1);
    
    setForm({...form,adet:numberx+1});
 
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
 const fiyatEkle = (event) => {

  if (event.target.checked) {
    // Seçilen topping adını alalım
    const selectedToppingName = event.target.name;
    
    // Seçilen topping'in fiyatını bulalım
    const selectedTopping = showed.toppings.find(topping => topping.ad === selectedToppingName);
    
    if (selectedTopping) {
      // Fiyatlar dizisinden sadece seçilen topping'in fiyatını alalım
      const fiyat = selectedTopping.fiyat;
      
      // Mevcut toplam fiyatı güncelleyelim
      setFis(prevState => ({
        ...prevState,
        extras: ((prevState.extras || 0) + (fiyat)),
      }));
    }
  } else {
    // Eğer checkbox işareti kaldırıldıysa, fiyatı çıkaralım
    const deselectedToppingName = event.target.name;
    const deselectedTopping = showed.toppings.find(topping => topping.ad === deselectedToppingName);
    
    if (deselectedTopping) {
      const fiyat = deselectedTopping.fiyat;
      
      setFis(prevState => ({
        ...prevState,
        extras: ((prevState.extras || 0) - (fiyat)),
      }));
    }
 
  }
  
};


  function sipVerildi(event) {
    event.preventDefault();
    successegit();

    setForm({
      ...form,
      username:form.username,
      ad:showed.ad,
      adet:form.adet,
      buyukluk: form.buyukluk,
      kalinlik: form.kalinlik,
      price:selectedItems.price,
      toppings: form.toppings,
     
      not:form.not,
    }) ;

    const fiyatlar= selectedItems.toppings.map(topping=>topping.fiyat);

    const total=fiyatlar.reduce((top,fiyat)=>{
      top+=fiyat
      return total;
    },0)
   
  // console.log("SP:"+Number(selectedItems.price));
    
    setFis({
      ...fis,
       menu: Number(selectedItems.price),
      extras:total,
    });
    console.log("Fis:"+fis);
    // if(selectedItems){
    //   setFis(prevState=>({
    //     ...prevState,
    //     menu:selectedItems.price,
    //   }));
    //   setForm({...form,menu:selectedItems.price});
    // }
    console.log("PRice:"+selectedItems.price);

    console.log("Siparis detaylari:", {
      username:form.username,
      ad:selectedItems.ad,
      toppings: form.toppings,
      adet:form.adet,
      buyukluk:form.buyukluk,
      kalinlik:form.kalinlik,
      price:selectedItems.price,
      not:form.not,
    });
    console.log("here are the toppings:",fis.extras,"here menu:", fis.menu);
    
 
    console.log("PRice2:"+selectedItems.price);
    console.log("fis:",form);
   
  
  }
 
  // ✔
  function showErrors(){
    if(!form.buyukluk){
      setErrors({...errors,buyukluk:errorlar.buyukluk})

    }else{
      setErrors({...errors})}

  }

 
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
                    id="userName"
                    type="text"
                    name="userName"
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
