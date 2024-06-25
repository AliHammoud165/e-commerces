// Button.tsx
'use client'
import Arrow from '@/app/assets/icons/arowe'; 
import React from 'react';
import { cn } from '../../../../utils/helpers';

interface ButtonProps {
  text: string;
  className?: string; // Corrected classname to className
  onClick?: () => void; // onClick handler function
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={cn('cursor-pointer rounded-lg h-full w-full bg-light-green-gray flex items-center justify-between p-5', className)}
         onClick={handleClick}>
      <p>{text}</p>
      <div><Arrow /></div>
    </div>
  );
};

export default Button;
