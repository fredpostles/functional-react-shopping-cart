import React from "react";

const ShoppingCartItem = (props) => {
  return (
    <>
      <p>{props.item.details.title}</p>
      <button onClick={() => props.onDeleteCartItem(props.item.id)}>
        Delete
      </button>
    </>
  );
};

export default ShoppingCartItem;
