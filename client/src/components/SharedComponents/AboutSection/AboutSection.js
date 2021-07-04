import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/ButtonPrimary';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './AboutSection.scss';

function AboutSection({ sectionData, scrollPosition }) {

    return (
        <section className="about-section">
            <div className="about-section-inner">
                <div className="section-inner-image">
                <LazyLoadImage
                    alt="tuiasi-dss"
                    src={sectionData.backgroundImage.default}
                    effect="blur"
                    scrollPosition={scrollPosition}
                    className="background-image"
                    height={"100%"}
                />
                </div>
                <div className="section-inner-content">
                    <div className="content-heading">
                        <span className="content-heading-subtitle label-medium">{sectionData.subtitle}</span>
                        <h2 className="content-heading-title heading-two">{sectionData.title}</h2>
                    </div>
                    {sectionData.description.map((paragraph, index) => (
                        <p className="paragraph" key={`paragraph-${index}`}>{paragraph}</p>
                    ))}
                    {sectionData.buttonLabel && (
                        <Link to="/dss" className="link-wrapper">
                            <Button textLabel={sectionData.buttonLabel} />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default trackWindowScroll(AboutSection);
