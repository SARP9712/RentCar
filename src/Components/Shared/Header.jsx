import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import PL from '../../assets/Pl.jpg'
import Rentcar from '../../assets/rentcar.mp4'


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
        <div className='h-screen  flex flex-col  items-center justify-center' >
            <video className='w-full h-full object-cover'
    style={{
      width: '100%', // Ancho del video
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
    }}
    autoPlay
    loop
    muted
    playsInline
  >
    <source src={Rentcar}/>
  </video>
           <div className='bg-[#EC8F5E] bg-opacity-50 box-content flex flex-col rounded-xl bg-trasparent text-center p-4 w-65 ' >

            
           

           <h1 className='text-2xl pt-2 border-b white font-oswald text-white uppercase'> ¡ Tu Coche de hoy al mejor precio!</h1>

        

       <Link to="/CarRental">
      <button type="submit" className="bg-[#F3B664] text-white p-2 mt-4 font-oswald font-bold uppercase border">
         ver Coches Disponibles
      </button>
        </Link>

           </div>

         
       
        
          
        </div>


        
         

    </div>
  )
}

export default Header