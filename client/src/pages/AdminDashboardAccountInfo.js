import React from 'react'

// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import AdminDashboardAccount from '../components/AdminDashboard/AdminDashboardAccount/AdminDashboardAccount';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Contul meu"
}

function AdminDashboardAccountInfo() {
    return (
        <>
        <main className="page-content">
            <AuthBanner sectionData={ bannerData } title="Panoul administratorului"/>    
            <AdminDashboardAccount />
            <StatsSection />
        </main>
        <Footer /> 
    </>
    )
}

export default AdminDashboardAccountInfo