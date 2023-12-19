import React, { useState } from 'react';
import { Link, BrowserRouter, useLocation, useParams } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Cards from 'react-credit-cards-2';
import PageRental from '../PageRental';
import { Reserva } from './Reserva';
// import RedSysIntegration from './RedSysIntegration';

const Formulario = (props) => {
    const location = useLocation(); 
  const [reserva, setReservas]=useState([])

  const [correo, setCorreo] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDNI] = useState('');
  const [edad, setEdad] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  const [carrito, setCarrito] = useState([]);




  const {
    car,
     sucursalRecogida,
     sucursalEntrega,
     diaRecogida,
      horaRecogida,
     diadejada,
     horadejada,
     complementos,
    precioCochePorDia,
    complementoTotal,
   totaldeCosto,
    deposito,
  }=location?.state || {};


  

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    console.log(car)
    // Puedes implementar lógica adicional para procesar y validar la información personal.
    console.log('Información Personal:', {
      correo,
      email,
      telefono,
      nombre,
      apellido,
      dni,
      edad,
    });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Puedes implementar lógica adicional para procesar el pago y enviar los detalles de la tarjeta al servidor seguro.
    console.log('Detalles del Pago:', {
      cardNumber,
      cardHolder,
      expiryDate,
      cvc,
    });
   

    
  const item ={

    car,
    sucursalRecogida,
    sucursalEntrega,
     diaRecogida,
   horaRecogida,
   diadejada,
    horadejada,
    complementos,
   precioCochePorDia,
   complementoTotal,
  totaldeCosto,
   deposito,

   
  };

  setReservas([...reservas, item]);








  setCarrito([...carrito,item])

    // Limpia los campos después de enviar el formulario
    setCardNumber('');
    setCardHolder('');
    setExpiryDate('');
    setCvc('');
    setFocus('');
  };

  return (
    <div className="pt-20 h-screen">
      <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md" onSubmit={handlePersonalInfoSubmit}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-oswald uppercase">Información Personal</h2>

        <div className="flex flex-col gap-4 mb-6">
          <div>
            <label htmlFor="correo" className="block text-gray-600 text-xl font-medium mb-2 font-oswald uppercase">
              Correo
            </label>
            <input
              type="text"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Correo"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 text-xl font-medium mb-2 font-oswald uppercase">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div>
            <label htmlFor="telefono" className="block text-gray-600 text-xl font-oswald uppercase font-medium mb-2">
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Número de Teléfono"
            />
          </div>
          <div>







            {/* <label htmlFor="nombre" className="block text-gray-600 text-xl font-oswald uppercase font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Nombre"
            /> */}
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div>
            <label htmlFor="apellido" className="block text-gray-600 text-xl font-oswald uppercase font-medium mb-2">
              Apellidos
            </label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Apellido"
            />
          </div>
          <div>
            <label htmlFor="dni" className="block text-gray-600 text-xl font-oswald uppercase font-medium mb-2">
              DNI o Pasaporte
            </label>
            <input
              type="text"
              id="dni"
              value={dni}
              onChange={(e) => setDNI(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="DNI o Pasaporte"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="edad" className="block text-gray-600 text-xl font-oswald uppercase font-medium mb-2">
            Edad
          </label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-20 p-2 border rounded-md"
            placeholder="Edad"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Detalles de Pago</h2>

        <div className="mb-6">

        


        <label htmlFor="cardHolder" className="block text-gray-600 text-sm font-medium mb-2">
            Titular de la Tarjeta
              </label>
              <input
                type="text"
                id="cardHolder"
                value={cardHolder}
                onFocus={() => setFocus('name')}
                onChange={(e) => setCardHolder(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Nombre del Titular"
              />

          <label htmlFor="expiryDate" className="block text-gray-600 text-sm font-medium mb-2">
                Fecha de Expiración
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onFocus={() => setFocus('expiry')}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="MM/YY"
              />

          <label htmlFor="cardNumber" className="block text-gray-600 text-sm font-medium mb-2">
            Número de Tarjeta
          </label>
          <Cards
            number={cardNumber}
            name={cardHolder}
            expiry={expiryDate}
            cvc={cvc}
            focused={focus}
          />
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onFocus={() => setFocus('number')}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="**** **** **** ****"
          />
        </div>

        <label htmlFor="cvc" className="block text-gray-600 text-sm font-medium mb-2">
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            value={cvc}
            onFocus={() => setFocus('cvc')}
            onChange={(e) => setCvc(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="CVC"
          />


<div className='pt-30 mt-30'>
  
<Reserva reservas={reserva}/>
</div>


<RedSysIntegration />

        <button
          type="submit"
          onClick={handlePaymentSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Pagar
        </button>
      </form>
    </div>
  );
};

export default Formulario;