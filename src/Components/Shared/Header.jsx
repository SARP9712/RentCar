import React, {useState} from 'react'
import { Link } from 'react-router-dom';
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
        <div className='h-screen  flex flex-col  items-center justify-center' style={{ backgroundImage:`url(${PL})`, backgroundSize: 'auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
           
           <div className=' box-content flex flex-col bg-[#EC8F5E] text-center p-4 w-65 ' >

          <h1 className='font-bold font-oswald uppercase text-2xl text-white'> ¡Descubre una nueva forma de explorar con nosotros! </h1>   
           

           <h1 className='text-1xl font-web pt-2 border-b border-slate-500'> ¡ Tu Coche de hoy al mejor precio!</h1>

        

       <Link to="/CarRental">
      <button type="submit" className="bg-[#F3B664] text-white p-2 mt-4 font-oswald font-bold uppercase">
        Coches Disponibles
      </button>
        </Link>

           </div>

         
       
        
          
        </div>


        
         

    </div>
  )
}

export default Header