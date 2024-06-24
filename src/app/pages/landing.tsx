import React from 'react'
import { Navbar } from '../component/UI/navbar'
import { Hero } from '../component/UI/hero'
import Card from '../component/core/card'
import Button from '../component/core/button'
import Bestsilling from '../component/UI/bestsilling'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Bestsilling/>
      <div></div>
    </div>
  )
}

export  {Landing}
