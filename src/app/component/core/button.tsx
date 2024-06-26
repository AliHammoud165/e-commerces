'use client'
import React, { ReactNode } from 'react';
import { cn } from '../../../../utils/helpers';

interface ButtonProps {
  text: string;
  className?: string; 
  onClick?: () => void; 
  icon?: ReactNode;

}

const Button: React.FC<ButtonProps> = ({ text, className,icon, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={cn('cursor-pointer rounded-lg h-full w-full bg-light-green-gray flex items-center justify-between p-5', className)}
         onClick={handleClick}>
      <p>{text}</p>
      <div>{icon}</div>
    </div>
  );
};

export default Button;
