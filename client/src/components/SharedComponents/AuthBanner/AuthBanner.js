import React from 'react';
import { Link } from 'react-router-dom';
import './AuthBanner.scss';

function AuthBanner({ sectionData }) {
    return (
        <section className="auth-banner">
            <div className="auth-banner-content">
                <div className="content-heading-wrapper">
                    <h1 className="content-heading-title heading-one">Portalul utilizatorului</h1>
                </div>
                <div className="content-subtitle-wrapper">
                    <h3 className="content-subtitle heading-three">{sectionData.subtitle}</h3>
                    {sectionData.isLink && 
                        <Link to={sectionData.path} className="content-link-wrapper">
                            <span className="content-link-label label-large">{sectionData.pathLabel}</span>
                        </Link>
                    }
                </div>
            </div>
        </section>
    )
}

export default AuthBanner;