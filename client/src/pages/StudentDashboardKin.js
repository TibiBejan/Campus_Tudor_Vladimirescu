import React from 'react'
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StudentDashboardKins from '../components/StudentDashboard/StudentDashboardKins/StudentDashboardKins';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Persoane de contact"
}

function StudentDashboardKin() {
    return (
        <>
            <InitialTransition />
            <Header />
            <main className="page-content">
                <AuthBanner sectionData={ bannerData }/>    
                <StudentDashboardKins />
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default StudentDashboardKin
