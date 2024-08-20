import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CarouselData from './CarouselData';
const MainCarousel = () => {
    const items = CarouselData.map((item)=> <img className='cursor-pointer' role='presentation' src= {item.image} 
    style={{ width: item.width, height: item.height, objectFit: 'cover' }} alt = ""/>)
    return(
        <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={100}
    />
    )
}
export default MainCarousel;