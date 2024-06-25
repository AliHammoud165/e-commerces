import React from 'react';
import { Searchbar } from '../core/searchbar';
import Image from 'next/image';

import image from '../../../../public/assets/image/image.png'; 
const Hero = () => {
  return (
    <div className='h-128 px-4 xs:px-10 w-full bg-light-green-gray rounded-3xl flex'>
      <div className='w-full xs:w-1/2 h-fit py-10'>
        <div className=' xs:text-6.5xl font-extrabold  '>Buy your</div> 
        <div className=' xs:text-6.5xl xs:mt-[-30px] font-extrabold '>dream plants</div>
        <div className='flex xs:pt-0 pt-4'>
          <div className='pr-16 xs:text-3.5xl '>
            <div className='font-bold'>50+</div>
            <div>Plant Species</div>
          </div>
          <div className='pl-16 border-black border-l-3 xs:text-3.5xl'>
            <div className='font-bold'>100+</div>
            <div>Customers</div>
          </div>
        </div>
        <div className='h-full w-full pt-12'><Searchbar/></div>
      </div>
      <div></div>
      <div className=' h-full w-1/2 justify-center items-end xs:flex hidden'>
        <Image  src={image} height={1000} width={1000} alt={'image'}/>
      </div>
    </div>
  );
};

export { Hero };
