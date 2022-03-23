import "./App.css";
import ProductForm from "./components/ProductForm";
import React, {useState} from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DisplayProducts from "./components/DisplayProducts";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";


function App() {

  const [productAdded, setProductAdded] = useState(false)


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          
          {/* show components on local:3000 */}
          {/* SHOW ALL ROUTE*/}
          <Route exact path="/">
            <ProductForm />
            <hr />
            <DisplayProducts />
          </Route>
        
              {/* GET */}
          <Route exact path="/products/:id">
            <Product />
          </Route>

            {/* EDIT */}
          <Route exact path="/products/edit/:id">
            <EditProduct />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
