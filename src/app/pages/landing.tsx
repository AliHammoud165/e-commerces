import React from 'react'
import { Navbar } from '../component/UI/navbar'
import { Hero } from '../component/UI/hero'
import Bestsilling from '../component/UI/bestsilling'
import Aboutus from '../component/UI/aboutus'
import Categories from '../component/UI/categories'
import Footer from '../component/UI/footer'
import LandingLayout from '../layouts/landinglayout'
const Landing = () => {
  return (

    
    <div  >
      <LandingLayout Main={<> <Navbar/>
      <Hero/>
      <Bestsilling/>
      <Aboutus/>
      <Categories/></>}
      Footer={<Footer />}/>

    </div>
  )
}

export  {Landing}
