import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
    
      <Navbar/>
      <Hero/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home
