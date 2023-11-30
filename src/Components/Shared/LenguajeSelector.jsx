import React from 'react'
import ES from '../../assets/es.png'
import EN from '../../assets/ing.png'

function LenguajeSelector() {
    return (
        <div className="flex items-center space-x-2">
         
          <button className="text-white border border-white p-1 rounded"><img src={ES} alt="" className='h-5' /></button>
          <button className="text-white border border-white p-1 rounded"><img src={EN} alt=""  className='h-5'/></button>
        </div>
  )
}

export default LenguajeSelector