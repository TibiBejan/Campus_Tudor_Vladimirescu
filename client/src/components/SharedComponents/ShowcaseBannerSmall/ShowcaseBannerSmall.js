import React from 'react';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ShowcaseBannerSmall.scss';

function ShowcaseBannerSmall({ bannerData, bannerImage, hallName, scrollPosition }) {
    return (
        <div className="showcase-banner-small">
            <div className="showcase-banner-small-media">
                <LazyLoadImage
                    alt="tuiasi-dss"
                    src={bannerImage}
                    effect="blur"
                    scrollPosition={scrollPosition}
                    className="background-image"
                    height={"100%"}
                    width={"100%"}
                />
                {/* <img src={bannerImage} alt="" className="background-image" /> */}
            </div>
            <div className="showcase-banner-small-content">
                <div className="content-heading-wrapper">
                    <div className="heading-wrapper-line">
                        <h1 className="heading-one">
                            {
                                hallName ? (
                                    <>
                                        <span style={{marginRight: '2rem'}}>Cămin</span>
                                        <span style={{textTransform: 'uppercase'}}>{hallName}</span>
                                    </>
                                ) : `${bannerData.title}`
                            }                            
                        </h1>
                    </div>
                </div>
                <div className="paragraph-wrapper">
                    {bannerData.description?.map((paragraph, index)=> (
                        <p className="paragraph-showcase" key={`banner-description-paragraph-${index}`}>{paragraph}</p>
                    ))}    
                </div>
            </div>
        </div>
    )
}

export default trackWindowScroll(ShowcaseBannerSmall);
