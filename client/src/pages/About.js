import React from 'react';

// COMPONENTS
import HeaderBannerSmall from '../components/SharedComponents/ShowcaseBannerSmall/ShowcaseBannerSmall';
import AboutSection from '../components/SharedComponents/AboutSection/AboutSection'
import ReviewSection from '../components/SharedComponents/ReviewSection/ReviewSection';
import TuiasiTeam from '../components/AboutPageComponents/TuiasiTeamSection/TuiasiTeam';
import DssTeam from '../components/AboutPageComponents/DssTeamSection/DssTeam';
import SportsTeam from '../components/AboutPageComponents/SportsTeamSection/SportsTeam';
import VirtualTour from '../components/AboutPageComponents/VirtualTourSection/VirtualTour';
import CommunityProjects from '../components/SharedComponents/CommunityProjectsSection/CommunityProjects';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
import bannerImage from '../assets/images/AboutPageImages/dss-team-left.jpg';
import { aboutSectionData, reviewSectionData } from '../data/AboutPageData';
const bannerData = {
    title: 'Despre Campus',
    description: ['„Tudor Vladimirescu” este unul din cele mai mari campusuri studențești din România, este plin de forfotă, are un spirit aparte şi este centrul vieţii studenţeşti ieşene, fiind recunoscut astfel chiar și de către studenții celorlalte universități din capitala Moldovei.']
}


function About() {
    return (
        <>
            <HeaderBannerSmall bannerData={bannerData} bannerImage={bannerImage}/>
            <main className="page-content">
                <AboutSection sectionData={aboutSectionData}/>
                <ReviewSection sectionData={reviewSectionData} />
                <TuiasiTeam />
                <DssTeam />
                <SportsTeam />
                <VirtualTour />
                <CommunityProjects />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default About;
