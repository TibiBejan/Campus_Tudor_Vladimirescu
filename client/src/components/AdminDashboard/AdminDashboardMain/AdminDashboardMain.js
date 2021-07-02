import React from 'react';
import AdminDashboardNav from '../AdminDashboardNav/AdminDashboardNav';
import AdminDashboardSearch from '../AdminDashboardSearch/AdminDashboardSearch';
import AdminDashboardPagination from '../AdminDashboardPagination/AdminDashboardPagination';

import { useSelector } from 'react-redux';
import { adminSelector } from '../../../redux/adminSlice';

import './AdminDashboardMain.scss'

function AdminDashboardMain() {

    // SLICE OF STATE
    const adminState = useSelector(adminSelector);

    return (
        <section className="admin-dashboard-main">
            <div className="admin-dashboard-main-inner">
                <AdminDashboardNav />
                <AdminDashboardSearch />
                { adminState.students.rows && <AdminDashboardPagination studentsData={adminState.students.rows} /> }
            </div>
        </section>
    )
}

export default AdminDashboardMain;
