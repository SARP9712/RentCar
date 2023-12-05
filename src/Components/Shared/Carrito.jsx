import React from 'react'

const Carrito = ({cart})=> {
  return (
    <div>
      <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-4 w-60 h-screen">Tu Carrito </h2>
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

export default Carrito