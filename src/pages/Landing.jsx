import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Hero from '../layout/Landing/Hero'
import Arrivals from '../layout/Landing/Arrivals'
import ProductImage from '../layout/Landing/ProductImage'


export default function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <Arrivals />
      <ProductImage />
      <Footer />
    </div>
  )
}
