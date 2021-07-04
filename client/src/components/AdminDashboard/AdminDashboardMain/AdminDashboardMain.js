import React, { useEffect } from 'react';
import AdminDashboardNav from '../AdminDashboardNav/AdminDashboardNav';
import AdminDashboardSearch from '../AdminDashboardSearch/AdminDashboardSearch';
import AdminDashboardPagination from '../AdminDashboardPagination/AdminDashboardPagination';

import { useSelector } from 'react-redux';
import { adminSelector } from '../../../redux/adminSlice';

import './AdminDashboardMain.scss'

function AdminDashboardMain() {

    // SLICE OF STATE
    const adminState = useSelector(adminSelector);
    // RESET SCROLL POS
    const executeScroll = () => window.scrollTo(0, 0); 
    
    useEffect(() => {
        executeScroll();
    }, [])

    return (
        <section className="admin-dashboard-main">
            <div className="admin-dashboard-main-inner">
                <AdminDashboardNav />
                <AdminDashboardSearch />
                { Object.keys(adminState.students).length !== 0 && <AdminDashboardPagination studentsData={adminState.students} /> }
            </div>
        </section>
    )
}

export default AdminDashboardMain;
