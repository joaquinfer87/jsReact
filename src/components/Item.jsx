import lesPaul from "../assets/lespaul.png";
import React from "react";

const Item = ({ nombre, precio }) => {
  return (
    <>
      <h2>{nombre}</h2>
      <h5>{precio}</h5>
    </>
  );
};

export default Item;
