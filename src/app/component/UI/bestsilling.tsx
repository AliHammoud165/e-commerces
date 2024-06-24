
import React from 'react';
import Button from '../core/button';
import Card, { CardProps } from '../core/card'; 

const cardsData: CardProps[] = [
  {
    src: '',
    alt: 'Image 1',
    title: 'Natural Plants',
    price: '$1000.00',
  },
  {
    src: '',
    alt: 'Image 2',
    title: 'Exotic Plants',
    price: '$1200.00',
  },
];

const Bestsilling = () => {
  return (
    <div className='pt-28 grid grid-cols-4 gap-4'>
      <div className='col-span-4 md:col-span-1 w-full md:w-mywidth'>
        <p className='font-bold text-3.5xl'>Best Selling Plants</p>
        <p className='text-text-gray text-lg mt-4'>Easiest way to healthy life by buying your favorite plants</p>
        <div className='w-[168px] h-[51px] mt-4'><Button/></div>
      </div>
      {cardsData.map((card, index) => (
        <div key={index} className='col-span-4 md:col-span-1'>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default Bestsilling;
