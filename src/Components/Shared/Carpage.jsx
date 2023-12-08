// CarPage.js
import React from 'react';

const CarPage = ({ car }) => {
  return (
    <div>
      <h1>{car.model}</h1>
      <p>Fuel Type: {car.fuelType}</p>
      <p>Number of Seats: {car.seats}</p>
      <p>Price: ${car.price}</p>
      <img src={car.image} alt={car.model} />
    </div>
  );
};

export default CarPage;
