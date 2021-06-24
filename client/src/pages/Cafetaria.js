import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import AboutSection from '../components/SharedComponents/AboutSection/AboutSection';
import GallerySection from '../components/SharedComponents/GallerySection/GallerySection';
import FacilityDescriptive from '../components/SharedComponents/FacilityDescriptiveSection/FacilityDescriptive';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall';
import FullWidthMap from '../components/SharedComponents/FullWidthMap/FullWidthMap';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { aboutCafeteria, gallerySlider, gallerySectionData, cafeteriaDescription, mapData } from '../data/CafeteriaData';
import bannerImage from '../assets/images/Cantina/cantina-1-min.jpg';
const bannerData = {
    title: 'Cantina Universității',
    description: ['Deși nu este de departe primul lucru la care te-ai gândi atunci când alegi universitatea la care-ți vei forma viitorul, e important să știi că ai unde mânca o masă caldă și că sunt servicii de calitate. Doar că la TUIASI, aceste servicii excelează, practic poți mânca pârjoale aproape la fel de bune ca cele de acasă la cele mai bune prețuri din oraș.']
}


function Cafetaria() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData} bannerImage={bannerImage}/>
            <main className="page-content">
                <AboutSection sectionData={aboutCafeteria} />
                <GallerySection images={gallerySlider} sectionData={gallerySectionData}/>
                <FacilityDescriptive sectionData={cafeteriaDescription}/>
                <ContactSectionSmall title="Pentru orice fel de sugestii sau nemulțumiri care ar ajuta la îmbunătăţirea serviciilor noastre vă rugăm să ne contactaţi" />
                <FullWidthMap Lat={mapData.lat} Lng={mapData.lng} PopupText={mapData.popupText} />
                <StatsSection/> 
            </main>
            <Footer />
        </>
    )
}

export default Cafetaria;
