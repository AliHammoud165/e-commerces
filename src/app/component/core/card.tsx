// Card.tsx

import React from 'react';
import Image from 'next/image';

export interface CardProps {
  src: string;
  alt: string;
  title?: string;
  price?: string;
}

const Card: React.FC<CardProps> = ({ src, alt, title, price }) => {
  return (
    <div className='h-full w-full rounded-2xl'>
      <div className='relative w-full aspect-w-16 aspect-h-9'>
        <Image
          src={src}
          alt={alt}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>
      <div className='p-4'>
        {title && <p className='font-bold text-lg'>{title}</p>}
        {price && <p className='text-text-gray text-sm'>{price}</p>}
      </div>
    </div>
  );
};

export default Card;
