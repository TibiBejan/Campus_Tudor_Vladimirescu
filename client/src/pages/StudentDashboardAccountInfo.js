import React from 'react'

// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StudentDashboardAccount from '../components/StudentDashboard/StudentDashboardAccount/StudentDashboardAccount';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Contul meu"
}

function StudentDashboardAccountInfo() {
    return (
        <>
        <main className="page-content">
            <AuthBanner sectionData={ bannerData }/>    
            <StudentDashboardAccount />
            <StatsSection />
        </main>
        <Footer /> 
    </>
    )
}

export default StudentDashboardAccountInfo
