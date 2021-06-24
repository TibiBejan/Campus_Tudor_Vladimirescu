import React from 'react';
import PreviewCard from '../../SharedComponents/PreviewCard/PreviewCard';
import './ResidenceHallsSwiper.scss';


// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";


function ResidenceHallsSwiper({ cards }) {
    return (
        <section className="residence-halls">
            <div className="residence-halls-inner">
                <Swiper 
                    slidesPerView={1}
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
                    className="residence-halls-slider"
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <PreviewCard cardData={card} />
                        </SwiperSlide>  
                    ))}

                </Swiper>
            </div>
        </section>
    )
}

export default ResidenceHallsSwiper;
