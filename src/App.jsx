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
    
      userName:"",
      buyukluk:"",
      kalinlik:"-Hamur Kalınlığı Seç-",
      toppings:[],
      adet:"",
      not:""
    }
    const [selectedCategory,setSelectedCategory]=useState(pizzaci.category);
    const [categoryItems, setCategoryItems] = useState(pizzaci.items);
    const [selectedItems,setSelectedItems]=useState(PosAbAciPiz);
    const [showed, setShowed] = useState(PosAbAciPiz);/* sectigin kategorye gore adi urun aciklama fiyat rating yorumsayisi  boyut veya buyukluk ve ek malzemeler*/ 
    const [numberx,setNumberx]=useState(1);
    const [errors,setErrors]=useState({})
    const [form,setForm] =useState(initialForm);
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
          selectedItems={selectedItems} setSelectedItems={setSelectedItems} 
          errors={errors} setErrors={setErrors}/>
        </Route>
        <Route path="/success">
          <Success form={form}/>
        </Route>
      </Switch>
          
      </>
    )
  }

  export default App

