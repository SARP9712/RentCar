import React, {useState} from 'react'
import Logo from '../assets/Logo.png';
import LenguajeSelector from './Shared/LenguajeSelector'
import { FiMenu, FiShoppingCart, FiPhone, FiMail } from "react-icons/fi";
import Carrito from './Shared/Carrito';
import CarRental from './Shared/CarRental';
import { CarsData } from './CarsData';
import { AddtoCart } from './AddtoCart';

function Nabvar({cartProp}) {



    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState(cartProp || []);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const toggleCart = () => {
        setCartOpen(!cartOpen);
      };
    
      const addToCart = (car) => {
        setCart([...cart, car])
      }




 console.log(cart)

  return (
    <div>
        <nav className='bg-[#EC8F5E] p-4 fixed w-full'>
            <div className='container mx-auto flex justify-between items-center'> 

            <div className='text-white text-lg font-bold'>
                        <img src={Logo} className='h-[9rem] w-[7rem] box-content' alt="" />

                          <h2></h2>

            </div>
                                  
                    <div className='flex flex-col items-left gap-4'>
                      <div className='flex items-center gap-2'>
                      <FiPhone className='text-xl text-[#283389]'></FiPhone> <span className='text-[1rem] font-oswald text-[#283389]'> +34 695 94 10 16</span>

                      </div>
                     
                      <div className='flex items-center gap-2'>
                      <FiMail className='text-1xl text-[#283389]'></FiMail> <span className='text-[1rem] font-oswald text-[#283389]'>sevillarentcar@gmail.com</span>
                      </div>

                    
                    </div>
              

                {/* <LenguajeSelector></LenguajeSelector> */}

                {/* <button onClick={toggleCart}>
                <FiShoppingCart className='text-3xl text-white' />

                </button> */}

             
                <button onClick={toggleMenu} className="text-white focus:outline-none">

                    
                <FiMenu className='text-[#283389] text-4xl' />

                

                </button>

         


                {menuOpen ? (
  <div className='mt-2 absolute right-0 h-screen w-60 top-[7.5rem] gap-8 bg-[#EC8F5E] items-center flex flex-col p-4  transition-all ease-in-out pt-20'>
<a href="#" className="text-white text-3xl font-oswald block uppercase">Inicio</a>
                
                <a href="#" className="text-white  text-3xl font-oswald block uppercase">Servicios</a>
                <a href="#" className="text-white   text-3xl font-oswald block uppercase">Contacto</a>
                <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Acerca de nosotros</a>
  
    
  
  </div>
) : (
  <div className='mt-2 absolute right-full h-screen w-60 top-[7.5rem] gap-8 bg-[#EC8F5E] items-center flex flex-col p-4'>
 <a href="#" className="text-white text-3xl font-oswald block uppercase">Inicio</a>
                
                <a href="#" className="text-white  text-3xl font-oswald block uppercase">Servicios</a>
                <a href="#" className="text-white   text-3xl font-oswald block uppercase">Contacto</a>
                <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Acerca de nosotros</a>
  </div>
)}

  {/* CARRITO DE COMPRA  */}

{cartOpen && <addToCart cart={cart} />}
{/* //   <div className='mt-2 absolute right-0 h-screen w-60 top-[7.5rem] gap-8 bg-[#EC8F5E] items-center flex flex-col p-4  transition-all ease-in-out pt-20'>
// {/* 
//                   {cartOpen && <Carrito cart={cart} toggleCart={toggleCart} />} */}

  
  
    

{/* {/* //   </div>
// ) : (
//   <div className='mt-2 absolute right-full h-screen w-60 top-[7.5rem] gap-8 bg-[#EC8F5E] items-center flex flex-col p-4'>
//  <a href="#" className="text-white text-3xl font-oswald block uppercase">Inicio</a>
                
//                 <a href="#" className="text-white  text-3xl font-oswald block uppercase">Servicios</a>
//                 <a href="#" className="text-white   text-3xl font-oswald block uppercase">Contacto</a>
//                 <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Acerca de nosotros</a>
//   </div>
)}   */}



          





     
            </div>

           
           
        </nav>
        

        
        
    </div>
  )
}



export default Nabvar