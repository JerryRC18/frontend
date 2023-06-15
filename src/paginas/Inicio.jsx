import React from 'react'
import Perro from '../components/Perro'
import Part3 from '../components/Part3'
import Part1 from '../components/Part1'
import Perros from '../components/Perros'
import Part4 from '../components/Part4'

const Inicio = () => {
  return (
    <div>
        <div className="bg-[#154360]">
        <Part1/>
        </div>
        <div className="w-full grid grid-cols-2">
        <div className="bg-gray-300">
        <Perro/>
        </div>
        <div className="bg-gray-300">
        <Perros/>
        </div>
        </div>
        
        <div className="grid grid-cols-2">
        <div className="bg-[#154360]">
        <Part3 />
        </div>
        <div className="bg-[#00df9a]">
        {/* Contenido de la segunda columna */}
        </div>
        </div>
        <Part4/>
    </div>
  )
}

export default Inicio
