import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import ContactPersons from '../components/ContactPageComponents/ContactPersonsSection/ContactPersons';
import ContactFormSection from '../components/ContactPageComponents/ContactFormSection/ContactFormSection';
import MapSection from '../components/ContactPageComponents/MapSection/MapSection';
import FacilitiesPreview from '../components/SharedComponents/FacilitiesPreviewSection/FacilitiesPreview';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA AND MEDI
import bannerImage from '../assets/images/StudentServices/student-services-banner-2.jpg';
const bannerData = {
    title: 'Contactează-ne',
    description: [
        'Direcţia Servicii Studenţeşti reprezintă o structură organizaţională a Universității Tehnice „Gheorghe Asachi” din Iași, subordonată Direcţiei Generale Administrative și Prorectoratului Relația cu Studenții, care coordonează activităţile administrative din Campusul „Tudor Vladimirescu”.',
        'Direcţia Servicii Studenţeşti este coordonată de un director şi, în funcţie de activităţile desfăşurate, are în subordine următoarele structuri organizaţionale: Serviciu Social, Birou Tehnic, Birou Financiar – Contabilitate.'    
    ]
}

function Contact() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData} bannerImage={bannerImage}/>
            <main className="page-content">
                <ContactPersons />
                <ContactFormSection />
                <MapSection />
                <FacilitiesPreview />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Contact;
