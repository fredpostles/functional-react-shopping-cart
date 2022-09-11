import React from "react";

const Rating = (props) => {
  const { rate, count } = props.rating;

  return (
    <>
      <p>
        Rating: {rate} from {count} users
      </p>
    </>
  );
};

export default Rating;
