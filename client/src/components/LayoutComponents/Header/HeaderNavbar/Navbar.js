import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ disabled, toggled, handleMenu, scroll }) {
    return (
        <nav className="page-navbar">
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
                    <Link to="/login" className="action-account-link">
                        <svg viewBox="0 0 504 504">
                            <g>
                                <path d="M430.2,329.8c-27.4-27.4-59.6-47.6-95.8-60.1l-7.5-2.6l6.5-4.5c39.2-27,62.5-71.3,62.5-118.7C396,64.6,331.4,0,252,0 S108,64.6,108,144c0,47.3,23.4,91.7,62.5,118.7l6.5,4.5l-7.5,2.6c-36.2,12.5-68.4,32.7-95.8,60.1C27.2,376.5,1,438.2,0,504h32 c2.1-119.5,100-216,220-216s217.8,96.5,220,216h32C503,438.2,476.8,376.5,430.2,329.8z M140,144c0-61.8,50.2-112,112-112 s112,50.2,112,112s-50.2,112-112,112S140,205.8,140,144z"></path>
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
