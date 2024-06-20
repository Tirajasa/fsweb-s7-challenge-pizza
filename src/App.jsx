
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Home from "../src/components/pages/home"
import OrderForm from "../src/components/pages/orderform"
import Success from "./components/pages/success"
function App() {


  return (
    <>
     <Switch>
      <Route path="/home">
        <Home/>
        </Route>
      <Route path="/order">
        <OrderForm/>
      </Route>
      <Route path="/success">
        <Success/>
      </Route>
     </Switch>
        
    </>
  )
}

export default App
