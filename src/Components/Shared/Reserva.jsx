import React from 'react'

export const Reserva = ({reservas}) => {
  return (
    <div className=' '>
    <h2>Reservas:</h2>
    <ul>
      {reservas.map((reserva, index) => (
        <li key={index}>
          <p>Carro: {reserva.car.model}</p>
          <p>Sucursal de Recogida: {reserva.sucursalRecogida}</p>
          <p>Surcusal de Entrega: {reserva.sucursalEntrega}</p>
          {/* Agrega aquí otros campos de la reserva */}
        </li>
      ))}
    </ul>
  </div>
  )
}
