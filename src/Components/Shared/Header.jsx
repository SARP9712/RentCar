import React, {useState} from 'react'
import PL from '../../assets/Pl.jpg'


function Header() {
    const [sucursalRecogida, setSucursalRecogida] = useState('');
    const [diaRecogida, setDiaRecogida] = useState('');
    const [horaRecogida, setHoraRecogida] = useState('');
    const [diaDevolucion, setDiaDevolucion] = useState('');
    const [horaDevolucion, setHoraDevolucion] = useState('');
    const [edadConductor, setEdadConductor] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      console.log('Datos del formulario:', {
        sucursalRecogida,
        diaRecogida,
        horaRecogida,
        diaDevolucion,
        horaDevolucion,
        edadConductor,
      });
    };

  return (
    <div>
        <div className='h-screen pt-40 flex flex-col items-center' style={{ backgroundImage:`url(${PL})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
           
           <div className='pt-20 box-content flex flex-col' >

         
           <form onSubmit={handleSubmit} className=" border text-white p-6 bg-[#E9B824] flex flex-col gap-2">
          
           <h1 className='text-[#337b3f] font-oswald uppercase text-center text-2xl '> Reserva Ahora </h1>
          
          <label htmlFor="sucursalRecogida" className="mb-2 flex flex-col p-2 text-[#337b3f] font-oswald uppercase">


                Sucursal de Recogida:           


        <select name="" id="sucursalRecogida"  value={sucursalRecogida}  onChange={(e) => setSucursalRecogida(e.target.value)}  className="bg-white text-[#337b3f] font-oswald uppercase p-2 "
        >
            <option value="">Escoge un Sitio </option>
            <option value="EstacionSantaJusta">Estacion Santa Justa </option>
            <option value="SVQ">Aeropuerto de Sevilla - San Pablo </option>
        </select>
      </label>

      <label htmlFor="diaRecogida" className="mb-2 text-[#337b3f] font-oswald uppercase ">
        Día de Recogida:
        <input
          type="date"
          id="diaRecogida"
          value={diaRecogida}
          onChange={(e) => setDiaRecogida(e.target.value)}
          className="bg-white text-black p-2  ml-4 "
        />
      </label>

      <label htmlFor="horaRecogida" className="mb-2 flex  text-[#337b3f] font-oswald uppercase">
        Hora de Recogida:
        <input
          type="time"
          id="horaRecogida"
          value={horaRecogida}
          onChange={(e) => setHoraRecogida(e.target.value)}
          className="bg-white text-black p-1 ml-4"
        />
      </label>

      <label htmlFor="diaDevolucion" className="mb-2 text-[#337b3f] font-oswald uppercase">
        Día de Devolución:
        <input
          type="date"
          id="diaDevolucion"
          value={diaDevolucion}
          onChange={(e) => setDiaDevolucion(e.target.value)}
          className="bg-white text-black p-2 ml-4"
        />
      </label>

      <label htmlFor="horaDevolucion" className="mb-2 text-[#337b3f] font-oswald uppercase">
        Hora de Devolución:
        <input
          type="time"
          id="horaDevolucion"
          value={horaDevolucion}
          onChange={(e) => setHoraDevolucion(e.target.value)}
          className="bg-white text-black p-2 ml-4"
        />
      </label>

      <label htmlFor="edadConductor" className="mb-2 text-[#337b3f] font-oswald uppercase">
        Edad del Conductor (25-74 años):
        <input
          type="number"
          id="edadConductor"
          value={edadConductor}
          onChange={(e) => setEdadConductor(e.target.value)}
          min="25"
          max="74"
          className="bg-white text-black p-2 ml-4 "
        />
      </label>

      <button type="submit" className="bg-[#337b3f] text-white p-2 mt-4 rounded-sm font-oswald uppercase">
        Buscar Coches
      </button>
    </form>
           </div>

        </div>
    </div>
  )
}

export default Header