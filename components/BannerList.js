import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Banner from './Banner';


function BannerList({movies}) {
  return ( <Carousel
        autoPlay
        labels={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop
        width={1320}
        interval={5000}
        showArrows={false}>
        {movies?.map(movie=>(
            <Banner key={movie.id} movie={movie}/>
        ))}
        </Carousel>
  )
}

export default BannerList