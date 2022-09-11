import React from "react";

const Buttons = (props) => {
  const { id, onBuyNow } = props;

  return <button onClick={() => onBuyNow(id)}>Buy Now</button>;
};

export default Buttons;
