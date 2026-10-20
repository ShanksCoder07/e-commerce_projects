import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Product from './components/Products/Products'
import Productdetails from './components/Products/Productdetails'
import Material1 from './components/Materials/Material1'
import Material2 from './components/Materials/Material2'
import Review from './components/Materials/Review'
import Footer from './components/Footer/Footer'
import Cpyright from './components/Footer/Cpyright'
import Cartdetail from './components/Navbar/Cartdetail'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Product />
            <Material1 />
            <Material2 />
            <Review />
            <Footer />
            <Cpyright />
          </>
        }
        />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path = "/cart" element={<Cartdetail />}></Route>
      </Routes>

    </div>
  )
}

export default App