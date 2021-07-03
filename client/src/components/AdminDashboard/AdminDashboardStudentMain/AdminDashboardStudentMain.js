import React from 'react';
import styled from 'styled-components';
import AdminDashboardNav from '../AdminDashboardNav/AdminDashboardNav';
import DashboardStudentAccommodation from '../DashboardStudentAccommodation/DashboardStudentAccommodation';
import DashboardStudentsNeighbors from '../DashboardStudentNeighbors/DashboardStudentsNeighbors';
import DashboardStudentUpdateAccount from '../DashboardStudentUpdateAccount/DashboardStudentUpdateAccount';
import DashboardUpdatePwd from '../DashboardUpdatePwd/DashboardUpdatePwd';
import { useSelector } from 'react-redux';
import { adminSelector } from '../../../redux/adminSlice';

import './AdminDashboardStudentMain.scss';

const AdminWrapperBlock = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 7.5rem;

    @media screen and (max-width: 1366px) {
        grid-template-columns: 1fr;
    }
`;

function AdminDashboardStudentMain() {

    // SLICE OF STATE
    const adminState = useSelector(adminSelector);

    return (
        <section className="admin-dashboard-student-main">
            <div className="admin-dashboard-student-main-inner">
                <AdminDashboardNav />
                { adminState ? <DashboardStudentAccommodation /> : <p>Loading...</p> }
                { adminState ? <DashboardStudentsNeighbors /> : <p>Loading...</p>}
                { adminState ? 
                    <AdminWrapperBlock>
                        <DashboardStudentUpdateAccount /> 
                        <DashboardUpdatePwd />
                    </AdminWrapperBlock> : <p>Loading...</p>
                }
            </div>
        </section>
    )
}

export default AdminDashboardStudentMain;
