import React from 'react'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
    </div>
  )
}

export default Home
