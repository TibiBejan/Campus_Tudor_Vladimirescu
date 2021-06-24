import React from 'react';
import YoutubePlayer from '../YouTubePlayer/YouTubePlayer';
import './FacilityDescriptive.scss';

function FacilityDescriptive({ sectionData }) {
    return (
        <section className="facility-descriptive-section">
            <div className="facility-descriptive-section-inner">
                <div className="facility-descriptive-content">
                    {sectionData.paragraphs.map((paragraph, index) => (
                        <div className="facility-paragraph-wrapper" key={`facility-paragarph-${index}`}>
                            <p className="facility-paragraph paragraph">{paragraph}</p>
                        </div>
                    ))}
                </div>
                <div className="facility-descriptive-media">
                    {sectionData.isBackgroundVideo && (
                        <YoutubePlayer videoId={sectionData.backgroundVideoId} />
                    )}

                    {sectionData.isBackgroundImage && (
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <img src={sectionData.backgroundImageObj} alt={sectionData.backgroundImageLabel} className="background-image" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FacilityDescriptive;
