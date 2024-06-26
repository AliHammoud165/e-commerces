import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { cn } from '../../../../utils/helpers';

export interface CardProps {
  type?:"AboutUs"|"Bestselling"
  src: StaticImageData;
  alt: string;
  title?: string;
  price?: string;
  cardClassName?: string;
  imageClassName?: string;
  imageH:number
  imageW:number
}

const Card: React.FC<CardProps> = ({ src, alt, title, price, cardClassName, imageClassName,imageH,imageW, type }) => {
  return (
    <div className='h-full w-full rounded-2xl'>
      <div className='w-full flex items-center justify-center'>
      <div   className={cn( 'relative  flex items-center justify-center',imageClassName)}>
        <Image 
          src={src}
          alt={alt}
          height={imageH} 
          width={imageW} 
          placeholder='blur'          
        />
      </div>
      </div>
      <div className={cn( cardClassName)}>
        {title && <p className='font-bold text-lg'>{title}</p>}
        {price && <p className='text-text-gray text-sm font-bold '>{price}</p>}
      </div>
    </div>
  );
};

export default Card;
