import React from 'react';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StudentDashboardPwd from '../components/StudentDashboard/StudentDashboardPwd/StudentDashboardPwd';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Contul meu"
}

function StudentDashboardPwdUpdate() {
    return (
        <>
            <InitialTransition />
            <Header />
            <main className="page-content">
                <AuthBanner sectionData={ bannerData }/>    
                <StudentDashboardPwd />
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default StudentDashboardPwdUpdate;
