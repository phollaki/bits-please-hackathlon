import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent({children}) {
  return (
    <Carousel autoPlay>{children}</Carousel>
  )
}

export default CarouselComponent