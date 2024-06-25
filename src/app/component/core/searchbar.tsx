'use client'
import { SearchIcon } from '@/app/assets/icons/search';
import React from 'react';

interface SearchbarProps {
  onClick?: () => void; 
}

const Searchbar: React.FC<SearchbarProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className='flex group flex-row h-full w-full bg-white items-center justify-between gap-4 p-2 rounded-[10px] cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-green-400'
         onClick={handleClick}>
      <input className='flex-1 p-3 active:outline-none focus:outline-none' type="text" />
      <div><SearchIcon /></div>
    </div>
  );
};

export { Searchbar };
