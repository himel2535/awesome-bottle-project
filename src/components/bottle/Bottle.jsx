import React from "react";
import "./bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price, stock } = bottle;

  return (
    <div className="bottle">
      <img src={img} alt="" />
      <h4 className="margin margin-top">Name : {name}</h4>
      <p className="margin">Price : $ {price}</p>
      <p className="margin">Stock : {stock}</p>
      <button onClick={()=>{handleAddToCart(bottle)}}>Add to cart</button>
    </div>
  );
};

export default Bottle;
