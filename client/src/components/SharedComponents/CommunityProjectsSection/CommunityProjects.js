import React from 'react'
import Marquee from '../../LayoutComponents/Marquee/Marquee';
import PreviewCard from '../PreviewCard/PreviewCard';
import './CommunityProjects.scss';

// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

const communityProjectsCards = [
    {
        label: 'Proiectele comunitatii',
        title: 'Revitalizarea zonei verzi dintre căminele T3 și T4',
        image: require(`../../../assets/images/MenuCardsImages/parcela-t3-t4-13-min.jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: '„Centrul civic” al campusului: un amfiteatru în aer liber',
        image: require(`../../../assets/images/MenuCardsImages/parc-cezar-oprisan-5.jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: 'Chipul lui Gheorghe Asachi creat de studenți',
        image: require(`../../../assets/images/MenuCardsImages/amfiteatru-t3-9-min.jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: 'Centre de consiliere, de învățare și săli de lectură moderne',
        image: require(`../../../assets/images/MenuCardsImages/sali-lectura-00005 (1).jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: 'Cea mai tare cameră de cămin primește cazare gratuită',
        image: require(`../../../assets/images/MenuCardsImages/cea-mai-tare-camera-de-camin-6-min.jpg`)
    },
    {
        label: 'Proiectele comunitatii',
        title: 'Sala de lectură dintre căminele T3 și T4',
        image: require(`../../../assets/images/MenuCardsImages/amfiteatru-t3-t4-1-min.jpg`)
    },
]

function CommunityProjects() {
    return (
        <section className="community-projects">
            <div className="community-projects-inner">
                <Marquee textLabel="Proiectele Comunitatii" classes="community-projects-marquee"/>
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
                    className="page-menu-showcase-slider"
                >
                    {communityProjectsCards.map((card, index) => (
                        <SwiperSlide key={index}>
                        <PreviewCard cardData={card} />
                        </SwiperSlide>  
                    ))}

                </Swiper>
            </div>
        </section>
    )
}

export default CommunityProjects;
