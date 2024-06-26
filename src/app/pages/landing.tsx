import React from 'react'
import { Navbar } from '../component/UI/navbar'
import { Hero } from '../component/UI/hero'
import Bestsilling from '../component/UI/bestsilling'
import Aboutus from '../component/UI/aboutus'
import Categories from '../component/UI/categories'
import Footer from '../component/UI/footer'
import LandingLayout from '../layouts/landinglayout'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--myfont',
  weight: '500'
})

const Landing = () => {
  return (
    <div className={`${roboto.variable} font-myfont`}>
      <LandingLayout Main={<>
        <Navbar/>
        <Hero/>
        <Bestsilling/>
        <Aboutus/>
        <Categories/>
      </>} Footer={<Footer />} />
    </div>
  )
}

export { Landing }
