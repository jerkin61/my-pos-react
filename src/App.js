import React from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Query from "./components/Query/Query";
import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard";
import cart from "../src/resources/cart.png";
import list from "../src/resources/list.png";
const App = () => {
  return (
    <div className="vertical-div">
      <>
        <Header />
        <Query />
      </>
      <div className="btn-row-3">
        <Button>
          <img src={cart} alt="" />
          Add to Cart
        </Button>
        <Button>
          <img src={list} alt="" />
          Check Out
        </Button>
      </div>
      <div className="product-column">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default App;
