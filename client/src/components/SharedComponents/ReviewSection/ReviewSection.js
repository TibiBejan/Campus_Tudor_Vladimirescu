import React from 'react';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ReviewsSection.scss';

function ReviewSection({ sectionData, scrollPosition }) {
    return (
        <section className="review-section">
            <div className="review-section-inner">
                <div className="review-section-left">
                    <div className="image-block">
                        <div className="image-block-overlay"></div>
                        <div className="image-block-showcase">
                            <LazyLoadImage
                                alt={sectionData.studentName}
                                src={sectionData.image.default}
                                effect="blur"
                                scrollPosition={scrollPosition}
                                className="background-image"
                                height={"100%"}
                            />
                            {/* <img src={sectionData.image.default} alt={sectionData.studentName} className="background-image" /> */}
                        </div>
                    </div>
                </div>
                <div className="review-section-right">
                    <div className="quote-content">
                        <div className="quote-symbol">
                            <svg width="39" height="34" viewBox="0 0 39 34" fill="none">
                                <path d="M0 34V18.9109L9.4873 0H15.1143L6.93555 18.9109H15.1143V34H0ZM23.8164 34V18.9109L33.3691 0H38.9961L30.8174 18.9109H38.9961V34H23.8164Z" fill="#7d7d7d"></path>
                            </svg>
                        </div>
                        <p className="quote-text paragraph-quote-large">{sectionData.quote}</p>
                        <div className="quote-meta">
                            <span className="quote-name label">{sectionData.studentName}</span>
                            <span className="quote-label label">{sectionData.label}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default trackWindowScroll(ReviewSection);
