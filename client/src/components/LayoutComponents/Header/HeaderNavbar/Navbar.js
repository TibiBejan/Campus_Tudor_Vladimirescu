import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { handleLogout, logoutError, userSelector } from '../../../../redux/userSlice.js';

import './Navbar.scss';


function Navbar({ disabled, toggled, handleMenu, scroll }) {

    const history = useHistory();
    const dispatch = useDispatch();
    // USER SLICE STATE
    const userState = useSelector(userSelector);

    const handleLogOut = () => {
        axios.get("/api/v1/users/logOut").then((response) => {
        
            if(response.status === 200 || response.status === 201) {
                dispatch(handleLogout());
                history.push('/');
            } else {
                dispatch(logoutError('There is an error, please try again'));
            }
        }).catch(err => {
            const { message } = err.response.data;
            dispatch(logoutError(message));
        });
    }

    return (
        <nav className={scroll ? "page-navbar active" : "page-navbar"}>
            <div className={scroll ? "page-navbar-logo active-scrolled" : "page-navbar-logo"}>
                <Link to="/" className="logo-link">
                    <span className={scroll ? "logo-link-label-primary dark-text" : "logo-link-label-primary"}>Tudor</span>
                </Link>
            </div>
            <div className="page-navbar-actions">
                <div className="action-menu-toggler">
                    <button type="button" disabled={disabled} onClick={handleMenu}  className="transparent-button">
                        <span className="transparent-button-label label">{toggled.buttonLabel}</span>
                    </button>
                </div>
                <div className="action-account">
                    {userState.isAuthenticated && userState.user ? (
                        <>
                            <Link 
                                to={userState.user.role === 'admin' ? '/admin' : `/${userState.user.first_name}.${userState.user.last_name}/dashboard` }
                                className="action-account-link"
                            >
                                <span className="action-account-link-label label">Dashboard</span>
                            </Link>
                            <button className="action-account-link" onClick={ handleLogOut }>
                                <span className="action-account-link-label label">Logout</span>
                            </button>
                        </>
                    ): (
                        <>
                            <Link to="/login" className="action-account-link">
                                <span className="action-account-link-label label">Login</span>
                            </Link>
                            <Link to="/register" className="action-account-link">
                                <span className="action-account-link-label label">Register</span>
                            </Link>
                        </>
                    )}
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
