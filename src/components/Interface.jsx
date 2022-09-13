import React, { useState } from "react";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

const Interface = (props) => {
  const { products, onBuyNow, shoppingCartItems, onDeleteCartItem } = props;

  const [screen, setScreen] = useState(0); // 0 is products, 1 is shopping cart
  const [searchTerm, setSearchTerm] = useState("");

  //what products do I want to keep?
  const filtered = [...products].filter((product) => {
    //work out if the product matches the search term
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const results = filtered.length > 0 ? filtered : products;

  return screen === 0 ? (
    <>
      <button onClick={() => setScreen(1)}>View shopping cart</button>
      <input
        type="text"
        onInput={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {results.map((product) => (
        <Product key={product.id} product={product} onBuyNow={onBuyNow} />
      ))}
    </>
  ) : (
    <>
      <button onClick={() => setScreen(0)}>View Products</button>
      <input
        type="text"
        onInput={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <ShoppingCart
        products={products}
        shoppingCartItems={shoppingCartItems}
        onDeleteCartItem={onDeleteCartItem}
      />
    </>
  );
};

export default Interface;
