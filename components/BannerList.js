import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Banner from './Banner';


function BannerList({movies}) {
  return (
    <div className="flex px-20">
        <Carousel
        autoPlay
        labels={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop
        interval={8000}
        showArrows={false}>
        {movies?.map(movie=>(
            <Banner key={movie.id} movie={movie}/>
        ))}
        </Carousel>
    </div>
  )
}

export default BannerList