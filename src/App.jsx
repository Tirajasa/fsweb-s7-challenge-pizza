  import { Route, Switch } from 'react-router-dom'
  import './App.css'
  import Homeb from "../src/components/pages/home"
  import OrderForm from "../src/components/pages/orderform"
  import Success from "./components/pages/success"
  import menulist from './components/api/menu'
  import {useState } from 'react'
  function App() {
   

    const pizzaci=menulist.find(category=>category.category==="Pizzalar");
    const PosAbAciPiz=pizzaci.items.find(item=>item.ad==="Position Absolute Acı Pizza");

    const [selectedCategory,setSelectedCategory]=useState(pizzaci.category);
    const [categoryItems, setCategoryItems] = useState(pizzaci.items);
    const [selectedItems,setSelectedItems]=useState(PosAbAciPiz);
    const [showed, setShowed] = useState(PosAbAciPiz);/* sectigin kategorye gore adi urun aciklama fiyat rating yorumsayisi  boyut veya buyukluk ve ek malzemeler*/ 
    const [extraTop,setExtraTop]=useState(0);
    const [menu,setMenu]=useState([]);
    const [fis,setFis]=useState({});// 
    const [kalinlik,setKalinlik]=useState("-Hamur Kalınlığı Seç-");
    const [buyukluk,setBuyukluk]=useState("");
    const [numberx,setNumberx]=useState(1);
    // const [error,setError]=useState("");
    const [toppings,setToppings]=([]);
    const [eklenmisItems,setEklenmisItems]=useState([]);
    const [menuSayisi, setMenuSayisi] = useState([]);//resetlemeyi unutma
    const [errors,setErrors]=useState({})
 
    return (
      <>
      <Switch>
        <Route path="/home">
          <Homeb selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} 
          categoryItems={categoryItems}  setCategoryItems={setCategoryItems}
          selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
          </Route>
        <Route path="/order">
          <OrderForm 
          menuSayisi={menuSayisi} setMenuSayisi={menuSayisi}
          eklenmisItems={eklenmisItems}
          setEklenmisItems={setEklenmisItems}
          numberx={numberx} setNumberx={setNumberx} 
          showed={showed} setShowed={setShowed}
          setBuyukluk={setBuyukluk}  buyukluk={buyukluk}
          setExtraTop={setExtraTop} extraTop={extraTop} 
          menu={menu} setMenu={setMenu} 
          fis={fis} setFis={setFis}
          kalinlik={kalinlik} setKalinlik={setKalinlik}
          selectedItems={selectedItems} setSelectedItems={setSelectedItems} 
          toppings={toppings} setToppings={setToppings} errors={errors} setErrors={setErrors}/>
        </Route>
        <Route path="/success">
          <Success menuSayisi={menuSayisi} fis={fis}/>
        </Route>
      </Switch>
          
      </>
    )
  }

  export default App

