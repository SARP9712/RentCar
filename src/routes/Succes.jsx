import React from 'react'
import { Link } from 'react-router-dom'
import checkValidate from '../assets/cheque.png'

function Succes() {
  return (
    <div className='flex justify-center items-center bg-[#323886] h-screen flex-col'> 


                <img src={checkValidate} alt="" className='h-20' />
            <h1 className='text-[#f3b664] font-oswald text-3xl text-center'> Tu Solicitud se ha enviado Sastifactoriamente</h1>
          
          
            <span className='text-white'>Tu coche va en camino...</span>


      <Link to="/">
            <button className='bg-[#EC8F5E] w-auto h-50 p-2 text-white uppercase font-oswald rounded-xl mt-2'>
              Volver al Inicio
            </button>
            </Link>
    </div>
  )
}

export default Succes