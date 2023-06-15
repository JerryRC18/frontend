import React from 'react';

const Part3 = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className=' lg:col-span-2 my-4 p-8'>
          <h1 className='md:text-4xl text-[#00df9a] sm:text-3xl text-2xl font-bold py-2'>
            ¿Dónde nos ubicamos?
          </h1>
          <p>Encuentranos en Salamanca, Gto.</p>
          <p>Av. Faja de Oro 1034.</p>
          <p>Junto al hotel Holliday In.</p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>Ver mapa</button>
        </div>
      </div>
    </div>
  );
};

export default Part3;