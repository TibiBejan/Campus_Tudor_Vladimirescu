import React from 'react';
import { Link } from 'react-router-dom';
import notFoundSvg from '../../../assets/images/404.svg';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ErrorBanner.scss';    

function ErrorBanner({scrollPosition}) {
    return (
        <div className="error-banner">
            <div className="error-banner-content">
                <h2 className="heading-two">Oops.</h2>
                <p className="paragraph-showcase">The page you are trying to find does not exist!</p>
                <p className="paragraph-showcase">
                    Go back to
                    <Link to="/" className="error-banner-link">
                        <span className="label">homepage</span>
                    </Link>
                    or
                    <Link to="/contact" className="error-banner-link">
                        <span className="label">contact us</span>
                    </Link>
                    about the problem.
                </p>
                <div className="error-banner-illustration">
                    {/* <img src={notFoundSvg} alt="404 illustration" className="background-image"/> */}
                    <LazyLoadImage
                        alt="404 illustration"
                        src={notFoundSvg}
                        effect="blur"
                        scrollPosition={scrollPosition}
                        className="background-image"
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default trackWindowScroll(ErrorBanner);
