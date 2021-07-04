import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { accommodationSelector } from '../../../redux/accommodationSlice';
import { IconContext } from 'react-icons';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import NeighborCard from '../../SharedComponents/NeighborCard/NeighborCard';
import EmptyNeighbordCard from '../../SharedComponents/EmptyNeighborCard/EmptyNeighbordCard';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './StudentDashboardAccommodate.scss';

// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade  } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import 'swiper/components/effect-fade/effect-fade.scss';
// INSTAL MODULES
SwiperCore.use([Navigation, EffectFade]);

function StudentDashboardAccommodate({scrollPosition}) {

    // SLICE OF STATE
    const accommodationState = useSelector(accommodationSelector);
    const { student, neighbors } = accommodationState.accommodation;
    const roomNeighbors = neighbors.filter(neighbor => neighbor.email !== student.email);

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

    const hallImage = require(`../../../assets/images/ResidenceHalls/campus-${student.hallId}.jpg`).default;

    return (
        <section className="dashboard-accommodate">
            <div className="dashboard-accommodate-inner">
                <StudentDashboardNav />
                <div className="dashboard-accommodate-cards">
                    <div className="showcase-card">
                        <h3 className="showcase-card-title heading-three">Bine ai venit, {`${student.last_name} ${student.first_name}`}</h3>
                        <p className="showcase-card-description paragraph">
                            Pe baza informatiilor furnizate in cele 3 formulare de inscriere, ai fost repartizat cu success in campusul Tudor Vladimirescu, in calitate de student al universitatii <span className="secondary-label">{student.Enrollment.university.split(' ').slice(1).join(' ')}</span>. Ai fost cazat in caminul <span className="secondary-label">T{student.hallId}</span>, in camera cu numarul <span className="secondary-label">{student.HallRoom.room_number}</span> situata la <span className="secondary-label">{student.HallRoom.room_floor === 0 ? "parter" : `etajul ${student.HallRoom.room_floor}`}</span>.
                        </p>
                        <p className="showcase-card-description paragraph">
                            De asemenea, pe aceasta pagina poti vizualiza caminul in care ai fost repartizat, administratorul precum si presenditele caminului, dar si viitorii colegi de camera.
                        </p>
                    </div>
                    <Link to={`/residence-halls/${student.Hall.hall_name}`} className="hall-card-wrapper">
                        <div className="hall-card">
                            <div className="hall-card-background">
                                {/* <img src={ hallImage } alt={`Camin T${student.hallId}`} className="background-image" /> */}
                                <LazyLoadImage
                                    alt={`Camin T${student.hallId}`}
                                    src={ hallImage }
                                    effect="blur"
                                    scrollPosition={scrollPosition}
                                    className="background-image"
                                    // visibleByDefault={"true"}
                                    height={"100%"}
                                    width={"100%"}
                                />
                            </div>
                            <div className="hall-card-content">
                                <h4 className="hall-card-title heading-four">Camin T{student.hallId}</h4>
                                <div className="hall-card-content-hovered">
                                    <span className="label">Studenti: {student.Hall.students_number}</span>
                                    <span className="label">Numar de camere: {student.Hall.rooms_number}</span>
                                    <span className="label">Studenti in camera: {student.Hall.student_per_room}</span>
                                    <span className="label">Media necesara: {student.Hall.min_grade}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <h3 className="showcase-card-title heading-three">Viitori colegi</h3>
                <Swiper 
                    slidesPerView={1}
                    navigation={{
                        prevEl: sliderPrevButton.current,
                        nextEl: sliderNextButton.current,
                    }}
                    breakpoints={{
                        1366: {slidesPerView: 2.5},
                        1250: {slidesPerView: 2},
                        768: {slidesPerView: 1.5},
                        767: {slidesPerView: 1}
                    }}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    spaceBetween={50}
                    speed={1000}
                    onInit={() => {
                        setSlidesLength(roomNeighbors.length);
                        setActiveIndex(1);
                    }}
                    onSlideChange={(Swiper) => {
                        setActiveIndex(Swiper.activeIndex + 1);
                        if(Swiper.activeIndex === 0) {
                            setDisabled({
                                prevButton: true,
                                nextButton: false
                            });
                        } else if(Swiper.activeIndex >= roomNeighbors.length -1) {
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
                    className="dashboard-accommodate-slider"
                >
                    {roomNeighbors.length === 0 && (
                        <SwiperSlide>
                            <EmptyNeighbordCard message="In acest moment, sunteti singurul student cazat in aceasta camera" />
                        </SwiperSlide>
                    )}
                    {roomNeighbors.map(neighbor => (
                        <SwiperSlide key={`person-card-${neighbor.email}`}>
                            <NeighborCard cardData={neighbor} />
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

export default trackWindowScroll(StudentDashboardAccommodate);
