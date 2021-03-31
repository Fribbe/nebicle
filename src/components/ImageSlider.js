import React, {useState} from 'react';
import leftArrow from '../icons/chevron_left-white-18dp.svg';
import rightArrow from '../icons/chevron_right-white-18dp.svg';

const ImageSlider = ({slides}) => {
    
    const[current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <img src={leftArrow} alt="left" className="left-arrow" onClick={prevSlide}/>
            <img src={rightArrow} alt="right" className="right-arrow" onClick={nextSlide}/>
            {slides.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="slide" className="image"/>)}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider
