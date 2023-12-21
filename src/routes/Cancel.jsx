import React from 'react'
import { Link } from 'react-router-dom'
import cancelar from '../assets/cancelar.png' 

function Cancel() {
  return (
    <div className='flex justify-center items-center bg-[#323886] h-screen flex-col'> 


                <img src={cancelar} alt="" className='h-20' />
            <h1 className='text-[#f3b664] font-oswald text-3xl text-center'> Lo sentimos algo ha salido </h1>
          
          
            <span className='text-white'>Volvamos intentarlo</span>


      <Link to="/">
            <button className='bg-[#EC8F5E] w-auto h-50 p-2 text-white uppercase font-oswald rounded-xl mt-2'>
              Volver al Inicio
            </button>
            </Link>
    </div>
  )
}

export default Cancel