import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminDashboardNav.scss';

function AdminDashboardNav() {

    return (
        <ul className="dashboard-admin-nav">
            <li className="dashboard-admin-nav-list-item">
                <NavLink 
                    to='/admin' 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Dashboard</span>
                </NavLink>
            </li>
            <li className="dashboard-admin-nav-list-item">
                <NavLink 
                    to='/admin-blog' 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Blog</span>
                </NavLink>
            </li>
            <li className="dashboard-admin-nav-list-item">
                <NavLink 
                    to='/admin-appoitments' 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Appoitments</span>
                </NavLink>
            </li>
            <li className="dashboard-admin-nav-list-item">
                <NavLink 
                    to='/admin-details' 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Update account</span>
                </NavLink>
            </li>
            <li className="dashboard-admin-nav-list-item">
                <NavLink 
                    to='/admin-password' 
                    activeClassName="selected" 
                    className="dashboard-nav-link"
                >
                    <span className="label-medium">Update password</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default AdminDashboardNav;
