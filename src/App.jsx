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
    const initialForm={
      ad:"",
      userName:"",
      buyukluk:"",
      kalinlik:"-Hamur Kalınlığı Seç-",
      toppings:[],
      adet:1,
      //price:0,
      not:""
    }
    const [selectedCategory,setSelectedCategory]=useState(pizzaci.category);
    const [categoryItems, setCategoryItems] = useState(pizzaci.items);
    const [selectedItems,setSelectedItems]=useState(PosAbAciPiz);
    const [showed, setShowed] = useState(PosAbAciPiz);/* sectigin kategorye gore adi urun aciklama fiyat rating yorumsayisi  boyut veya buyukluk ve ek malzemeler*/ 
    const [numberx,setNumberx]=useState(1);
    const [errors,setErrors]=useState({})
    const [form,setForm] =useState(initialForm);
    const [fis,setFis] =useState({menu:0,extras:0});
    return (
      <>
      <Switch>
        <Route path="/home">
          <Homeb selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} 
          categoryItems={categoryItems}  setCategoryItems={setCategoryItems}
          selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
          </Route>
        <Route path="/order">
          <OrderForm initialForm={initialForm}
          form={form} setForm={setForm}
          numberx={numberx} setNumberx={setNumberx} 
          showed={showed} setShowed={setShowed}
          selectedItems={selectedItems} 
          errors={errors} setErrors={setErrors} fis={fis} setFis={setFis}/>
        </Route>
        <Route path="/success">
          <Success fis={fis}form={form}/>
        </Route>
      </Switch>
          
      </>
    )
  }

  export default App

