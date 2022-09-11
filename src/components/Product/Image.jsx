import React from "react";

const Image = (props) => {
  const { image, title } = props;

  return <img src={image} alt={title} />;
};

export default Image;
