import React from 'react';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ShowcaseSection.scss';

function ShowcaseSection({ sectionData, scrollPosition }) {
    return (
        <section className="showcase-section">
            <div className="showcase-section-inner">
                <div className="showcase-section-content">
                    <div className="content-description">
                        
                        <div className="content-description-wrapper">
                            <div className="description-title-wrapper">
                                <h1 className="description-title heading-one">{sectionData.contentBlock.title}</h1>
                            </div>
                            {sectionData.contentBlock.topParagraphs.map((paragraph, index) => (
                                <div className="description-paragraph-wrapper" key={`description-paragraph-${index}`}>
                                    <p className="description-paragraph paragraph">{paragraph}</p>
                                </div>
                            ))}
                           
                        </div>

                    </div>
                    <div className="content-images">

                        {sectionData.imagesBlock.topImages.map((image, index) => (
                            <div className="image-block" key={`top-image-block-${index}`}>
                                <div className="image-block-overlay"></div>
                                <div className="image-block-showcase">
                                    <LazyLoadImage
                                        alt={image.topImageAlt}
                                        src={image.topImage.default}
                                        effect="blur"
                                        scrollPosition={scrollPosition}
                                        className="background-image"
                                        visibleByDefault={"true"}
                                        height={"100%"}
                                        width={"100%"}
                                    />
                                    {/* <img src={image.topImage.default} alt={image.topImageAlt} className="background-image" /> */}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="showcase-section-bottom-content">
                    
                    <div className="content-images">

                        {sectionData.imagesBlock.bottomImages?.map((image, index) => (
                            <div className="image-block" key={`top-image-block-${index}`}>
                                <div className="image-block-overlay"></div>
                                <div className="image-block-showcase">
                                    <LazyLoadImage
                                        alt={image.bottomImageAlt}
                                        src={image.bottomImage.default}
                                        effect="blur"
                                        scrollPosition={scrollPosition}
                                        className="background-image"
                                        visibleByDefault={"true"}
                                        height={"100%"}
                                        width={"100%"}
                                    />
                                    {/* <img src={image.bottomImage.default} alt={image.bottomImageAlt} className="background-image" /> */}
                                </div>
                            </div>
                        ))}

                    </div>
                    
                    <div className="content-description">
                        
                        <div className="content-description-wrapper">

                            {sectionData.contentBlock.bottomParagraphs.map((paragraph, index) => (
                                <div className="description-paragraph-wrapper" key={`description-paragraph-${index}`}>
                                    <p className="description-paragraph paragraph">{paragraph}</p>
                                </div>
                            ))}
                           
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default trackWindowScroll(ShowcaseSection);
