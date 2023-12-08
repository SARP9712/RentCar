import React,  { useState} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { CarsData } from '../CarsData';

import Seat from '../img/seat.png'
import Fuel from '../img/fuel.png'



const CarRental = () => {
   const [cart, setCart] = useState([])
  
     
    const addToCart = (car) => {
      setCart([...cart, car]);

        const handleAddToCart = (car) => {
    // Asegúrate de que addToCart está definido antes de llamarlo
    if (addToCart) {
      addToCart(car);
    }
  };

    };

  return (
    <div className="container mx-auto mt-8 p-8">
    <h1 className="text-3xl text-center font-bold font-oswald uppercase mb-4">Catálogo de Coches</h1>

    <div className="grid grid-cols-1 gap-4 bg-wh ">
      {CarsData.map((car) => (
        <div key={car.id} className="border p-4 rounded flex flex-col">
          <h2 className="text-xl font-bold mb-2">{car.model}</h2>


          <div className='flex'>
            <img className='h-8 w-8' src={Fuel} alt="" />
          <p className='font-bold text-1xl p-1' >{`${car.fuelType}`}</p>
          </div>
        
         
         <div className='flex'>
         <img className='h-8 w-8' src={Seat}/>      
         <p className='font-bold text-2xl'>{`${car.seats}`}</p>      

         </div>
        
        <div className='flex bg-[#2acc25] w-40 text-center justify-center mt-1'>
          
        <p className='font-bold text-white'>{`Precio/ Dia: €${car.price}`}</p>
        </div>
        
        

          <img src={car.image} alt="" />
          <button
            className="mt-2 bg-[#EC8F5E] font-bold font-oswald uppercase text-white px-4 py-2 rounded"
            onClick={() => addToCart(car)}
          >
            Añadir al Carrito
          </button>
        </div>
      ))}
    </div>

  

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

    
  </div>
  )
}

export default CarRental 