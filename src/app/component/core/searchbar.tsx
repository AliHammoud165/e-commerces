'use client'
import { SearchIcon } from '../../../../public/assets/icons/search';
import React, { ReactNode } from 'react';

interface SearchbarProps {
  onClick?: () => void;
  icon?: ReactNode;
  placeholder?:string
}

const Searchbar: React.FC<SearchbarProps> = ({ onClick,placeholder,icon }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className='flex group flex-row h-full w-full bg-white items-center justify-between gap-4 p-2 rounded-[10px] cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-green-400'
         onClick={handleClick}>
      <input className='flex-1 p-3 active:outline-none focus:outline-none' placeholder={placeholder} type="text" />
      <div>{icon}</div>
    </div>
  );
};

export { Searchbar };
