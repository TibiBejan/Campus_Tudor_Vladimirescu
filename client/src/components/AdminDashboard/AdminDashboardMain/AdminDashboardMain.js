import React from 'react';
import AdminDashboardNav from '../AdminDashboardNav/AdminDashboardNav';
import AdminDashboardSearch from '../AdminDashboardSearch/AdminDashboardSearch';

import './AdminDashboardMain.scss'

function AdminDashboardMain() {
    return (
        <section className="admin-dashboard-main">
            <div className="admin-dashboard-main-inner">
                <AdminDashboardNav />
                <AdminDashboardSearch />

            </div>
        </section>
    )
}

export default AdminDashboardMain;
