import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import './FacilitiesSection.scss';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade  } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import 'swiper/components/effect-fade/effect-fade.scss';
// INSTAL MODULES
SwiperCore.use([Navigation, EffectFade]);


const facilitiesData = [
    {
        id: 1,
        path: '/cafeteria',
        title: "Locul in care puteți alege mese gustoase",
        description: "Cantina Universității Tehnice „Gheorghe Asachi” din Iași a fost inaugurată pe 9 mai 2011, în urma unui amplu proiect care a constat în refuncționalizarea și dotarea acesteia. La cantină pot lua masa în același timp 200 de studenți și estimăm că într-o zi de lucru de la ora 12.00 la 19.00 vin aproximativ 1.000 de persoane.",
        image: require(`../../../assets/images/Cantina/cantina-uti-foto-3-min.jpg`),
    },
    {
        id: 2,
        path: '/sports-base',
        title: "Îi încurajăm pe studenti să ducă o viață sănătoasă",
        description: "Universitatea Tehnică „Gheorghe Asachi” din Iași încurajează o viață sănătoasă prin sport, motiv pentru care pune la dispoziția studenților săi o sală de sport dotată cu toate utilitățile. Baza sportivă din campusul studențesc „Tudor Vladimirescu” este formată din 6 terenuri de sport în aer liber și 2 săli de sport.",
        image: require(`../../../assets/images/BazaSportiva/baza-sportiva-00002.jpg`),
    },
    {
        id: 3,
        path: '/health-security',
        title: "Asigurăm programe de dezvoltare personală si profesională",
        description: "Studenții interesați de obținerea performanțelor personale și profesionale, precum și de programe de voluntariat recunoscute și acreditate, sunt invitați să se înscrie în baza de date a centrului care urmează să-și lanseze activitatea.",
        image: require(`../../../assets/images/CentruConsiliere/international.jpg`),
    }
]

function FacilitiesSection({scrollPosition}) {

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
        <section className="facilities-section">
            <div className="facilities-section-inner">


                <Swiper 
                    navigation={{
                        prevEl: sliderPrevButton.current,
                        nextEl: sliderNextButton.current,
                    }}
                    slidesPerView={1}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    speed={1000}
                    onInit={() => {
                        setSlidesLength(facilitiesData.length);
                        setActiveIndex(1);
                    }}
                    onSlideChange={(Swiper) => {
                        setActiveIndex(Swiper.activeIndex + 1);
                        if(Swiper.activeIndex === 0) {
                            setDisabled({
                                prevButton: true,
                                nextButton: false
                            });
                        } else if(Swiper.activeIndex >= facilitiesData.length -1) {
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
                    className="facilities-slider"
                >
                    {facilitiesData.map(facility => (
                        <SwiperSlide key={`facility-card-${facility.id}`}>
                            <div className="facilities-slide">
                                <Link to={facility.path} className="facilities-slide-link-wrapper">
                                    <div className="slide-inner-content">
                                        <div className="content-heading">
                                            <h2 className="content-heading-title heading-two">{facility.title}</h2>
                                        </div>
                                        <div className="content-paragraph">
                                            <p className="content-paragraph-description paragraph">{facility.description}</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="facilities-slide-showcase">
                                    <div className="showcase-background">
                                        <div className="showcase-background-overlay"></div>
                                        <div className="showcase-background-media">
                                            <LazyLoadImage
                                                alt={facility.title}
                                                src={facility.image.default}
                                                effect="blur"
                                                scrollPosition={scrollPosition}
                                                className="background-image"
                                                height={"100%"}
                                                width={"100%"}
                                            />
                                            {/* <img src={facility.image.default} alt={facility.title} className="background-image" /> */}
                                        </div>
                                    </div>
                                </div>
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
                    
            </div>
        </section>
    )
}

export default trackWindowScroll(FacilitiesSection)
