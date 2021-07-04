import React, { useState, useRef } from 'react';
import PreviewCard from '../../SharedComponents/PreviewCard/PreviewCard';
import './ResidenceHallsSwiper.scss';
import { IconContext } from 'react-icons';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade  } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import 'swiper/components/effect-fade/effect-fade.scss';
// INSTAL MODULES
SwiperCore.use([Navigation, EffectFade]);


function ResidenceHallsSwiper({ cards }) {

    // STATE
    const [ slidesLength, setSlidesLength ] = useState(null);
    const [ activeIndex, setActiveIndex ] = useState(1);
    const [ disabled, setDisabled ] = useState({
        prevButton: false,
        nextButton: false
    });

    // REF
    const sliderPrevButton = useRef(null);
    const sliderNextButton = useRef(null);

    return (
        <section className="residence-halls">
            <div className="residence-halls-inner">
                <Swiper 
                    slidesPerView={1}
                    navigation={{
                        prevEl: sliderPrevButton.current,
                        nextEl: sliderNextButton.current,
                    }}
                    breakpoints={{
                        1366: {slidesPerView: 3},
                        1024: {slidesPerView: 2},
                        650: {slidesPerView: 1.5}
                    }}
                    spaceBetween={40}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    speed={1000}
                    onInit={() => {
                        setSlidesLength(cards.length);
                        setActiveIndex(1);
                    }}
                    onSlideChange={(Swiper) => {
                        setActiveIndex(Swiper.activeIndex + 1);
                        if(Swiper.activeIndex === 0) {
                            setDisabled({
                                prevButton: true,
                                nextButton: false
                            });
                        } else if(Swiper.activeIndex >= cards.length -1) {
                            setDisabled({
                                prevButton: false,
                                nextButton: true
                            });
                        } else {
                            setDisabled({
                                prevButton: false,
                                nextButton: false
                            });
                        }
                    }}
                    className="residence-halls-slider"
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <PreviewCard cardData={card} />
                        </SwiperSlide>  
                    ))}

                <button disabled={disabled.prevButton} className="showcase-prev-button" ref={sliderPrevButton}>
                    <IconContext.Provider value={{color: '#fafafa', size: '34px'}}>
                        <BsArrowLeft />
                    </IconContext.Provider>
                </button>
                <button disabled={disabled.nextButton} className="showcase-next-button" ref={sliderNextButton}>
                    <IconContext.Provider value={{color: '#fafafa', size: '34px'}}>
                        <BsArrowRight />
                    </IconContext.Provider>
                </button>

                </Swiper>

            </div>
        </section>
    )
}

export default ResidenceHallsSwiper;
