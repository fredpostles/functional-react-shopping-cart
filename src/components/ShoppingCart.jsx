import React from "react";
import { processShoppingCart } from "../utils";
import ShoppingCartItem from "./ShoppingCart/ShoppingCartItem";

const ShoppingCart = (props) => {
  const processedCart = processShoppingCart(
    props.products,
    props.shoppingCartItems
  );

  return (
    <>
      <h1>£{processedCart.cartTotal.toFixed(2)}</h1>
      {processedCart.shoppingCartItems.map((item) => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          onDeleteCartItem={props.onDeleteCartItem}
        />
      ))}
    </>
  );
};

export default ShoppingCart;
