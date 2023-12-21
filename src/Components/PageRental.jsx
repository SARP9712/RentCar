import React, {useEffect, useState, useRef}   from 'react'
import { Await, Link, Route, useParams } from 'react-router-dom';
import { CarsData } from './CarsData'
import Formulario from './Shared/Formulario';
import { Reserva } from './Shared/Reserva';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe } from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ProductDisplay from './ProductDisplay';
import Logo from '../assets/Logo.png';
import axios from 'axios';
// import { Document, Page } from 'react-pdf';


const PageRental = () => {
  const [message, setMessage] = useState("");
  // const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  const [mostrarFormularioCliente, setMostrarFormularioCliente] = useState(false);
  const [datosdetransfer,setDatosDeTransfer]=useState(false);
  const [datosFormularioCliente, setDatosFormularioCliente] = useState({
    nombre: "",
    apellido: "",
    numeroTlf: "",
    correo: "",
    edad: "",
    dniNie: "",
    metodoPago: "",
  });
      // datos Form Cliente 
      const [mostrarVentana, setMostrarVentana] = useState(false);
const [formClient, setformClient]=useState('');      
const [clientName, setClientName] = useState('');
const [ClientLastName, setClientLastName] = useState('');
const [ClientCompany, setClientCompany] = useState('');
const [Clientecp, setClientecp] = useState('');
const [clientAdress, setClientAdress] = useState('');
const [clientEmail, setClientEmail] = useState('');
const [clientPhone, setClientPhone] = useState(''); 
const [ClienteDni, setClienteDni] = useState('');


const [modalOpen, setModalOpen] = useState(false);

const [numPages, setNumPages] = useState(null);
const [pageNumber, setPageNumber] = useState(1);







    const { id } = useParams();    
    const car = CarsData.find((car) => car.id === parseInt(id));
    const resultRef = useRef(null);
    const [urlPago, setUrlPago] = useState('');
    const [reservaData, setDatosReserva] = useState(null);
    const [sucursalRecogida, setSucursalRecogida] = useState('');
    const [sucursalEntrega, setSucursalEntrega] = useState('');
    const [diaRecogida, setDiaRecogida] = useState('');
    const [horaRecogida, setHoraRecogida] = useState('');
    const [diadejada, setDiadejada] = useState('');
    const [horadejada, setHoradejada] = useState('');
    const [precioTotal, setPrecioTotal] = useState(0);
    const [precioCochePorDia, setPrecioCocheporDia] = useState(0);
    const [totaldeCosto, setTotaldeCosto]=useState(0);
    const [complementoTotal, setComplementoTotal] = useState(0);
    const [agreed, setAgreed] = useState(false);
   
    const [deposito, setDeposito]= useState(0);
    const [reserva, setReservas]=useState([])

  const [precioTotalState, setPrecioTotalState] = useState(0);
  const [complementoTotalState, setComplementoTotalState] = useState(0);
  const [precioCochePorDiaState, setPrecioCocheporDiaState] = useState(0);
  const [totaldeCostoState, setTotaldeCostoState] = useState(0);


  


// METODOS DE PAGO 
const [metodoDePago, setMetodoDePago] = useState("");
const [completarReserva, setCompletarReserva] = useState(false);



const [orderNumber, setOrderNumber] = useState(null);





///////////////////////////////

const [seccionActual, setSeccionActual] = useState('seccion1');

const cambiarSeccion = (nuevaSeccion) => {
  setSeccionActual(nuevaSeccion);
};

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }







  const enviarSolicitud = () => {
    // Aquí puedes realizar las acciones necesarias antes de mostrar la ventana emergente
    // Por ejemplo, enviar datos al servidor

    // Luego, muestra la ventana emergente
    setMostrarVentana(true);

    // También podrías redirigir al usuario al inicio después de un tiempo
    setTimeout(() => {
      setMostrarVentana(false);
      // Aquí puedes redirigir al usuario al inicio usando react-router-dom u otras formas
    }, 5000); // Redirigir después de 5 segundos (ajusta el tiempo según tus necesidades)
  };




  const TerminosCondicionesModal = ({ onClose }) => {
     return (
      <ReactModal
       isOpen={true} 
       onRequestClose={onClose} 
       className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black opacity-50">
        {/* Contenido de los términos y condiciones */}
        <h2>Términos y Condiciones</h2>
        <p>Aquí va tu contenido...</p>
  
        {/* Botón para cerrar el modal */}
        <button onClick={onClose}>Cerrar</button>
      </ReactModal>
    );
  };


  const handleOpenModal = () => {
    setModalOpen(true);
  };
  
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  





  const Cardeposito = car.deposito;





  


  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleInputChangeCliente = (e) => {
    const { name, value } = e.target;
    setDatosFormularioCliente((prevDatosFormularioCliente) => ({
      ...prevDatosFormularioCliente,
      [name]: value,
    }));
  };

  const toggleAgreement = () => {
    setAgreed(!agreed);
  };
  
  const fechaActual = new Date();

  const fechaFormateada = fechaActual.toLocaleDateString();
  
  // const logDatos = () => {
  //   console.log('Datos de la reserva:');
  //   console.log('Carro:', car);
  //   console.log('Sucursal de recogida:', sucursalRecogida);
  //   console.log('Sucursal de entrega:', sucursalEntrega);
  //   console.log('Fecha y hora de recogida:', `${diaRecogida} ${horaRecogida}`);
  //   console.log('Fecha y hora de dejada:', `${diadejada} ${horadejada}`);
  //   console.log('Complementos seleccionados:', complementos);
  //   console.log('Precio total:', precioTotal);
  //   console.log('Precio coche por día:', precioCochePorDia);
  //   console.log('Precio de complementos:', complementoTotal);
  //   console.log('Precio deposito:', Cardeposito);
  //   console.log('Precio total de costo:', totaldeCosto);
  // };


    
    useEffect(() => {
      // Configura el intervalo permitido
      const intervalo = 30 * 60 * 1000; // 30 minutos en milisegundos
  
      // Crea opciones para horas redondas en el intervalo permitido
      const opcionesHora = [];
      const ahora = new Date();
      for (let i = 0; i < 48; i++) {
        const tiempo = ahora.getTime() + i * intervalo;
        const hora = new Date(tiempo);
        const horaFormateada = hora
          .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          .slice(0, -6);
        opcionesHora.push(horaFormateada);
      }
  
      // Establece las opciones en el estado
      setHoraRecogida(opcionesHora[0]);
    }, []);
  

    const [complementos, setComplementos] = useState({
      asientoElevador: { label: 'Asiento Elevador', precioPorDia: 2, isChecked: false },
      conductorJoven: { label: 'Conductor Joven', precioPorDia: 7, isChecked: false },
      servicioFueraHoras: { label: 'Servicio Fuera de Horas', precioPorDia: 25, isChecked: false },
      sillaBebe: { label: 'Silla Bebe', precioPorDia: 4, isChecked: false },
    });


    // Calcula la diferencia en días entre dos fechas


  const handleCheckboxChange = (complementoKey) => {
    setComplementos((prevComplementos) => ({
      ...prevComplementos,
      [complementoKey]: {
        ...prevComplementos[complementoKey],
        isChecked: !prevComplementos[complementoKey].isChecked,
      },
    }));
  };

  const calcularPrecio = () => {
    const fechaRecogida = new Date(`${diaRecogida}T${horaRecogida}`);
    const fechaDejada = new Date(`${diadejada}T${horadejada}`);

    if (fechaDejada <= fechaRecogida) {
      alert('La fecha de dejada debe ser posterior a la fecha de recogida.');
      return;
    }

    const diferenciaEnMs = fechaDejada - fechaRecogida;
    const diferenciaEnDias = diferenciaEnMs / (1000 * 60 * 60 * 24);

    

       // Precio del coche por día
    const precioCochePorDia = car.price * diferenciaEnDias;
    setPrecioCocheporDia(precioCochePorDia);

    let  precioTotalComplementos = 0;
    Object.values(complementos).forEach((complemento) => {
      if (complemento.isChecked) {
          precioTotalComplementos += complemento.precioPorDia * diferenciaEnDias;
      }  
     
      const complementoTotal=precioTotalComplementos;

       setComplementoTotal(complementoTotal)
      const totaldeCosto = precioCochePorDia + precioTotalComplementos ;
      setTotaldeCosto(totaldeCosto );
      
      setPrecioTotal(precioCochePorDia);
  
     });




};

    const handleReservaClick = async (e)=> {
         
     
      e.preventDefault();
      setDatosReserva(reservaData);
      if (seccionRef1.current) {
        console.log('Antes del scrollIntoView');
        seccionRef1.current.scrollIntoView({ behavior: 'smooth' });
        await new Promise(resolve => setTimeout(resolve, 1000));  // Pausa de 1 segundo
        console.log('Después del scrollIntoView');
      }

     
      setMostrarFormularioCliente(true);
  
      // await logDatos();
     
      // const reservaData = {
      //   car,
      //   sucursalRecogida,
      //   sucursalEntrega,
      //   diaRecogida,
      //   horaRecogida,
      //   diadejada,
      //   horadejada,
      //   complementos,
      //   precioTotal,
      //   precioCochePorDia,
      //   complementoTotal,
      //   deposito,
      //   totaldeCosto,
      // };

    
     
   

    
   
   
    };
  
    // Resto del código...



 // Limitacion de reservas 

 const [selectedCar, setSelectedCar] = useState('');
 const [selectedDate, setSelectedDate] = useState('');

 const [cars] = useState([
  { id: 1, name: car.model, unavailableDates: ['2023-12-20', '2023-12-22'] },
  { id: 2, name: 'Carro 2', unavailableDates: ['2023-06-18', '2023-06-25'] },
  // ... otros coches
]);



