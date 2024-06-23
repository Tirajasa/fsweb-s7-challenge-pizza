
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Homeb from "../src/components/pages/home"
import OrderForm from "../src/components/pages/orderform"
import Success from "./components/pages/success"
import menulist from './components/api/menu'
import { useState } from 'react'
function App() {
  

  const pizzaci=menulist.find(category=>category.category==="Pizzalar");
  const PosAbAciPiz=pizzaci.items.find(item=>item.ad==="Position Absolute Acı Pizza");

  const [selectedCategory,setSelectedCategory]=useState(pizzaci);
  const [selectedItems,setSelectedItems]=useState(null);
  const [showed, setShowed] = useState(PosAbAciPiz);/* sectigin kategorye gore adi urun aciklama fiyat rating yorumsayisi  boyut veya buyukluk ve ek malzemeler*/ 
  const [extraTop,setExtraTop]=useState(0);
  const [menu,setMenu]=useState(0);
  const [fis,setFish]=useState({});
  const [kalinlik,setKalinlik]=useState("normal");
  const [buyukluk,setBuyukluk]=useState("orta");

  const [numberx,setNumberx]=useState(1);
 
  return (
    <>
     <Switch>
      <Route path="/home">
        <Homeb selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
        </Route>
      <Route path="/order">
        <OrderForm 
        
        numberx={numberx} setNumberx={setNumberx} 
        showed={showed} setShowed={setShowed}
         setBuyukluk={setBuyukluk}  buyukluk={buyukluk}
         setExtraTop={setExtraTop} extraTop={extraTop} 
         menu={menu} setMenu={setMenu} 
         fis={fis} setFish={setFish}
         kalinlik={kalinlik} setKalinlik={setKalinlik}
        selectedItems={selectedItems} setSelectedItems={setSelectedItems}  />
      </Route>
      <Route path="/success">
        <Success fis={fis}/>
      </Route>
     </Switch>
        
    </>
  )
}

export default App
