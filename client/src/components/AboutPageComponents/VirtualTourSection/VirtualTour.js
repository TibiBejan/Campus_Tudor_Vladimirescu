import React from 'react';
import YouTubePlayer from '../../SharedComponents/YouTubePlayer/YouTubePlayer';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import './VirtualTour.scss';

function VirtualTour() {
    return (
        <section className="virtual-tour-section">
            <div className="virtual-tour-section-inner">
                <div className="virtual-tour-section-content">
                    <div className="virtual-tour-top">
                        <span className="virtual-tour-number-label number-label-large">03</span>
                        <div className="description-title-wrapper">
                            <h1 className="virtual-tour-title heading-one">Simulare 3D</h1>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="virtual-tour-description paragraph">Din ianuarie 2015, Campusul „Tudor Vladimirescu” poate fi vizitat și prin intermediul unei simulări 3D pe calculator, beneficiind și de o machetă la scara de 1/500. De realizarea acestora s-au ocupat doi studenți care au urmat un internship în cadrul prorectoratului responsabil cu probleme studențești. Construcția machetei a durat aproximativ o lună și a implicat multă muncă, nopți nedormite și plăcerea de a face ceva nou pentru universitate din partea studenților.</p>
                        </div>
                    </div>
                    <div className="virtual-tour-bottom">
                        <div className="media-block">
                            <div className="media-block-overlay"></div>
                            <div className="media-block-showcase">
                            <LazyLoadComponent>
                                <YouTubePlayer videoId="ZoZP35IYdiw" />
                            </LazyLoadComponent>
                            </div>
                        </div>
                    </div>   
                </div>  
            </div>
        </section>
    )
}

export default VirtualTour;
