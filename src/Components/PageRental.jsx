import React, {useEffect, useState}   from 'react'

import { useParams } from 'react-router-dom';
import { CarsData } from './CarsData'

const PageRental = () => {

    const { id } = useParams();
    const car = CarsData.find((car) => car.id === parseInt(id));
    const [sucursalRecogida, setSucursalRecogida] = useState('');
    const [diaRecogida, setDiaRecogida] = useState('');
    const [horaRecogida, setHoraRecogida] = useState('');
    const [diadejada, setDiadejada] = useState('');
    const [horadejada, setHoradejada] = useState('');
    const [precioTotal, setPrecioTotal] = useState(0);
    const [precioCochePorDia, setPrecioCocheporDia] = useState(0);
    const [totaldeCosto, setTotaldeCosto]=useState(0);
    const [complementoTotal, setComplementoTotal] = useState(0);
    
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
      const totaldeCosto = precioCochePorDia + precioTotalComplementos + car.deposito;
      setTotaldeCosto(totaldeCosto );
      
      setPrecioTotal(precioCochePorDia);
  
     });




};

  

    const handleAlquilarClick = (e) => {
      e.preventDefault();
      calcularPrecio();
    };
  

  
  


 

    




  if (!car) {
    return <div>Coche no encontrado</div>;
  }


  return (
    <div className='h-100 flex flex-col pt-0 p-4'>
           <h1 className='text-2xl text-center font-oswald'> {car.model}</h1>

           <img className='border' src={car.image} alt={car.model} />

           <p className='font-bold font-oswald'> DE {car.price},00€</p>
     
      <h1 className='font-oswald uppercase text-center p-4'> Informacion de Precios</h1>

      <form action="">

      <label htmlFor="localidadRecogida" className="mb-2 flex flex-col p-2 text-black font-oswald uppercase">
        
         Localidad de Recogida

         <select name="" id="localidadRecogida"  value={sucursalRecogida}  onChange={(e) => setSucursalRecogida(e.target.value)}  className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
        >
            <option value="">Escoge un Sitio </option>
            <option value="EstacionSantaJusta">Estacion Santa Justa </option>
            <option value="SVQ">Aeropuerto de Sevilla - San Pablo </option>
        </select>
        </label>

        <label htmlFor="localidadRecogida" className="mb-2 flex flex-col p-2 text-black font-oswald uppercase ">
        
        
         Localidad de Entrega

         <select name="" id="localidadRecogida"  value={sucursalRecogida}  onChange={(e) => setSucursalRecogida(e.target.value)}  className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
        >
            <option value="">Escoge un Sitio </option>
            <option value="EstacionSantaJusta">Estacion Santa Justa </option>
            <option value="SVQ">Aeropuerto de Sevilla - San Pablo </option>
        </select>
        </label>

        <label htmlFor="" className='font-oswald uppercase'>Fecha y Hora de Recogida</label>
        <div className='flex'>
        
          <input
          type="date"
          id="diaRecogida"
          value={diaRecogida}
          onChange={(e) => setDiaRecogida(e.target.value)}
          min={new Date().toISOString().split('T')[0]} 
          className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
        />
         <input
          type="time"
          id="horaRecogida"
          value={horaRecogida}
          onChange={(e) => setHoraRecogida(e.target.value)}
          
          className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
        />
        </div>

          <label htmlFor="" className='font-oswald uppercase'>Fecha y Hora de Dejada</label>
        <div className='flex'>
        
          <input
          type="date"
          id="diaRecogida"
          value={diadejada}
           min={new Date().toISOString().split('T')[0]} 
          onChange={(e) => setDiadejada(e.target.value)}
          className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
        />
         <input
          type="time"
          id="horaRecogida"
          value={horadejada}
          onChange={(e) => setHoradejada(e.target.value)}
          step={1800}
          className="bg-[#EC8F5E] text-white p-1 ml-4 border rounded-xl"
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

          <button className='border w-full bg-[#EC8F5E] h-50 p-3 text-white font-oswald rounded-xl mt-2 uppercase' onClick={handleAlquilarClick}> Calcular Presuspuesto</button>
          


   
          {precioTotal !== 0 && (
        <div className='text-center mt-4'>

          
        {/* <h2>Precio del Coche por Día:</h2>
         <p className='font-bold'>{precioCochePorDia.toFixed(2)}€</p> */}
          
          <h2 className='font-oswald uppercase'> Precio de Complementos:</h2>
          <p className='font-bold'>{complementoTotal.toFixed(2)}€</p>
          <h2 className='font-oswald uppercase'>Precio Coche por dia:</h2>
          <p className='font-bold'>{precioCochePorDia.toFixed(2)}€</p>
          <h2 className='font-oswald uppercase'>Precio deposito:</h2>
          <p className='font-bold'>{car.deposito.toFixed(2)}€</p>
          <h2 className='font-oswald uppercase'>Precio Total:</h2>
          <p className='font-bold'>{totaldeCosto.toFixed(2)}€</p>
       
          <button className='bg-[#EC8F5E] w-full h-50 p-3 text-white font-oswald rounded-xl mt-2'>REALIZAR RESERVA</button>

        </div>
        

      )}

      </form>








      {/* <span>{car.model}</span>
   
      <p>Tipo de Combustible: {car.fuelType}</p>
      */}
     
    </div>
  )
}

export default PageRental