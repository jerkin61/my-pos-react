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
 
}

export default App;
