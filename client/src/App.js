import "./App.css";
import ProductForm from "./components/ProductForm";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DisplayProducts from "./components/DisplayProducts";
import Product from "./components/Product";



/* collect info from form
 -- state variables for form info
when form submits, send post request using axios
info to create something new*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
  

        <Switch>

          {/* show components on local:3000 */}
          <Route exact path="/">
            <ProductForm />
            <hr />
            <DisplayProducts />
          </Route>

          <Route exact path="/products/:id">
            <Product />
          </Route>


        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
