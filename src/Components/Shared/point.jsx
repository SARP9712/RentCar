import React from 'react'
import Ford from  '../../assets/ford.png'

function point() {
  return (
    <div className='bg-white flex flex-col items-center text-center justify-center mb-20'>
        <h1 className='font-oswald text-4xl pt-4'>Nuestra Flota</h1>

        <div className='flex gap-2 pt-4'>
                <div className='bg-[#E9B824] flex flex-col'>
                        <img src={Ford} alt="" className='h-[6rem]'/> 
                        <span> FORD </span>
                        <span>Transit Custom</span>
                        <span>9 plaza</span>
                </div>

                <div className='bg-[#E9B824] flex flex-col'>
                        <img src={Ford} alt="" className='h-[6rem]'/> 
                        <span className='font-oswald'> FORD Transit Custom</span>
                      
                        <span className='font-abc'>9 plaza</span>
                        <span className='font-oswald'> Desde 100€/Dia </span>
                </div>

        </div>
    </div>
  )
}

export default point