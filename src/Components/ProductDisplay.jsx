import React from "react";
import CarItem from "./CarItem";
import Ford from "../assets/Ford.png"
import Toyota from "../assets/Toyota.png"

const carsData = [
  {
    id: 1,
    name: "FORD CUSTOM",
    model: 'TOYOTA VERSO',
    fuelType: 'DIESEL 2.0',
    seats: 5, 
    price: 100,
    image:Ford ,   
    deposito: 300 },

    { id: 2,
    name: "FORD CUSTOM",
     model: 'TOYOTA VERSO',
     fuelType: 'DIESEL 2.0',
     seats: 5, 
     price: 80 , 
      image: Toyota, 
      deposito: 300  
  },
  // Agrega más coches según sea necesario
];

const ProductDisplay = () => (
  <section>
    {carsData.map((car) => (
      <CarItem key={car.id} car={car} />
    ))}
  </section>
);

export default ProductDisplay;