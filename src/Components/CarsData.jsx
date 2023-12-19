import React from 'react'
import Ford from  '../assets/ford.png';
import Toyota from '../assets/Toyota.png';

export const CarsData = [
    { id: 1, model: 'FORD TRANSIT CUSTOM', fuelType:  'DIESEL 2.2', seats: 9, price: 100, image: Ford, deposito: 300  },
    { id: 2, model: 'TOYOTA VERSO', fuelType: 'DIESEL 2.0', seats: 5, price: 45 , image: Toyota, deposito: 300  },

]

const ProductDisplay = () => (
    <section>
      {CarsData.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </section>
  );