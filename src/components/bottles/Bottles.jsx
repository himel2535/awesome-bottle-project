import React, { use, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  const [cart,setCart]=useState([])

  const handleAddToCart=(bottle)=>{
    const newCart=[...cart,bottle]
    setCart(newCart)
  }

  // console.log(bottles)

  return (
    <div>
      <h2>Total Bottles : {bottles.length}</h2>
      <h3>Cart Added : {cart.length}</h3>
      <ol>
        {
            cart.map(item=> <li key={item.id}>name: {item.name}  price : {item.price}</li>)
        }
      </ol>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
