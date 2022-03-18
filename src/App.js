<<<<<<< HEAD
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";


const App = () => {
  const [items, setItems] = useState("");
  return (
    <div>
      <Main />
    </div>
  );
=======
import React from "react"
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Query from "./components/Query/Query";
import './App.css'
import ProductCard from "./components/ProductCard/ProductCard";


const App = () => {
  return (
      <div className='vertical-div'>
      <><Header />
      <Query /></>
      <div className='btn-row-3'
      ><Button /><Button />
       </div>
        <div className='product-column'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
     
       </div>
  )
 
>>>>>>> f7ddfb48c36063fe75bb7936a85c9069765eb15b
}

export default App;
