import React, { useState, useEffect } from "react";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

const Interface = (props) => {
  const { products, onBuyNow, shoppingCartItems, onDeleteCartItem } = props;

  const [screen, setScreen] = useState(0); // 0 is products, 1 is shopping cart
  const [searchTerm, setSearchTerm] = useState("");

  const onScreenMode = (screen) => {
    if (screen === 0) {
      setScreen(1);
    } else if (screen === 1) {
      setScreen(0);
    }
  };

  useEffect(() => {
    onScreenMode();
  }, []);

  //what products do I want to keep?
  const filtered = [...products].filter((product) => {
    //work out if the product matches the search term
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const results = filtered.length > 0 ? filtered : products;

  return screen === 0 ? (
    <>
      <button onClick={() => onScreenMode(1)}>View shopping cart</button>
      <input
        type="text"
        onInput={(e) => {
          setSearchTerm({ searchTerm: e.target.value });
        }}
      />
      {results.map((product) => (
        <Product
          onScreenMode={onScreenMode}
          key={product.id}
          product={product}
          onBuyNow={onBuyNow}
        />
      ))}
    </>
  ) : (
    <>
      <button onClick={() => onScreenMode(0)}>View Products</button>
      <input
        type="text"
        onInput={(e) => {
          setSearchTerm({ searchTerm: e.target.value });
        }}
      />
      <ShoppingCart
        onScreenMode={onScreenMode}
        products={products}
        shoppingCartItems={shoppingCartItems}
        onDeleteCartItem={onDeleteCartItem}
      />
    </>
  );
};

export default Interface;