const seccionRef = useRef(null);
const seccionRef1 = useRef(null);
const seccionRef2=useRef(null);
    


    const handleAlquilarClick = async (e) => {
      e.preventDefault();
  
      
      if (!sucursalRecogida || !sucursalEntrega || !diaRecogida || !horaRecogida || !diadejada || !horadejada) {
        // Muestra un mensaje de error o realiza la acción que prefieras
        console.error('Por favor, completa todos los campos obligatorios.');
        return;
      }

    await calcularPrecio();
            
      seccionRef.current.scrollIntoView({ behavior: 'smooth' });
  
    
  
    }

  
 

    const Message = ({ message }) => (
      <section>
        <p>{message}</p>
      </section>
    );
    

    const datosArray = [
      {
        orderNumber,
        fechaFormateada,
        carModel: car?.model,
        metodoPago: 'Transferencia Bancaria',
        detallesAlquiler: {
          producto: car?.model,
          lugarEntrega: sucursalEntrega,
          diaEntrega: diadejada,
          horaEntrega: horadejada,
        },
        detallesDevolucion: {
          sucursalDevolucion: sucursalRecogida,
          diaDevolucion: diaRecogida,
          horaDevolucion: horaRecogida,
        },
        detallesPago: {
          total: precioTotal || 0,
          nombre: clientName,
          apellido: ClientLastName,
          phone: clientPhone,
          email: clientEmail,
        },
      },
      // Puedes agregar más objetos al array según sea necesario
    ];



    const FormularioCompra =({
       orderNumber,
       fechaFormateada,
        precioTotal
        ,car,
        diaRecogida,
        diadejada,horaRecogida,
        horadejada,
        sucursalRecogida,
        sucursalEntrega,
        clientName,
        ClientLastName,
        clientPhone,
        clientEmail }) =>{
      const [email, setEmail] = useState('');
    }
  
  
    const enviarCorreo = async () => {
      try {
        // Construir el cuerpo del correo con los datos del formulario
        const correoBody = {
          orderNumber,
          fechaFormateada,
          carModel: car.model,
          precioTotal,
          clientName,
          ClientLastName,
          clientPhone,
          clientEmail,
          sucursalEntrega,
          sucursalRecogida,
          horadejada,
          horaRecogida,
          diadejada,
          diaRecogida,
          
          // Otros datos del formulario
          
         
        };
  
        // Enviar datos al servidor para enviar correos y procesar la reserva
        await axios.post('/enviar-correo-y-procesar-reserva', correoBody);
  
        // Limpiar el formulario después de enviar
        // Limpiar estados, establecer los valores predeterminados, etc.
      } catch (error) {
        console.error('Error al enviar el correo y procesar la reserva', error);
      }
    };



    const generateOrderNumber = async (e) => {

  

 
    
      e.preventDefault();
    
      
  
      const formClient = {
        clientName,
        ClientLastName,
        ClientCompany,
        clientAdress,
        Clientecp,
        clientPhone,
        clientEmail
  
      }
      setDatosDeTransfer(true)
      setformClient(formClient);
  
      await generateReference();

      seccionRef2.current.scrollIntoView({ behavior: 'smooth' });
  
      if (!clientName || !ClientLastName || !clientEmail || !clientPhone || !clientAdress || !Clientecp) {
        // Muestra un mensaje de error o realiza la acción que prefieras
        console.error('Por favor, completa todos los campos obligatorios.');
        return;
      }
  
  
    
  
  
      // Generar un número de pedido único (puedes personalizar esta lógica según tus necesidades)
     
        // Genera un número de pedido único (puedes personalizar esta lógica según tus necesidades)
      
      
        
      
    
    };
  
  

    const generateReference = () => {
      const newOrderNumber = Math.floor(Math.random() * 1000) + 1;
      setOrderNumber(newOrderNumber);
      
    }


  if (!car) {
    return <div>Coche no encontrado</div>;
  }
 

  return (
    <div className='h-100 flex flex-col pt-60 p-4'>
           <h1 className='text-4xl uppercase text-center font-oswald font-bold'> {car.model}</h1>

           <img className='border' src={car.image} alt={car.model} />

           <p className='font-bold font-oswald text-2xl'> {car.price.toFixed(2) }€/Dia</p>
     
      <h1 className='font-oswald uppercase text-center p-4 text-2xl'> Informacion de Precios</h1>

      <form  >

      <label htmlFor="localidadEntrega" className="mb-2 flex flex-col p-2 text-black font-oswald uppercase">
        
         Lugar de Entrega

         <select name="" id="localidadEntrega" required value={sucursalEntrega} onChange={(e) => setSucursalEntrega(e.target.value)}  className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
        >
            <option value="">Escoge un Sitio </option>
            <option value="aDomicilio"> A Domicilio </option>
            <option value="EstacionSantaJusta">Estacion Santa Justa </option>
            <option value="SVQ">Aeropuerto de Sevilla - San Pablo </option>
        </select>
        </label>

        <label htmlFor="localidadRecogida" className="mb-2 flex flex-col p-2 text-black font-oswald uppercase ">
        
        
         Lugar de Recogida

         <select name="" id="localidadRecogida"  value={sucursalRecogida} required onChange={(e) => setSucursalRecogida(e.target.value)}  className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
        >
            <option value="">Escoge un Sitio </option>
            <option value="aDomicilio"> A Domicilio </option>
            <option value="EstacionSantaJusta">Estacion Santa Justa </option>
            <option value="AeropuertoSevilla">Aeropuerto de Sevilla - San Pablo </option>
        </select>
        </label>

        <label htmlFor="diaEntrega" className='font-oswald uppercase'>Fecha y Hora de Entrega</label>
        <div className='flex'>
        
          <input
          type="date"
          id="diaEntrega"
          value={diaRecogida}
          onChange={(e) => setDiaRecogida(e.target.value)}
          min={new Date().toISOString().split('T')[0]} 
          className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
          required
          
        />
         <input
          type="time"
          id="horaEntrega"
          value={horaRecogida}
          onChange={(e) => setHoraRecogida(e.target.value)}          
          className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
          required
        />
        </div>

          <label htmlFor="diaRecogida" className='font-oswald uppercase'>Fecha y Hora de Dejada</label>
        <div className='flex'>
        
          <input
          type="date"
          id="diaRecogida"
          value={diadejada}
           min={new Date().toISOString().split('T')[0]} 
          onChange={(e) => setDiadejada(e.target.value)}
          className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
          required
        />
         <input
          type="time"
          id="horaRecogida"
          value={horadejada}
          onChange={(e) => setHoradejada(e.target.value)}
          step={1800}
          className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
          required
        />
        </div>

       {/* Complementos */}
       <label htmlFor="" className='uppercase font-oswald'>Complementos</label>
        <div className='flex flex-col'>
          {Object.entries(complementos).map(([key, complemento]) => (
            <div key={key}>
              <input
                type="checkbox"
                id={key}
                checked={complemento.isChecked}
                onChange={() => handleCheckboxChange(key)}
              
              />
              <span className='uppercase font-oswald' >{complemento.label} (+{complemento.precioPorDia}€/día)</span>
            </div>
          ))}
        </div>


           

<button className='border w-full 
        bg-[#EC8F5E] 
          h-50
          p-3
          text-white
           font-oswald
            rounded-xl
            mt-2 
            uppercase' onClick={handleAlquilarClick}> Calcular Presuspuesto</button>

  
             
         
          


                
          {precioTotal !== 0 &&(

           
        <div ref={seccionRef} className='text-center mt-10 h-80 '>

          
        {/* <h2>Precio del Coche por Día:</h2>
         <p className='font-bold'>{precioCochePorDia.toFixed(2)}€</p> */}
          
          <h2  className='font-oswald uppercase'> Precio de Complementos:</h2>
          <p className='font-bold'>{complementoTotal.toFixed(2)}€</p>
          <h2 className='font-oswald uppercase'>Precio Coche por dia:</h2>
          <p className='font-bold'>{precioCochePorDia.toFixed(2)}€</p>
          <h2 className='font-oswald uppercase'>Precio de Fianza:</h2>
          <p className='font-bold'>{Cardeposito.toFixed(2)}€</p>
          <h2 className='font-oswald uppercase'>Precio Total:</h2>
          <p className='font-bold'>{totaldeCosto.toFixed(2)}€</p>
       

      
  
       <button  className='bg-[#EC8F5E] w-full h-50 p-3 text-white font-oswald rounded-xl mt-10'  onClick={handleReservaClick}>REALIZAR RESERVA</button>   
         
       

          
        </div>
        

      )}
       
      
        {message && 
              <Message message={message} />}

      </form>
     


            


      {mostrarFormularioCliente && (
        
      <div >
        <form className='flex flex-col items-left w-50 gap-5 pt-20   ' ref={seccionRef1} >
          {/* Campos del formulario del cliente */}

          <h1   className="block text-gray-600 text-3xl font-oswald uppercase font-medium mb-2 text-center">Detalles de Facturacion</h1>

          <div className='flex gap-3'>
          <label htmlFor="nombre"  className="block text-gray-600 text-xl font-oswald uppercase font-medium mb-2">Nombre:<input
            type="text" 
            id='clientName'        // id="nombre"       // name="nombre"      // value={datosFormularioCliente.nombre}     // onChange={handleInputChangeCliente}
            value={clientName}
            onChange={(e)=>setClientName(e.target.value)}
            className='border rounded-md p-2 w-40'
 
            required
          /></label>

          <label htmlFor="lastName"  className="block text-gray-600 text-xl font-oswald uppercase font-medium mb-2">Apellidos: <input required type="text" id='lasNamte' value={ClientLastName} onChange={(e)=>setClientLastName(e.target.value)} className='border rounded-md p-2 w-40'/></label>
       

           
         
         
         
          </div>

            <div  className='flex gap-3 flex-col'> 



            <label htmlFor="clientCompany" className="block text-gray-600 text-xl font-oswald uppercase font-medium mb-2">
            Nombre de la empresa (Opcional)
            </label>

            <input
              type="text"
              id="clientCompany"
              value={ClientCompany}
              onChange={(e)=>setClientCompany(e.target.value)}
              // value={dni}
              // onChange={(e) => setDNI(e.target.value)}
              // className="w-full p-2 border rounded-md"
              // placeholder="DNI o Pasaporte"  

              className='border rounded-md p-2 w-full'
            />

<label htmlFor="clientAdress" className="block text-gray-600 text-xl font-oswald  font-medium mb-2">
             Direccion de la Calle*
            </label>
            <input
              type="text"
              id='clientAdress'
              value={clientAdress}
              onChange={(e)=>setClientAdress(e.target.value)}
              // id="telefono"
              // value={telefono}
              // onChange={(e) => setTelefono(e.target.value)}
              // className="w-full p-2 border rounded-md"
              // placeholder="Número de Teléfono"
              placeholder='Numero de la casa y nombre de la calle'
              className='border rounded-md p-2 w-full'
              required
            />

            <input type="text" className='border rounded-md p-2 w-full' placeholder='Apartamento, Habitacion,etc.(opcional)' />

            </div>

         
          <div className='flex gap-3'>
          <label htmlFor="clientcp" className="block text-gray-600 text-xl font-oswald  font-medium mb-2">
            Codigo postal*

            <input
              type="number"
              id='clientcp'
              value={Clientecp}
              onChange={(e)=>setClientecp(e.target.value)}
              // id="telefono"
              // value={telefono}
              // onChange={(e) => setTelefono(e.target.value)}
              // className="w-full p-2 border rounded-md"
              // placeholder="Número de Teléfono"

              required



              className='border rounded-md p-2 w-full'/>
            </label>

                          
<label htmlFor="clientPhone" className="block text-gray-600 text-xl font-oswald  font-medium mb-2">
           Telefono*  <input
              type="tel"
              id="clientPhone"
              value={clientPhone}
              onChange={(e)=>setClientPhone(e.target.value)}
              // className="w-full p-2 border rounded-md"
              // placeholder="Número de Teléfono"
                required
              className='border rounded-md p-2 w-full'/>
            </label>
           

          </div>

          <label htmlFor="Clientmail" className='block text-gray-600 text-xl font-oswald  font-medium mb-2'>Email  <input  type="email" id='Clientmail' value={clientEmail}  required onChange={(e)=>setClientEmail(e.target.value)} className='border rounded-md p-2 w-full' /></label>

          <div className=' flex'>
          <input
          type="checkbox"
          id="agreeCheckbox"
          checked={agreed}
          onChange={toggleAgreement}
          required
        /> <label className="ml-2" htmlFor="agreeCheckbox" required>

      {/* <Document className='hidden'
        file="/Condiciones.pdf">
      
       
        
      </Document> */}
      <span className='uppercase font-oswald'> Estoy de acuerdo con los </span>
        <span   className="text-blue-500 cursor-pointer uppercase font-oswald" 
           > términos y condiciones  </span>
      </label>

        
     


          </div>        

           
         

         <label htmlFor="metodoPago" className='font-oswald text-1xl'>Método de Pago:</label>
          <select
            id="metodoPago"
            name="metodoPago"
            value={datosFormularioCliente.metodoPago}
            onChange={handleInputChangeCliente}
            required

            className='font-oswald uppercase bg-[#EC8F5E] rounded-xl p-2 text-white'
          >
            <option value="">Selecciona un método de pago</option>
            <option value="transferencia" className='font-oswald'>Transferencia Bancaria</option>
            <option value="bizum">Bizum</option>
            <option value="tarjeta">Pago con Tarjeta</option>
          </select>
          {/* Repite estos pasos para los
          
          demás campos del formulario del cliente */}



{datosFormularioCliente.metodoPago === `transferencia` && (
       <div className="container mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md" >
       <h2 className="text-2xl font-bold mb-4">Realizar Transferencia Paso a Paso</h2>
       <p className="text-gray-700 mb-4">
         Para completar tu reserva, sigue estos pasos:
       </p>
 
       <p className="mb-2">1. Haz clic en "Completar Reserva".</p>
       <p className="mb-2">
         2. Automáticamente se generará un número de referencia único.
         Realiza la transferencia a la siguiente cuenta bancaria:
       </p>
       
       <div className="bg-white border p-4 rounded-md shadow-md">
         <p className="text-1lg font-semibold font-web mb-2">Cuenta Bancaria:</p>
        <div className='flex gap-2'>

        <p className='font-web uppercase font-semibold'>Nombre:</p>
         <span className='font-oswald uppercase'>
        leon de San Marcos S.L
         </span>

          </div>  


         <div className='flex flex-col gap-2 pt-2'>
         <p className='text-1lg font-web uppercase font-semibold'>Número de Cuenta:</p>
         
         <span className='font-oswald uppercase'> ES 05 2100 8077 3302 0002 8545</span> 

         <div className='flex gap-2'>
         <p className='text-1lg font-web uppercase font-semibold'>Banco: </p>


            <span className='font-oswald uppercase'>
            CaixaBank S.A.
            </span>
         </div>
          

         </div>
       
       </div>
 
       <p className="mt-4">
         Tu solicitud será atendida en un plazo máximo de 12 horas.
       </p>
 
       <p className="text-black mt-4  font-oswald uppercase">¡Gracias por tu colaboración!</p>
     </div>
          )}
         {datosFormularioCliente.metodoPago === 'bizum' && (
      <div className="container mx-auto my-8 p-6 flex flex-col bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Realizar Transferencia Paso a Paso</h2>
      <p className="text-gray-700 mb-4">
        Para completar tu reserva, sigue estos pasos:
      </p>

      <p className="mb-2">1. Haz clic en "Completar Reserva".</p>
      <p className="mb-2">
        2. Automáticamente se generará un número de referencia único.
        Realiza la transferencia a la siguiente cuenta bancaria:
      </p>
      
      <div className="bg-white border p-4 rounded-md shadow-md">
        <p className="text-lg font-semibold mb-2">Cuenta Bancaria:</p>
        <p>Nombre: [Nombre del Titular]</p>
        <p>Número de Cuenta: ES 05 2100 8077 3302 0002 8545</p>
        <p>Banco: [Nombre del Banco]</p>
      </div>

      <p className="mt-4">
        Tu solicitud será atendida en un plazo máximo de 12 horas.
      </p>

      <p className="text-gray-500 mt-4">¡Gracias por tu colaboración!</p>
    </div>
          )}

{datosFormularioCliente.metodoPago === 'tarjeta' && (
            <div>
              {/* Mostrar detalles específicos para Pago con Tarjeta */}
              {/* <p>Realiza el pago con tu tarjeta de crédito o débito.</p> */}

              <div className=''>

                Proximamente podre realizar pago con tarjeta, lamentamos las molestia.
              {/* <h2 className='font-oswald uppercase'>Precio Total:</h2>
              <p className='font-bold'>{totaldeCosto.toFixed(2)}€</p> */}
             </div>
              {/* Aquí puedes agregar un formulario de pago con tarjeta o instrucciones adicionales */}
            </div>
          )}



        
  
          <button
            className='bg-[#EC8F5E] w-full h-50 p-3 text-white font-oswald rounded-xl mt-2'
            
             onClick={generateOrderNumber}
          >
            COMPLETAR RESERVA
          </button>


        </form>

            </div>
      )}


            


  


                <div >

                { datosdetransfer && datosFormularioCliente.metodoPago ==="transferencia" &&(


<div ref={seccionRef2} className='h-screen flex flex-col pt-[40rem] items-center justify-center'  > 
  <h1 className='text-3xl text-center font-oswald'> Finalizar compra</h1>

  <div className='p-4 pt-4'>
      <div className='flex gap-2  items-center flex-wrap border border-slate-950 border-l  pb-2 p-5'>
        <span className=' border-b border-slate-950 '>Referencia:</span>
        <span className=' border-r pr-2 border-slate-950 font-oswald'> #{orderNumber}</span>

        <span className=' border-b border-slate-950 '>Fecha:</span>
        <span className=' border-b border-slate-950 font-oswald '> {fechaFormateada}</span>

      
      <div>
      <span> Metodo De pago: </span>
        <span className='text-1xl font-oswald '> Transferencia Bancaria </span>
      </div>

       
      </div>
      <div className='flex flex-wrap'>
<h1 className='text-2xl font-oswald mb-4'>Detalles del Cliente</h1>

<div className='grid grid-cols-2 gap-4'>
<div className='mb-4'>
<p className='font-bold text-gray-700 uppercase'>Nombre Completo:</p>
<p className='font-oswald'>{clientName + ' ' + ClientLastName}</p>
</div>

<div className='mb-4'>
<p className='font-bold text-gray-700 uppercase'>Dirección de Facturación:</p>
<p className='font-oswald'>{clientAdress}</p>
</div>

<div className='mb-4'>
<p className='font-bold text-gray-700 uppercase'>Teléfono:</p>
<p className='font-oswald'>{clientPhone}</p>
</div>

<div className='mb-4'>
<p className='font-bold text-gray-700 uppercase'>Correo Electrónico:</p>
<p className='font-oswald'>{clientEmail}</p>
</div>

<div className='mb-4'>
<p className='font-bold text-gray-700 uppercase'>Nombre de la Empresa:</p>
<p className='font-oswald'>{ClientCompany}</p>
</div>
</div>
</div>
   
        <h1 className='text-3xl font-oswald text-center pt-10'>Detalles de compra:</h1>
                          
                          <div className='grid grid-cols-2 gap-8'>
<div>
<p className='font-bold mb-2'>Detalles del Alquiler</p>
<p><span className='font-bold'>Producto:</span> {car.model}</p>
<p><span className='font-bold'>Lugar de Entrega:</span> {sucursalEntrega}</p>
<p><span className='font-bold'>Día de Entrega:</span> {diadejada}</p>
<p><span className='font-bold'>Hora de Entrega:</span> {horadejada}</p>
</div>
<div>
<p className='font-bold mb-2'>Detalles de la Devolución</p>
<p><span className='font-bold'>Sucursal de Devolución:</span> {sucursalRecogida}</p>
<p><span className='font-bold'>Día de Devolución:</span> {diaRecogida}</p>
<p><span className='font-bold'>Hora de Devolución:</span> {horaRecogida}</p>
</div>

<div className=''> 
          
          <p className='font-bold  mb-2'>Detalles del Pago</p>
          
          <span className=''>Total:</span>
          <span className='font-bold'>{precioTotal.toFixed(2)}€</span>

        


        
          </div>
</div>

   

          
     <div className='flex flex-col pt-10'>

        <p><span className='font-bold'>Método de Pago:</span> Transferencia Bancaria Directa</p>
            <p>Realiza la transferencia a la siguiente cuenta:</p>
            <p>En <span className='font-bold'>12h </span>procesaremos su solicitud</p>
            <p className='font-bold border-b border-slate-950 text-center'>ES 05 2100 8077 3302 0002 8545</p>

            <Link to="/success">   <button className='bg-[#EC8F5E] w-full h-50 p-3 text-white font-oswald rounded-xl mt-2'   onClick={enviarCorreo}>Enviar Solictud</button> </Link> 
               
             <div className='flex justify-center items-center'>
           
                <h1 className='text-1xl'> Muchas Gracias por reservar con </h1>
                <img src={Logo} className='h-[10rem] w-[8rem] items-center' alt="" />
             </div> 



             
{mostrarVentana && (
<div className="ventana-emergente">
  <p>Tu solicitud está siendo procesada. Gracias por reservar.</p>
</div>
)}

     </div>




  </div>
  
  
  
  
  
  
  
  
   </div>

)} 

                </div>

      
   
        
          
     
    </div>
  )


}

export default  PageRental;
 