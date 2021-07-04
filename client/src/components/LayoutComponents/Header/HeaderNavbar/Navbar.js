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
                    {userState.isAuthenticated ? (
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
                                {/* <svg viewBox="0 0 504 504">
                                    <g>
                                        <path d="M430.2,329.8c-27.4-27.4-59.6-47.6-95.8-60.1l-7.5-2.6l6.5-4.5c39.2-27,62.5-71.3,62.5-118.7C396,64.6,331.4,0,252,0 S108,64.6,108,144c0,47.3,23.4,91.7,62.5,118.7l6.5,4.5l-7.5,2.6c-36.2,12.5-68.4,32.7-95.8,60.1C27.2,376.5,1,438.2,0,504h32 c2.1-119.5,100-216,220-216s217.8,96.5,220,216h32C503,438.2,476.8,376.5,430.2,329.8z M140,144c0-61.8,50.2-112,112-112 s112,50.2,112,112s-50.2,112-112,112S140,205.8,140,144z"></path>
                                    </g>
                                </svg> */}
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
