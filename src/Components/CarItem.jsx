// CarItem.jsx
// CarItem.jsx
import React, { useState } from "react";

const CarItem = ({ car }) => {
  const [days, setDays] = useState(1);
  const totalPrice = car.price * days;

  const handleDaysChange = (event) => {
    const newDays = parseInt(event.target.value, 10);
    setDays(newDays);
  };

  return (
    <div className="product">
      <img
        src={car.image}
        alt={`The cover of ${car.name}`}
      />
      <div className="description">
        <h3>{car.name}</h3>
        <h5>${car.price}.00 per day</h5>
        <p>{car.description}</p>
      </div>
      <div>
        <label htmlFor={`days-${car.id}`}>Days:</label>
        <input
          id={`days-${car.id}`}
          type="number"
          min="1"
          value={days}
          onChange={handleDaysChange}
        />
      </div>
      <p>Total Price: ${totalPrice}.00</p>
      <form action="/create-checkout-session" method="POST">
        <input type="hidden" name="carId" value={car.id} />
        <input type="hidden" name="days" value={days} />
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default CarItem;
