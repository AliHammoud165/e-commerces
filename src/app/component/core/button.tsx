import Arrow from '@/app/assets/icons/arowe'
import React from 'react'

const Button = () => {
  return (
    <div className=' cursor-pointer rounded-lg h-full w-full bg-light-green-gray flex items-center  justify-between p-5'>
     <p>See More</p>
     <div><Arrow/></div>
    </div>
  )
}

export default Button
