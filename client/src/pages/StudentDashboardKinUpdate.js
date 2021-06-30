import React from 'react'

// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StudentDashboardUpdateKin from '../components/StudentDashboard/StudentDashboardUpdateKin/StudentDashboardUpdateKin';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Actualizarea persoanei de contact"
}

function StudentDashboardKinUpdate() {
    return (
        <>
            <main className="page-content">
                <AuthBanner sectionData={ bannerData }/>    
                <StudentDashboardUpdateKin />
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default StudentDashboardKinUpdate
