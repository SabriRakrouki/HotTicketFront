import React from 'react'
import ImageSlider from './ImageSilder';
import { SliderData } from './SliderData';

function Carousel() {
  return <ImageSlider slides={SliderData} />;
}

export default Carousel