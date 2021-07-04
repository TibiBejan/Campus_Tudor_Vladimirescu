import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StudentDasboardEnrollSuccess from '../components/StudentDashboard/StudentDashboardEnrollSuccess/StudentDasboardEnrollSuccess';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Obtine cazare in campus"
}

function StudentDashboardEnrollmentConfirm() {
    return (
        <>
            <InitialTransition/>
            <Header />
            <main className="page-content">
                <AuthBanner sectionData={ bannerData }/>    
                <StudentDasboardEnrollSuccess />
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default StudentDashboardEnrollmentConfirm;
