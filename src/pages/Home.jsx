import React from 'react'
//import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import OurPromiseSec from '../components/OurPromiseSec'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Products/>
      <OurPromiseSec/>
    </div>
  )
}

export default Home
