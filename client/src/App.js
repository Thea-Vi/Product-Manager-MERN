import "./App.css";
import ProductForm from "./components/ProductForm";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DisplayProducts from "./components/DisplayProducts";

/* collect info from form
 -- state variables for form info
when form submits, send post request using axios
info to create something new*/
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product Manager</h1>

        <Switch>

{/* show components on local:3000 */}
          <Route exact path="/">
            <ProductForm />
            <hr />
            <DisplayProducts />
          </Route>


        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
