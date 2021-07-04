import React from 'react';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ShowcaseImageSection.scss';

function ShowcaseImageSection({ sectionImage, scrollPosition }) {
    return (
        <section className="showcase-image-section">
            <div className="showcase-image-section-inner">
                <div className="showcase-image-content">
                    <LazyLoadImage
                        alt={sectionImage.alt}
                        src={sectionImage.image.default}
                        effect="blur"
                        scrollPosition={scrollPosition}
                        className="background-image"
                        height={"100%"}
                        width={"100%"}
                    />
                    {/* <img src={sectionImage.image.default} alt={sectionImage.alt} className="background-image" /> */}
                </div>
            </div>
        </section>
    )
}

export default trackWindowScroll(ShowcaseImageSection);

