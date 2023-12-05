import React, {useState} from 'react'
import Logo from '../assets/Logo.png'
import LenguajeSelector from './Shared/LenguajeSelector'
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import Carrito from './Shared/Carrito';
import CarRental from './Shared/CarRental';

function Nabvar() {



    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState([]);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const toggleCart = () => {
        setCartOpen(!cartOpen);
      };
    

    const addToCart = (car) => {
        setCart([...cart, car]);
  
      };

  return (
    <div>
        <nav className='bg-[#E9B824] p-4 fixed w-full'>
            <div className='container mx-auto flex justify-between items-center'> 

            <div className='text-white text-lg font-bold'>
                        <img src={Logo} className='h-[6rem]' alt="" />
            </div>

          
          

                <LenguajeSelector></LenguajeSelector>

                <button onClick={toggleCart}>
                <FiShoppingCart className='text-3xl text-white' />

                </button>

                <button onClick={toggleMenu} className="text-white focus:outline-none">

                    
                <FiMenu className='text-white text-4xl' />

                

                </button>

         


                {menuOpen ? (
  <div className='mt-2 absolute right-0 h-screen w-60 top-[7.5rem] gap-8 bg-[#E9B824] items-center flex flex-col p-4  transition-all ease-in-out pt-20'>
<a href="#" className="text-white text-3xl font-oswald block uppercase">Inicio</a>
                
                <a href="#" className="text-white  text-3xl font-oswald block uppercase">Servicios</a>
                <a href="#" className="text-white   text-3xl font-oswald block uppercase">Contacto</a>
                <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Acerca de nosotros</a>
  
    
  
  </div>
) : (
  <div className='mt-2 absolute right-full h-screen w-60 top-[7.5rem] gap-8 bg-[#E9B824] items-center flex flex-col p-4'>
 <a href="#" className="text-white text-3xl font-oswald block uppercase">Inicio</a>
                
                <a href="#" className="text-white  text-3xl font-oswald block uppercase">Servicios</a>
                <a href="#" className="text-white   text-3xl font-oswald block uppercase">Contacto</a>
                <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Acerca de nosotros</a>
  </div>
)}

   
{cartOpen && 

  
          
    <Carrito/>
    
  
 
}

          




                {/* {menuOpen && (
              <div className={`mt-2 absolute  gap-4 right-0 top-[7.5rem] w-60 h-screen bg-[#E9B824] items-center flex flex-col p-4 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                <a href="#" className="text-white text-3xl font-oswald block uppercase">Inicio</a>
                
                <a href="#" className="text-white  text-3xl font-oswald block uppercase">Servicios</a>
                <a href="#" className="text-white   text-3xl font-oswald block uppercase">Contacto</a>
                <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Acerca de nosotros</a>
              </div>
            )} */}


     
            </div>

           
           
        </nav>
        

        
        
    </div>
  )
}

export default Nabvar