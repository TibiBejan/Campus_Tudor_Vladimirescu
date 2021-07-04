import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import ShowcaseBanner from '../components/SharedComponents/ShowcaseBanner/ShowcaseBanner';
import AboutSection from '../components/SharedComponents/AboutSection/AboutSection';
import FacilitiesSection from '../components/HomepageComponents/FacilitiesSection/FacilitiesSection';
import DescriptiveSection from '../components/HomepageComponents/DescriptiveSection/DescriptiveSection';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA AND MEDIA
import { aboutDss, aboutAccommodation } from '../data/HomepageData';

function Index() {

    return (
        <>
            <InitialTransition />
            <Header />
            <ShowcaseBanner/>
            <main className="page-content">
                <AboutSection sectionData={ aboutDss }/>
                <FacilitiesSection />
                <AboutSection sectionData={ aboutAccommodation } />
                <DescriptiveSection />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default Index;
