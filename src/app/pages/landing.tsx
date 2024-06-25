import React from 'react'
import { Navbar } from '../component/UI/navbar'
import { Hero } from '../component/UI/hero'
import Card from '../component/core/card'
import Button from '../component/core/button'
import Bestsilling from '../component/UI/bestsilling'
import Aboutus from '../component/UI/aboutus'
import Categories from '../component/UI/categories'
import Footer from '../component/UI/footer'

const Landing = () => {
  return (
    <div  >
      <div className='px-4 xs:px-x-25'>
      <Navbar/>
      <Hero/>
      <Bestsilling/>
      <Aboutus/>
      <Categories/>
      </div>
      <div><Footer /></div>
    </div>
  )
}

export  {Landing}
