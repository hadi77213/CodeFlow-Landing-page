import React from 'react'
import { useState } from 'react'

import Navbar from './components/navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className=' flex flex-col  '>

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />

    </div>
  )
}

export default App