import React from 'react';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ReasonSection.scss';

function ReasonSection({ sectionData, scrollPosition }) {
    return (
        <section className="reason-section">
            <div className="reason-section-inner">
                <div className="reason-section-content">
                    <div className={sectionData.isEven ? "reason-section-wrapper wrapper-even" : "reason-section-wrapper"}>
                        <span className="reason-section-number-label number-label-large">{sectionData.index}</span>
                        <div className="description-title-wrapper">
                            <h2 className="reason-title heading-two">{sectionData.title}</h2>
                        </div>
                        {sectionData.description.map((paragraph, index) => (
                            <div className="description-paragraph-wrapper" key={`reason-paragraph-${index}`}>
                                <p className="reason-description paragraph">{paragraph}</p>
                            </div>
                        ))}
                    </div>
                    <div className={sectionData.isEven ? "reason-section-images images-even" : "reason-section-images"}>
                        {sectionData.images.map((image, index) => (
                            <div className="image-block" key={`image-block-${index}`}>
                                <div className="image-block-overlay"></div>
                                <div className="image-block-showcase">
                                    <LazyLoadImage
                                        alt={image.imageAlt}
                                        src={image.imageObj.default}
                                        effect="blur"
                                        scrollPosition={scrollPosition}
                                        className="background-image"
                                        height={"100%"}
                                        width={"100%"}
                                    />
                                    {/* <img src={image.imageObj.default} alt={image.imageAlt} className="background-image" /> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default trackWindowScroll(ReasonSection);
