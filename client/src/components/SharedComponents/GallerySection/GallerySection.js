import React, { useState, useRef } from 'react';
import { IconContext } from 'react-icons';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './GallerySection.scss';

// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade  } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import 'swiper/components/effect-fade/effect-fade.scss';
// INSTAL MODULES
SwiperCore.use([Navigation, EffectFade]);

function GallerySection({ images, sectionData }) {

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
        <section className="gallery-section">
            <div className="gallery-section-inner">
                <div className="gallery-heading">
                    <span className="gallery-heading-subtitle label-medium">{sectionData.subtitle}</span>
                    <h2 className="gallery-heading-title heading-two">{sectionData.title}</h2>
                </div>
                <div className="gallery-wrapper">

                    <Swiper 
                        effect="fade"
                        navigation={{
                            prevEl: sliderPrevButton.current,
                            nextEl: sliderNextButton.current,
                        }}
                        slidesPerView={1}
                        spaceBetween={20}
                        grabCursor={true}
                        resistance={true}
                        resistanceRatio={0.5}
                        speed={1000}
                        onInit={() => {
                            setSlidesLength(images.length);
                            setActiveIndex(1);
                        }}
                        onSlideChange={(Swiper) => {
                            setActiveIndex(Swiper.activeIndex + 1);
                            if(Swiper.activeIndex === 0) {
                                setDisabled({
                                    prevButton: true,
                                    nextButton: false
                                });
                            } else if(Swiper.activeIndex >= images.length -1) {
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
                        className="gallery-slider"
                    >

                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="gallery-slide-image">
                                    <img src={image.image.default} alt={image.label} className="background-image" />
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>

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

                    <div className="gallery-slider-navigation">
                        <div className="navigation-wrapper">
                            <span className="navigation-index-label label vertical-label">{activeIndex}</span>
                            <div className="navigation-line">
                                <div className="line-inner" />
                            </div>
                            <span className="navigation-index-label label vertical-label">{slidesLength}</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default GallerySection;
