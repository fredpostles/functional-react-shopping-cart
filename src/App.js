import React, { useState, useEffect } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import "./App.css";

const App = () => {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    const result = await axios.get(url);
    setProducts(result.data);
  };

  const onBuyNow = (id) => {
    const localShoppingCartItems = [...shoppingCartItems];

    const indexOfCartItem = localShoppingCartItems.findIndex(
      (item) => item.id === id
    );

    if (indexOfCartItem > -1) {
      localShoppingCartItems[indexOfCartItem].quantity += 1;
    } else {
      localShoppingCartItems.push({ quantity: 1, id });
    }

    setShoppingCartItems(localShoppingCartItems);
  };

  const onDeleteCartItem = (id) => {
    const localShoppingCartItems = [...shoppingCartItems];

    const indexOfCartItem = localShoppingCartItems.findIndex(
      (item) => item.id === id
    );

    localShoppingCartItems.splice(indexOfCartItem, 1);

    setShoppingCartItems(localShoppingCartItems);
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (error) {
      console.log("API Error!");
    }
  }, []);

  if (products) {
    return (
      <Interface
        onBuyNow={onBuyNow}
        products={products}
        shoppingCartItems={shoppingCartItems}
        onDeleteCartItem={onDeleteCartItem}
      />
    );
  }

  return <p>Loading...</p>;
};

export default App;
