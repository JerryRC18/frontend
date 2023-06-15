import React from 'react';

const Part1 = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[70%] mt-[-3%] w-full h-screen text-left flex flex-col justify-center ml-[10%]'>
        <p className='text-[#00df9a] text-6xl font-bold '>
          ELLOS TE AMAN
        </p>
        <h1 className='md:text-5xl sm:text-4xl text-xl font-bold md:py-6'>
          CUIDALOS
        </h1>
        <div className='flex justify-start items-left'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Una visita al veterinario cada 3 meses.
          </p>
          <div
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop>
            </div>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-300'>Ayuda a tu mascota a mantenerse fuerte y sana.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>Agenda una cita</button>
      </div>
    </div>
  );
};

export default Part1;