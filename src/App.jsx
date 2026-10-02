import React, { useState } from 'react'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Product from './components/Products/Products'
import Material1 from './components/Materials/Material1'
import Material2 from './components/Materials/Material2'
import Material3 from './components/Materials/Material3'
import Footer from './components/Footer/Footer'
import Cpyright from './components/Footer/Cpyright'

const App = () => {
    
    return (
    <div>
   
     <Hero />
     <Features />
     <Product />
     <Material1 />
     <Material2 />
     <Material3/>
     <Footer />
      <Cpyright />
    </div>
  )
}

export default App