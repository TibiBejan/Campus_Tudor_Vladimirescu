import React from 'react';

// COMPONENTS
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
