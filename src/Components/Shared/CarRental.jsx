import React,  { useState} from 'react'
import Ford from  '../../assets/ford.png'


const CarRental = () => {
    const [cars, setCars] = useState([
      { id: 1, model: 'Sedan', fuelType: 'Gasolina', seats: 5, price: 100, image: Ford  },
      { id: 2, model: 'SUV', fuelType: 'Diesel', seats: 7, price: 80 , image: Ford },
      { id: 3, model: 'Hatchback', fuelType: 'Híbrido', seats: 4, price: 60 , image: Ford },
    ]);
  
    const [cart, setCart] = useState([]);
  
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
    <div className="container mx-auto mt-8">
    <h1 className="text-3xl font-bold mb-4">Catálogo de Coches</h1>

    <div className="grid grid-cols-1 gap-4 ">
      {cars.map((car) => (
        <div key={car.id} className="border p-4 rounded flex flex-col">
          <h2 className="text-xl font-bold mb-2">{car.model}</h2>
          <p>{`Tipo de gasolina: ${car.fuelType}`}</p>
          <p>{`Plazas: ${car.seats}`}</p>
          <p>{`Precio/ Dia: €${car.price}`}</p>

          <img src={car.image} alt="" />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => addToCart(car)}
          >
            Añadir al Carrito
          </button>
        </div>
      ))}
    </div>

    {/* <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 w-60 h-screen">Tu Carrito </h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {`${item.model} - ${item.fuelType} - $${item.price}`}
          </li>
        ))}
      </ul>
    </div> */}

    
  </div>
  )
}

export default CarRental 