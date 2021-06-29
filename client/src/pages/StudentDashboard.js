import React from 'react'

// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StudentDashboardMain from '../components/StudentDashboard/StudentDashboardMain/StudentDashboardMain';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Informatii general si repartizare"
}

function Dashboard() {
    return (
        <>
            <main className="page-content">
                <AuthBanner sectionData={ bannerData }/>    
                <StudentDashboardMain />
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default Dashboard
