import React from 'react';
import './ShowcaseImageSection.scss';

function ShowcaseImageSection({ sectionImage }) {
    return (
        <section className="showcase-image-section">
            <div className="showcase-image-section-inner">
                <div className="showcase-image-content">
                    <img src={sectionImage.image.default} alt={sectionImage.alt} className="background-image" />
                </div>
            </div>
        </section>
    )
}

export default ShowcaseImageSection;

