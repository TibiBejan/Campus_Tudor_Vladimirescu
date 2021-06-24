import React from 'react';
import './ShowcaseVideo.scss';

function ShowcaseVideo({ videoSrc }) {
    return (
        <section className="showcase-video-section">
            <div className="showcase-video-section-inner">
                <div className="media-block">
                    <div className="media-block-overlay"></div>
                    <div className="media-block-showcase">
                        <video 
                            autoPlay="autoplay"
                            muted="muted"
                            loop="loop"
                            playsInline
                            preload="auto" 
                            src={videoSrc.default} 
                            type="video/mp4"
                            className="media-background">
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseVideo;
