import React from 'react';
import { useSelector } from 'react-redux';
import { adminSelector } from '../redux/adminSlice';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import AdminDashboardStudentMain from '../components/AdminDashboard/AdminDashboardStudentMain/AdminDashboardStudentMain';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';

function AdminDashboardStudent() {

    const adminState = useSelector(adminSelector);

    // DATA
    const bannerData = {
        isLink: null,
        subtitle: `Student: ${adminState.selectedUser.first_name} ${adminState.selectedUser.last_name}`
    }

    return (
        <>
            <InitialTransition />
            <Header />
            <main className="page-content">
                <AuthBanner sectionData={ bannerData } title="Panoul administratorului"/>    
                <AdminDashboardStudentMain />
                <StatsSection />
            </main>
            <Footer />
        </>
    )
}

export default AdminDashboardStudent;