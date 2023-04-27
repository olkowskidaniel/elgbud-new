import { useState, useRef, useEffect, useCallback } from "react";
import "./slider.styles.scss";

const Slider = ({slides, sliderWidth}) => {
    const images = slides.map((slide) => (slide.images[0]));
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef(null);
       

    const setSlideStyles = (index) => ({
        backgroundImage: `url(${images[index].url})`
    });

    const goToPreviousSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNextSlide = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if(timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            goToNextSlide();
        }, 5000);

        return () => clearTimeout(timerRef.current);
    }, [goToNextSlide]);

    const setSliderTransitionStyle = () => ({
        transform: `translateX(${-(currentIndex * sliderWidth)}px)`
    });

    return(
        <div className="slider-container" style={{width: `${sliderWidth}px`}}>
            <div className="slides-container" style={setSliderTransitionStyle()}>
                {slides.map((_, index) => (<div className="slider-item" key={index} style={setSlideStyles(index)}></div>))}
            </div>
            <div className="arrow left-arrow" onClick={goToPreviousSlide}>❰</div>
            <div className=" arrow right-arrow" onClick={goToNextSlide}>❱</div>
            <div className="slider-dots-container">
                {slides.map((slide, index) => (
                    <div key={index} className="slider-dot" style={index === currentIndex ? {color: '#e3000f'} : null} onClick={() => goToSlide(index)}>●</div>
                ))}
            </div>
        </div>
    )
}

export default Slider;