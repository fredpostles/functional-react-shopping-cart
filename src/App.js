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
    const shoppingCartItems = [...shoppingCartItems];

    const indexOfCartItem = shoppingCartItems.findIndex(
      (item) => item.id === id
    );

    if (indexOfCartItem > -1) {
      shoppingCartItems[indexOfCartItem].quantity += 1;
    } else {
      shoppingCartItems.push({ quantity: 1, id });
    }

    setShoppingCartItems({ shoppingCartItems });
  };

  const onDeleteCartItem = (id) => {
    const shoppingCartItems = [...shoppingCartItems];

    const indexOfCartItem = shoppingCartItems.findIndex(
      (item) => item.id === id
    );

    shoppingCartItems.splice(indexOfCartItem, 1);

    // console.log("<><><>", shoppingCartItems);

    setShoppingCartItems({ shoppingCartItems });
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
