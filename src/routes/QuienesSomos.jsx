import React from 'react'
import { Link } from 'react-router-dom'

function QuienesSomos() {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-[#323886]'>

    <div className='bg-[#EC8F5E] flex flex-col rounded-xl box-content pt-80 mt-80 '>
    <h2 className='text-center font-oswald uppercase text-2xl'>Quiénes Somos</h2>
      <p className='p-4 text-white font-abc'>
        Sevilla Rent a Car es más que una empresa de alquiler de vehículos; somos una familia comprometida en proporcionarte un servicio de calidad. Nuestra misión es hacer que tu experiencia de alquiler de coches sea simple, personalizada y memorable.
      </p>
      <p className='p-4 text-white font-abc'>
        Fundada con raíces familiares, nos enorgullece ofrecer atención personalizada desde el momento en que decides alquilar un vehículo con nosotros. Nos esforzamos por superar tus expectativas y garantizar que cada paso del proceso de alquiler sea cómodo y sin complicaciones.
      </p>
      <p  className='p-4 text-white font-abc'>
        En Sevilla Rent a Car, creemos en la importancia de la transparencia y la confianza. Trabajamos incansablemente para proporcionarte vehículos de calidad y tarifas competitivas, ideales para tus vacaciones, escapadas de fin de semana, acampadas en la naturaleza o planes de turismo por Andalucía.
      </p>
      <p className='p-4 text-white font-abc'>
        Ya sea que estés planificando un viaje a la costa para disfrutar del sol y la playa, una excursión a la sierra para experimentar la belleza de la montaña, o una escapada con amigos en una furgo, en Sevilla Rent a Car estamos aquí para facilitarte el viaje.
      </p>
      <p className='p-4 text-white font-abc'>
        Ofrecemos una amplia variedad de vehículos para adaptarnos a tus planes y preferencias, desde coches ideales para recorrer la ciudad hasta motos perfectas para sentir la libertad en carretera. Nuestro proceso de reserva online es fácil y rápido, permitiéndote planificar tu viaje con comodidad y confianza.
      </p>
      <p className='p-4 text-white font-abc'>
        Gracias por considerarnos como tu opción de alquiler de coches. Esperamos tener el placer de servirte y ser parte de tus aventuras en la carretera. En Sevilla Rent a Car, no solo ofrecemos alquiler de coches, ofrecemos la clave para una experiencia de viaje inolvidable.
      </p>
      <p className='p-4 text-white font-abc'>
        ¡Reserva con nosotros y prepárate para vivir el viaje de tus sueños!
      </p>

      <Link to="/">
                            <button type="submit" className="bg-[#F3B664] text-white p-2 mt-4 font-oswald font-bold uppercase border justify-center w-full">
                               Volver al Inicio
                            </button>
                            </Link>
   
    </div>

</div>
  )
}

export default QuienesSomos