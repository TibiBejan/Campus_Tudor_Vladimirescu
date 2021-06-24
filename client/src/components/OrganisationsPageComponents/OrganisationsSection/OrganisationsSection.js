import React from 'react';
import OrganisationCard from '../../SharedComponents/OrganisationCard/OrganisationCard';
import './OrganisationsSection.scss';

// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

const cardsData = [
    {
        id: 1,
        title: 'Liga Studenților Electroniști',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T11 - parter',
        externalPath: 'http://liga-etc.ro/',
        image: require(`../../../assets/images/Organisations/lsetc.png`)
    },
    {
        id: 2,
        title: 'Asociația Studenților Arhitecți Iași',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T11 - parter',
        externalPath: 'https://asai.ro/',
        image: require(`../../../assets/images/Organisations/asai-min-300x134.png`)
    },
    {
        id: 3,
        title: 'Liga Studenților de la Mecanică',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T10 - parter',
        externalPath: 'http://www.lsm-iasi.ro/',
        image: require(`../../../assets/images/Organisations/lsm-logo-300x300.png`)
    },
    {
        id: 4,
        title: 'Liga Studenților Electrotehniști',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T18 - parter',
        externalPath: 'http://www.lseth.ro/',
        image: require(`../../../assets/images/Organisations/lseth-logo.png`)
    },
    {
        id: 5,
        title: 'Asociația Studenților și Absolvenților Facultății de Construcții',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T9 - parter',
        externalPath: 'http://www.asafci.ro/',
        image: require(`../../../assets/images/Organisations/asafci.png`)
    },
    {
        id: 6,
        title: 'Liga Studenților Facultății de Automatică și Calculatoare',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T19 - parter',
        externalPath: 'http://www.lsaciasi.ro/',
        image: require(`../../../assets/images/Organisations/logo-lsac.png`)
    },
    {
        id: 7,
        title: 'BEST Iași',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T11 - parter',
        externalPath: 'https://bestis.ro/',
        image: require(`../../../assets/images/Organisations/best-logo-300x152.jpg`)
    },
    {
        id: 8,
        title: 'Asociația Studenților Chimiști „CHEMIS”',
        location: 'Facultatea de Inginerie Chimică și Protecția Mediului „Cristofor Simionescu”',
        externalPath: 'http://www.ascchemis.ro/',
        image: require(`../../../assets/images/Organisations/chemis-logo.jpg`)
    },
    {
        id: 9,
        title: 'Asociația Studenţilor și Absolvenților TCM din Iași',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T17 - parter',
        externalPath: 'https://www.facebook.com/astcmiasi',
        image: require(`../../../assets/images/Organisations/astcm-min-300x134.png`)
    },
    {
        id: 10,
        title: 'Teaching Iași',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T11 - parter',
        externalPath: 'https://teach-ing.ro/',
        image: require(`../../../assets/images/Organisations/teaching-min-300x134.png`)
    },
    {
        id: 11,
        title: 'Asociația Studenților și Tinerilor Ingineri Politehniști',
        location: 'Facultatea de Design Industrial și Managementul Afacerilor',
        externalPath: 'https://www.facebook.com/AstipIasi',
        image: require(`../../../assets/images/Organisations/astip-min.jpg`)
    },
    {
        id: 12,
        title: 'Asociația Tinerilor Români din Afara Granițelor (ATRAG) Iași',
        location: 'Campus studențesc „Tudor Vladimirescu”, cămin T11 - parter',
        externalPath: 'https://www.facebook.com/atrag.iasi/',
        image: require(`../../../assets/images/Organisations/atrag.png`)
    },
] 

function OrganisationsSection() {
    return (
        <section className="organisations-section">
            <div className="organisations-section-inner">

                <Swiper 
                    slidesPerView={1}
                    breakpoints={{
                        1500: {slidesPerView: 3},
                        1366: {slidesPerView: 2.35},
                        1024: {slidesPerView: 2},
                        650: {slidesPerView: 1.35}
                    }}
                    spaceBetween={50}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    speed={1000}
                    className="organisations-section-slider"
                >
                    {cardsData.map(card => (
                        <SwiperSlide key={`news-card-${card.id}`}>
                            <OrganisationCard cardData={card} />
                        </SwiperSlide>  
                    ))}

                </Swiper>
                
                {/* {cardsData.map(card => (
                    <OrganisationCard cardData={card} key={`news-card-${card.id}`}/>
                ))} */}

            </div>
    </section>
    )
}

export default OrganisationsSection;
