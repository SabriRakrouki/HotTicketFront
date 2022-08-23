import React, { useEffect, useState } from 'react';
import { SliderData } from './SliderData';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CarouselStyle } from './CarouselStyle';
const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const classes = CarouselStyle();
    useEffect(()=>{
        setInterval(nextSlide,5000)
    })
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className={classes.slider}>
           
            <React.Fragment>
                {SliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? classes.slider : classes.slider}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt='travel image' className={classes.image} />
                            )}
                        </div>
                    );
                })}
            </React.Fragment>
        </section>
    );
};

export default ImageSlider;