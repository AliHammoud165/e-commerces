import { MenuIcon } from '@/app/assets/icons/Menu'
import { CartIcon } from '@/app/assets/icons/cart'
import { Logo } from '@/app/assets/icons/logo'
import { ProfileIcon } from '@/app/assets/icons/person'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[100px] w-full  flex items-center justify-between' >
      <div className=' w-fit '><Logo/></div>
      <div className='flex w-[30%] items-center justify-between'>
        <div><a href="/">Home</a></div>
        <div><a href="/">Products</a></div>
        <div><a href="">Contacts</a></div>
      </div>
      <div className=' flex w-[10%] justify-between'>
        <div className=' cursor-pointer'><CartIcon/></div>
        <div className=' cursor-pointer'><ProfileIcon/></div>
        <div className=' cursor-pointer'><MenuIcon/></div>
      </div>
    </div>
  )
}

export  {Navbar}
