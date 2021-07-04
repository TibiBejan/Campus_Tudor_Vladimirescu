import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import AboutSection from '../components/SharedComponents/AboutSection/AboutSection';
import DescriptiveShowcase from '../components/DSSPageComponents/DescriptiveShowcaseSection/DescriptiveShowcase';
import ReviewSection from '../components/SharedComponents/ReviewSection/ReviewSection';
import ContactSectionSmall from '../components/SharedComponents/ContactSectionSmall/ContactSectionSmall';
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import { aboutSectionData, reviewData } from '../data/StudentServicesData';
import bannerImage from '../assets/images/StudentServices/student-services-banner-2.jpg';
const bannerData = {
    title: 'Direcţia Servicii Studenţeşti',
    description: ['Dacă ai ajuns aici, înseamnă că ești unul dintre cei 8.000 de studenți ai Universității Tehnice „Gheorghe Asachi” din Iași (TUIAȘI) care beneficiază de un loc de cazare în cele 21 de cămine din Campusul „Tudor Vladimirescu”, care este gestionat și administrat de Direcția Servicii Studențești (DSS).']
}

function StudentServices() {
    return (
        <>
            <InitialTransition />
            <Header />
            <HeaderBannerSmall bannerData={ bannerData } bannerImage={ bannerImage } />
            <main className="page-content">
                <AboutSection sectionData={ aboutSectionData }/>
                <DescriptiveShowcase />
                <ReviewSection sectionData={ reviewData }/>
                <ContactSectionSmall title="Contactează-ne pentru informații suplimentare" />
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default StudentServices;
