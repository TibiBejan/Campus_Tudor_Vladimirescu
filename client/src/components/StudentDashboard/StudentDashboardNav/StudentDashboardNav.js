import React from 'react';
import { NavLink } from 'react-router-dom';
// REDUX
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/userSlice';

import './StudentDashboardNav.scss';

function StudentDashboardNav() {

    const userState = useSelector(userSelector);

    return (
        <ul className="dashboard-main-nav">
            <li className="dashboard-nav-list-item">
                <NavLink 
                    to={`/${userState.user.first_name}.${userState.user.last_name}/dashboard`} 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Dashboard</span>
                </NavLink>
            </li>
            <li className="dashboard-nav-list-item">
                <NavLink 
                    to={`/${userState.user.first_name}.${userState.user.last_name}/enrollment`} 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Enrollment</span>
                </NavLink>
            </li>
            <li className="dashboard-nav-list-item">
                <NavLink 
                    to={`/${userState.user.first_name}.${userState.user.last_name}/information`} 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Information</span>
                </NavLink>
            </li>
            <li className="dashboard-nav-list-item">
                <NavLink 
                    to={`/${userState.user.first_name}.${userState.user.last_name}/kins`} 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Student Kins</span>
                </NavLink>
            </li>
            <li className="dashboard-nav-list-item">
                <NavLink 
                    to={`/${userState.user.first_name}.${userState.user.last_name}/update-details`} 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Update account</span>
                </NavLink>
            </li>
            <li className="dashboard-nav-list-item">
                <NavLink 
                    to={`/${userState.user.first_name}.${userState.user.last_name}/update-password`} 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Update password</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default StudentDashboardNav;
