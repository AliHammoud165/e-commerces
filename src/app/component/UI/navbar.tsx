'use client'
import { MenuIcon } from '@/app/assets/icons/Menu'
import { CartIcon } from '@/app/assets/icons/cart'
import { Logo } from '@/app/assets/icons/logo'
import { ProfileIcon } from '@/app/assets/icons/person'
import React, { useState } from 'react'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu)
  };

  return (
    <div className='h-[100px] w-full flex items-center justify-between'>
      <div className='w-fit'><Logo/></div>
      <div className={`xs:flex  w-[30%] items-center justify-between  hidden`}>
        <div><a href="/">Home</a></div>
        <div><a href="/">Products</a></div>
        <div><a href="/">Contacts</a></div>
      </div>
      <div className='flex xs:w-[10%] w-fit justify-between'>
        <div className='cursor-pointer' ><CartIcon/></div>
        <div className='cursor-pointer' ><ProfileIcon/></div>
        <div className=' cursor-pointer' onClick={toggleMenu}><MenuIcon/></div>
      </div>
      {
  showMenu ? (
    <div onClick={toggleMenu} className="full-screen-overlay fixed top-0 left-0 w-full h-full z-50 bg-[#00000080] xs:hidden flex justify-stat items-start">
          <div className="dropdown-menu  w-80   bg-white shadow-lg rounded-md mt-16">
        <ul className="py-2">
            <li onClick={toggleMenu} className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Home </li>
            <li onClick={toggleMenu} className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Products </li>
            <li onClick={toggleMenu} className="px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer">Contacts</li>
        </ul>
    </div>
    </div>
  ) : null
}
    </div>
  );
};

export { Navbar };
