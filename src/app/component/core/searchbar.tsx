import { SearchIcon } from '@/app/assets/icons/search'
import React from 'react'

const Searchbar = () => {
  return (
    <div className='flex group flex-row h-full w-full bg-white items-center  justify-between gap-4  p-2 rounded-[10px] cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-green-400'>
      <input className='flex-1 p-3 active:outline-none focus:outline-none' type="text" />
      <div className="" > <SearchIcon/></div>
    </div>
  )
}

export  {Searchbar}
