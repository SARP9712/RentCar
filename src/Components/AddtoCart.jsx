import React, { useState}  from 'react';




function AddtoCart({cart}) {
    <div className="">
    <h2 className="text-2xl font-bold mb-4" >Tu Carrito </h2>
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          {`${item.model} - ${item.fuelType} - $${item.price}`}
        </li>
      ))}
    </ul>
  </div>
    
    };
    






export {AddtoCart}