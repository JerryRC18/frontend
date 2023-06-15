import React from 'react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

const Part4 = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-gray-300'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full bg-[#154360] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
              <h2 className='text-2xl font-bold text-[#00df9a] text-center py-8'>Plan Básico</h2>
              <p className='text-center text-[#00df9a] text-4xl font-bold'>$149</p>
              <div className="text-center font-medium">
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Baño completo</p>
                </div>
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Cepillado</p>
                </div>
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Collar antipulgas</p>
                </div>
                <div className="flex items-center justify-center">
                    <XIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Desparasitación</p>
                </div>
                <div className="flex items-center justify-center">
                    <XIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Vacuna antirrabica</p>
                </div>
                </div>
                </div>
          <div className='w-full bg-[#00df9a] flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-[#154360] text-center py-8'>Plan Premium</h2>
              <p className='text-center text-[#154360] text-4xl font-bold'>$230</p>
              <div className="text-center font-medium">
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#154360]" />
                    <p className="py-2 border-b text-gray-200 mx-2">Baño completo</p>
                </div>
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#154360]" />
                    <p className="py-2 border-b text-gray-200 mx-2">Cepillado</p>
                </div>
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#154360]" />
                    <p className="py-2 border-b text-gray-200 mx-2">Collar antipulgas</p>
                </div>
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#154360]" />
                    <p className="py-2 border-b text-gray-200 mx-2">Desparasitación</p>
                </div>
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#154360]" />
                    <p className="py-2 border-b text-gray-200 mx-2">Vacuna antirrabica</p>
                </div>
                </div>
                </div>
          <div className='w-full bg-[#154360] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <h2 className='text-2xl font-bold text-[#00df9a] text-center py-8'>Plan Completo</h2>
              <p className='text-center text-[#00df9a] text-4xl font-bold'>$180</p>
              <div className="text-center font-medium">
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Baño completo</p>
                </div>
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Cepillado</p>
                </div>
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Collar antipulgas</p>
                </div>
                <div className="flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Desparasitación</p>
                </div>
                <div className="flex items-center justify-center">
                    <XIcon className="w-6 h-6 text-[#00df9a]" />
                    <p className="py-2 border-b text-gray-300 mx-2">Vacuna antirrabica</p>
                </div>
                </div>
                </div>
      </div>
    </div>
  );
};

export default Part4;