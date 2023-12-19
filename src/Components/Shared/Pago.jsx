// Pago.js
import React, { useState } from 'react';

const Pago = () => {
  const [urlPago, setUrlPago] = useState('');

  const handlePagoClick = async () =>{ 

    e.preventDefault();

    calcularPrecio();
    // Llamar al backend para obtener la URL de pago
    const response = await fetch('http://localhost:3003/pago', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Datos de la orden, como importe, descripción, etc.

        car,
        sucursalRecogida,
        sucursalEntrega,
        diaRecogida,
        horaRecogida,
        diadejada,
        horadejada,
        complementosSeleccionados: complementos,
        precioCochePorDia,
        complementoTotal,
        totaldeCosto,
        Cardeposito,
      }),
    });

    const data = await response.json();
    setUrlPago(data.url);

    // Redirigir al usuario a la pasarela de paago
    window.location.href = data.url;
  };

  return (
    <div>


      <button onClick={handlePagoClick}>Realizar Pago</button>
    </div>
  );
};

export default Pago;
