import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsArrowRight, BsArrowUp } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/userSlice';
import './Footer.scss';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    const userState = useSelector(userSelector);

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-primary-links">
                    <ul className="footer-links-list">
                        <li className="footer-links-list-item">
                            <Link to="/dss" className="footer-link-wrapper">
                                <IconContext.Provider value={{color: '#fafafa', size: '50px'}}>
                                    <BsArrowRight className="footer-link-icon"/>
                                </IconContext.Provider>
                                <span className="footer-link-label heading-two">Services</span>
                            </Link>
                        </li>
                        <li className="footer-links-list-item">
                            <Link to="/login" className="footer-link-wrapper">
                                <IconContext.Provider value={{color: '#fafafa', size: '50px'}}>
                                    <BsArrowRight className="footer-link-icon"/>
                                </IconContext.Provider>
                                <span className="footer-link-label heading-two" style={{textTransform: 'capitalize'}}>
                                    {userState.user && Object.keys(userState.user).length !== 0 ? userState.user.role : 'Student'}
                                    {/* Student */}
                                </span>
                            </Link>
                        </li>
                        <li className="footer-links-list-item">
                            <Link to="/contact" className="footer-link-wrapper">
                                <IconContext.Provider value={{color: '#fafafa', size: '50px'}}>
                                    <BsArrowRight className="footer-link-icon"/>
                                </IconContext.Provider>
                                <span className="footer-link-label heading-two">Contact</span>
                            </Link>
                        </li>
                        <li className="footer-links-list-item">
                            <Link to="/questions" className="footer-link-wrapper">
                                <IconContext.Provider value={{color: '#fafafa', size: '50px'}}>
                                    <BsArrowRight className="footer-link-icon"/>
                                </IconContext.Provider>
                                <span className="footer-link-label heading-two">FAQ</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <div className="footer-contact-newsletter">
                        <p className="footer-newsletter-paragraph paragraph">Subscribe to Tudor news</p>
                        <form className="contact-form-newsletter" method="POST">
                            <div className="form-group">
                                <input type="email" id="email-footer" name="email" required autoComplete="off" className="form-group-input"/>
                                <label htmlFor="email" className="form-group-label">Your E-mail Adress</label>
                            </div>
                            <button className="submit-button-newsletter">
                                <IconContext.Provider value={{color: '#fafafa', size: '34px'}}>
                                    <BsArrowRight className="footer-link-icon"/>
                                </IconContext.Provider>
                            </button>
                        </form>
                    </div>
                    <ul className="footer-contact-links">
                        <li className="contact-links-list">
                            <a href="https://www.instagram.com/campustudorvladimirescu/" className="contact-link" target="_blank" rel="noreferrer">
                                <span className="contact-link-label label-medium">Instagram</span>
                            </a>
                        </li>
                        <li className="contact-links-list">
                            <a href="https://www.linkedin.com/school/universitatea-tehnic%C4%83-%E2%80%9Egh.-asachi%E2%80%9D-din-ia%C8%99i/" className="contact-link" target="_blank" rel="noreferrer">
                                <span className="contact-link-label label-medium">Linkedin</span>
                            </a>
                        </li>
                        <li className="contact-links-list">
                            <a href="https://www.facebook.com/TUIasiRO" target="_blank" rel="noreferrer" className="contact-link ">
                                <span className="contact-link-label label-medium">Facebook</span>
                            </a>
                        </li>
                        <li className="contact-links-list">
                            <a href="https://www.tuiasi.ro/" className="contact-link" target="_blank" rel="noreferrer">
                                <span className="contact-link-label label-medium">Tuiasi</span>
                            </a>
                        </li>
                        <li className="contact-links-list scroll-button">
                            <button className="contact-link-button" onClick={scrollToTop}>
                                <IconContext.Provider value={{color: '#fafafa', size: '34px'}}>
                                    <BsArrowUp />
                                </IconContext.Provider>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="footer-license">
                    <span className="footer-license-label label-medium">All rights reserved 2021 &copy; Bejan Tiberiu-Constantin</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
