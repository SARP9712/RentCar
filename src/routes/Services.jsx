import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>



            <div className='bg-[#EC8F5E] mt-60 box-content pt-80'> 
                          <h1 className='font-oswald uppercase text-3xl text-center'>   Nuestro Servicios         </h1> 


                          <p className='p-4  font-abc text-white'>
                          En  <span className='font-oswald uppercase text-black'>SevillaRentaCar </span>, entendemos la importancia de la movilidad y la flexibilidad durante tus viajes. Por eso, ofrecemos servicios de alquiler de coches con una amplia gama de opciones para satisfacer tus necesidades específicas.
                          </p>

                         
                        
                          <h1 className='font-oswald uppercase text-2xl text-center  text-black'>    Nuestra Flota    </h1>          
                         
                        <p className='p-4 font-abc text-white'>
                        Explora nuestra diversa flota de vehículos que incluye desde coches compactos ideales para explorar la ciudad hasta SUVs espaciosos para aventuras en familia. Trabajamos con marcas de confianza para garantizar la calidad y seguridad de tu experiencia de conducción.


                        </p>



                         

                                <h1 className='font-oswald uppercase text-2xl text-center'>¿Por qué Elegirnos?</h1>

                          <p  className='p-8  font-abc text-white'>

                            <ol className=' list-disc'>
                                <li>Variedad de Opciones: Ofrecemos una amplia selección de vehículos para adaptarnos a tus preferencias y necesidades.</li>

                                <li>Tarifas Competitivas: Nuestras tarifas son transparentes y competitivas, sin sorpresas ocultas.</li>

                                <li>Conveniencia: Reserva en línea de manera fácil y rápida. Te proporcionamos la libertad de explorar a tu propio ritmo.
</li>
                            </ol>
                            
                          </p>

                          
                            <h1 className='font-oswald uppercase text-2xl text-center'>
                            Cómo Reservar</h1>

                            <p className='p-6  font-abc text-white'> 
                                        Explora nuestra flota en línea.
                                        Selecciona las fechas de alquiler y elige el vehículo que se ajuste a tus necesidades.
                                        Completa el proceso de reserva de manera segura.

                                        <ol className='list-disc'>
                            <li>Explora nuestra flota en línea</li>
                            <li>Selecciona las fechas de alquiler y elige el vehículo que se ajuste a tus necesidades.</li>
                            <li>Completa el proceso de reserva de manera segura.</li>
                          </ol>
                                        
                                        </p>
                            
                            <div className='flex items-center justify-center gap-4 mb-10'>

                                <Link to="/CarRental">
                                <button type="submit" className="bg-[#F3B664] text-white p-2 mt-4 font-oswald font-bold uppercase border">
                                ver Coches Disponibles
                            </button>
                                </Link>

                           

                            <Link to="/">
                            <button type="submit" className="bg-[#F3B664] text-white p-2 mt-4 font-oswald font-bold uppercase border">
                               Volver al Inicio
                            </button>
                            </Link>
                        

                            </div>
               
            </div>



    </div>
  )
}

export default Services