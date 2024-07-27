import React from 'react'
import tshirt from "/src/data/tshirt.json"
import Carousel from '../../components/Carousel'
import Button from '../../components/Button'

export default function Carousel2() {
  return (
    <section className="ml-mobile lg:ml-desktop mt-16">
            <h2>Tshirts</h2>

      <Carousel 
    data= {tshirt}
    />
      <div className="w-full flex justify-center lg:justify-start mt-10 lg:mt-5">
        <Button style="flatButton" text="Discover New Arrivals" />
      </div>
    </section>

  )
}
