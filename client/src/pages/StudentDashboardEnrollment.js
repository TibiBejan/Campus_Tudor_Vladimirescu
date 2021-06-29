import React from 'react'

// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Inrolarea studentilor"
}

function StudentDashboardEnrollment() {
    return (
        <>
            <main className="page-content">
                <AuthBanner sectionData={ bannerData }/>    
            
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default StudentDashboardEnrollment;
