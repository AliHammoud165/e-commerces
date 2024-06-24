import React from 'react';
import { Searchbar } from '../core/searchbar';
import Image from 'next/image';

import image from '../../assets/icons/image.png'; 
const Hero = () => {
  return (
    <div className='h-128 px-10 w-full bg-light-green-gray rounded-3xl flex'>
      <div className='w-1/2 h-fit py-10'>
        <div className='text-6.5xl font-extrabold'>Buy your</div> 
        <div className='text-6.5xl mt-[-30px] font-extrabold'>dream plants</div>
        <div className='flex'>
          <div className='pr-16 text-3.5xl'>
            <div className='font-bold'>50+</div>
            <div>Plant Species</div>
          </div>
          <div className='pl-16 border-black border-l-3 text-3.5xl'>
            <div className='font-bold'>100+</div>
            <div>Customers</div>
          </div>
        </div>
        <div className='h-full w-full pt-12'><Searchbar/></div>
      </div>
      <div></div>
      <div className='flex h-full w-1/2 justify-center items-end'>
        <Image  src={image} height={1000} width={1000} alt={'image'}/>
      </div>
    </div>
  );
};

export { Hero };
