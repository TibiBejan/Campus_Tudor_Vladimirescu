import React from 'react';
import PersonCard from '../../SharedComponents/PersonCard/PersonCard';
import './ContactPersons.scss';

// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

const cardsData = [
    {
        id: 1,
        name: 'Bogdan BUDEANU',
        jobTitle: 'Director DSS',
        email: 'bogdan.budeanu@staff.tuiasi.ro',
        phone: '0232702429',
        profileImage: ''
    },
    {
        id: 2,
        name: 'Camelia NIȚULESCU',
        jobTitle: 'Director Serviciu Social',
        email: 'camelia.nitulescu@staff.tuiasi.ro',
        phone: '0232702420',
        profileImage: ''
    },
    {
        id: 3,
        name: 'Marius IMBREA',
        jobTitle: 'Director Birou Tehnic',
        email: 'stelian-marius.imbrea@staff.tuiasi.ro',
        phone: '0232702426',
        profileImage: ''
    },
    {
        id: 4,
        name: 'Andrei SĂNDUCU',
        jobTitle: 'Director Birou Financiar',
        email: 'andrei-danut.sanducu@staff.tuiasi.ro',
        phone: '0232702424',
        profileImage: ''
    },

]

function ContactPersons() {
    return (
        <section className="contact-persons">
            <div className="contact-persons-inner">

                <Swiper 
                    slidesPerView={1}
                    breakpoints={{
                        1366: {slidesPerView: 2.35},
                        1024: {slidesPerView: 2},
                        768: {slidesPerView: 1.5},
                        650: {slidesPerView: 1}
                    }}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    speed={1000}
                    className="contact-persons-slider"
                >
                    {cardsData.map(person => (
                        <SwiperSlide key={`person-card-${person.id}`}>
                            <PersonCard cardData={person} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}

export default ContactPersons;
