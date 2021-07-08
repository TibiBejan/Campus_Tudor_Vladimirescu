import React from 'react';
import './DssTeam.scss';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import DssTeamImage_left from '../../../assets/images/AboutPageImages/dss-team-left.jpg';
import DssTeamImage_right from '../../../assets/images/AboutPageImages/dss-team-right.jpg';


function DssTeam({  scrollPosition }) {
    return (
        <section className="dss-team-section">
            <div className="dss-team-section-inner">
                <div className="dss-team-section-content">
                    <div className="dss-team-left">
                        <span className="dss-team-number-label number-label-large">01</span>
                        <div className="description-title-wrapper">
                            <h1 className="dss-team-title heading-one">Echipa DSS</h1>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="dss-team-description paragraph">Direcția Servicii Studențești are grijă ca studenții să aibă tot confortul în campus și încurajează desfășurarea a tot felul de acțiuni în afara orelor de curs. Astfel, în fiecare an, în luna aprilie a fost organizată Ziua Curățeniei în campus, prilej cu care peste 200 de studenți s-au implicat într-o acțiune de ecologizare.</p>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="dss-team-description paragraph">În fiecare an, la începutul lunii septembrie, peste 200 de studenți ai Universității Tehnice vin mai devreme în campus pentru a vărui și amenaja căminele în care urmează să locuiască alături de colegii lor. Timp de o săptămână, cot la cot cu angajații DSS, aceștia lucrează în fiecare dintre cămine, beneficiind de cazare gratuită în acea perioadă, dar și de o reducere a tarifului de cămin.</p>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="dss-team-description paragraph">De asemenea, studenții TUIAȘI, sub îndrumarea conducerii DSS, participă în fiecare an la Marșul Absolvenților, asigurându-se că Universitatea Tehnică este cel mai bine reprezentată. Grupul de la TUIAȘI se remarcă în fiecare an, fiind cel mai bine dispus și cu cele mai inedite sloganuri.</p>
                        </div>
                    </div>
                    <div className="dss-team-right">
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <LazyLoadImage
                                    alt="tuiasi-dss"
                                    src={DssTeamImage_left}
                                    effect="blur"
                                    scrollPosition={scrollPosition}
                                    className="background-image"
                                    visibleByDefault={"true"}
                                    height={"120%"}
                                    width={"120%"}
                                />
                            </div>
                        </div>
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <LazyLoadImage
                                    alt="tuiasi-dss"
                                    src={DssTeamImage_right}
                                    effect="blur"
                                    scrollPosition={scrollPosition}
                                    className="background-image"
                                    height={"100%"}
                                />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default trackWindowScroll(DssTeam);
