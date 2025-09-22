import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";
import { addToStoreCart, getStoreCart } from "../../utilities/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  // useEffect-
  useEffect(()=>{
    const storedCartIds=getStoreCart();
    // console.log(storedCartIds,bottles)

    const storedCart=[];
    for(const id of storedCartIds){
      // console.log(id)
      const cartBottle=bottles.find(bottle=>bottle.id === id);
      if(cartBottle){
        storedCart.push(cartBottle)
      }
    }

    console.log('stored cart',storedCart)
    setCart(storedCart);


  },[bottles])

  const [cart,setCart]=useState([])

  const handleAddToCart=(bottle)=>{
    const newCart=[...cart,bottle]
    setCart(newCart)

    // save the bottle id in the storage 
    addToStoreCart(bottle.id)
  }

  // console.log(bottles)

  return (
    <div>
      <h2>Total Bottles : {bottles.length}</h2>
      <h3>Cart Added : {cart.length}</h3>
      {/* <ol>
        {
            cart.map(item=> <li key={item.id}>name: {item.name}  price : {item.price}</li>)
        }
      </ol> */}
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
