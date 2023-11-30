import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import LenguajeSelector from './Shared/LenguajeSelector'
import { FiMenu } from "react-icons/fi";

function Nabvar() {



    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <div>
        <nav className='bg-[#E9B824] p-4'>
            <div className='container mx-auto flex justify-between items-center'> 

            <div className='text-white text-lg font-bold'>
                        <img src={Logo} className='h-[6rem]' alt="" />
            </div>

          


                <LenguajeSelector></LenguajeSelector>

                <button onClick={toggleMenu} className="text-white focus:outline-none">
                <FiMenu className='text-white text-4xl' />

                </button>

                {menuOpen && (
              <div className='mt-2 absolute left-0 w-full top-[7.5rem] bg-[#E9B824] items-center flex flex-col p-4'>
                
                <a href="#" className="text-white font-oswald block uppercase">Inicio</a>
                <a href="#" className="text-white font-oswald block uppercase">Acerca de nosotros</a>
                <a href="#" className="text-white font-oswald block uppercase">Servicios</a>
                <a href="#" className="text-white font-oswald block uppercase">Contacto</a>
              </div>
            )}
     
            </div>

           

        </nav>
    </div>
  )
}

export default Nabvar