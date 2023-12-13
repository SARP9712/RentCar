// CarItem.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CarItem = ({ car }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/car/${car.id}`);
  };

  return (
    <div>
      <h3>{car.model}</h3>
      {/* Otras propiedades del automóvil */}
      <button
        className="mt-2 bg-[#EC8F5E] font-bold font-oswald uppercase text-white px-4 py-2 rounded"
        onClick={handleViewDetails}
      >
        Ver mas
      </button>
    </div>
  );
};

export default CarItem;
