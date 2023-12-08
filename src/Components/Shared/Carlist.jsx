import React from 'react';
import CarPage from './Carpage';
import { CarsData } from '../CarsData';

const CarList = () => {
  return (
    <div>
      {CarsData.map((car) => (
        <CarPage key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;