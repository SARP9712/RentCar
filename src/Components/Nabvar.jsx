import React, {useState, useEffect, useRef} from 'react'
import Logo from '../assets/Logo.png'; 
import Rentcar from '../assets/rentcar.png'
import LenguajeSelector from './Shared/LenguajeSelector'
import { FiMenu, FiShoppingCart, FiPhone, FiMail, FiInstagram } from "react-icons/fi";
import { BiLogoTiktok } from "react-icons/bi";
import Carrito from './Shared/Carrito';
import CarRental from './Shared/CarRental';
import { CarsData } from './CarsData';
import { AddtoCart } from './AddtoCart';
import { Link } from 'react-router-dom';

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

      const closeMenu = () => {
        setMenuOpen(false);
      };

      const menuRef = useRef(null);

      useEffect(() => {
        const handleDocumentClick = (event) => {
          // Cierra el menú si el clic no ocurrió dentro del menú ni del botón
          if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            event.target.tagName !== 'svg'
          ) {
            setMenuOpen(false);
          }
        };
    
        // Agregar el event listener al documento cuando el menú está abierto
        if (menuOpen) {
          document.addEventListener('click', handleDocumentClick);
        }
    
        // Limpiar el event listener cuando el componente se desmonta o el menú se cierra
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, [menuOpen]);


 

  return (
    <div>
        <nav className='bg-[#EC8F5E] p-2 box-content  fixed w-full'>
            <div className='container mx-auto flex justify-between items-center'> 


           
            <div className='text-white text-lg font-bold box-content flex ml-0'>
            <img src={Rentcar} className='h-40 w-100%' alt="" />

            <button onClick={toggleMenu} className="text-white focus:outline-none">

              <div className=' right-10 bottom-20 absolute'>

              <FiMenu className='text-white text-4xl mb-10 border'/>

              </div>

              <div className='flex flex-col justify-center items-end mt-20 gap-1 '>
                      <div className='flex items-center gap-0'>
                      <FiPhone className='text-xl text-white'></FiPhone> <span className='text-[1rem] font-oswald text-white text-right'> +34 695 94 10 16</span>

                      </div>
                     
                      <div className='flex items-center gap-0 '>
                      <FiMail className='text-1xl text-white'></FiMail> <span className='text-[0.9rem] font-oswald text-white'>sevillarentacar@gmail.com</span>
                      </div>


                    
              <div className=' flex gap-4 items-center justify-center'>
               
               <a href="https://www.instagram.com/sevillarentacar/">
               <FiInstagram className='text-2xl text-white'/>

               </a>
             <a href="https://www.tiktok.com/@sevillarentacar
             "><BiLogoTiktok className='text-2xl text-white' /></a>
              
                </div>  
                    </div>
    

</button>

                     
            </div>
                                  
                 
              

                {/* <LenguajeSelector></LenguajeSelector> */}

                {/* <button onClick={toggleCart}>
                <FiShoppingCart className='text-3xl text-white' />

                </button> */}

             
              
         


                {menuOpen ? (
  <div ref={menuRef} className='mt-2 absolute right-0 h-screen w-60 top-[10.5rem] gap-8 bg-[#EC8F5E] items-center flex flex-col p-4  transition-all ease-in-out pt-20'>
    <Link to="/" onClick={closeMenu}>
<a href="#" className="text-white text-3xl font-oswald block uppercase">Inicio</a>
</Link>
                
<Link to="/Servicios" onClick={closeMenu}>
     <a href="#" className="text-white  text-3xl font-oswald block uppercase">Servicios</a>
     </Link>  

     <Link to="/Contactanos" onClick={closeMenu}>
     <a href="#" className="text-white   text-3xl font-oswald block uppercase">Contacto</a>
     
     </Link>
                
                <Link to='/QuienesSomos' onClick={closeMenu}>
                <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Acerca de nosotros</a>
                
                </Link>

                <Link to='/RutasSevilla' onClick={closeMenu}>
                <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Rutas por Sevilla</a>
                
                </Link>
  
    
  
  </div>
) : (
  <div ref={menuRef} className='mt-2 absolute right-full h-screen w-60 top-[7.5rem] gap-8 bg-[#EC8F5E] items-center flex flex-col p-4'>

    <Link to='/' onClick={closeMenu}>
    <span className="text-white text-3xl font-oswald block uppercase">Inicio</span>
    </Link>
 
     <Link to="/Servicios" onClick={closeMenu}>
     <a href="#" className="text-white  text-3xl font-oswald block uppercase">Servicios</a>
     </Link>           
           
              
     <Link to="/Contactanos" onClick={closeMenu}>
     <a href="#" className="text-white   text-3xl font-oswald block uppercase">Contacto</a>
     
     </Link>
               
                <Link to='/QuienesSomos' onClick={closeMenu}>
                <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Acerca de nosotros</a>
                
                </Link>

                <Link to='/RutasSevilla' onClick={closeMenu}>
                <a href="#" className="text-white   text-3xl text-center font-oswald block uppercase">Rutas por Sevilla</a>
                
                </Link>
              
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