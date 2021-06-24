import React from 'react';
import { Link } from 'react-router-dom';
import './VerticalOverlay.scss';

function VerticalOverlay({ toggled }) {
    return (
        <div className="vertical-overlay">
            <div className="vertical-overlay-content">
                <ul className={toggled.clicked ? "content-page-links fade-out" : "content-page-links"}>
                    <li className="page-links-list-item">
                        <Link to="/news" className="page-link">
                            <span className="page-link-label label vertical-label">Campus News</span>
                        </Link>
                    </li>
                    <li className="page-links-list-item">
                        <Link to="/about" className="page-link">
                            <span className="page-link-label label vertical-label">About Us</span>
                        </Link>
                    </li>
                </ul>
                <ul className={toggled.clicked ? "content-page-social-links fade-in" : "content-page-social-links"}>
                    <li className="social-links-list-item">
                        <a href="https://www.tuiasi.ro/" target="_blank" rel="noreferrer" className="social-link">
                            <span className="page-link-label label vertical-label">Tuiasi</span>
                        </a>
                    </li>
                    <li className="social-links-list-item">
                        <a href="https://www.facebook.com/TUIasiRO" target="_blank" rel="noreferrer" className="social-link">
                            <span className="page-link-label label vertical-label">Facebook</span>
                        </a>
                    </li>
                    <li className="social-links-list-item">
                        <a href="https://www.instagram.com/campustudorvladimirescu/" target="_blank" rel="noreferrer" className="social-link">
                            <span className="page-link-label label vertical-label">Instagram</span>
                        </a>
                    </li>
                    <li className="social-links-list-item">
                        <a href="https://www.linkedin.com/school/universitatea-tehnic%C4%83-%E2%80%9Egh.-asachi%E2%80%9D-din-ia%C8%99i/" target="_blank" rel="noreferrer" className="social-link">
                            <span className="page-link-label label vertical-label">Linkedin</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="vertical-overlay-link">
                <Link to="/contact" className="link-wrapper">
                    <svg viewBox="0 0 480 480">
                        <g>
                            <path d="M437,374.1h-52.9v-59h73.1c4.7,0,7.7-3.1,7.7-7.8v-6.6c0-116.5-90.8-215.4-206.8-225.2l-9.6-0.8V29.8H259 c5.5,0,8.9-3.3,8.9-8.5c0-4.8-3.6-8.5-8.1-8.5h-38c-4.8,0-8.9,3.9-8.9,8.5c0,4.3,4,8.5,8.1,8.5h10.5v44.7l-9.7,0.7 c-117.2,8.8-209,107.9-209,225.4v6.6c0,4.3,4.2,7.8,9.3,7.8h69.2v59H44.6c-24.1,0-43.8,18.9-43.8,42.2V458c0,4.7,4.6,9.3,9.3,9.3 h461.3c4.3,0,7.7-4.2,7.7-9.3v-41.6C479.2,392.7,460.6,374.1,437,374.1z M30.3,298.1l0.7-11.2c3.3-52.4,26.5-101.6,65.3-138.4 c39.1-37.1,90.1-57.6,143.4-57.6s104.2,20.5,143.4,57.6c38.8,36.8,62,85.9,65.3,138.4l0.7,11.2H30.3z M367,315.1v59H108.2v-59H367z M462.2,450.2L462.2,450.2H17.9v-33.9c0-13.9,12-25.2,26.7-25.2H437c14.3,0,25.2,10.8,25.2,25.2V450.2z"></path>
                        </g>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default VerticalOverlay;
