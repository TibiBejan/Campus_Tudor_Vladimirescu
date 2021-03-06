import React from 'react';
import './SportsTeam.scss';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import sportsBaseBasketball from '../../../assets/images/AboutPageImages/baza-sportiva-basketball.jpg';
import sportsBaseFootball from '../../../assets/images/AboutPageImages/baza-sportiva-football.jpg';

function SportsTeam({  scrollPosition }) {
    return (
        <section className="sports-team-section">
            <div className="sports-team-section-inner">
                <div className="sports-team-section-content">
                    <div className="sports-team-left">
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <LazyLoadImage
                                    alt="Sports team basketball game"
                                    src={sportsBaseBasketball}
                                    effect="blur"
                                    scrollPosition={scrollPosition}
                                    className="background-image"
                                    height={"100%"}
                                />
                                {/* <img src={sportsBaseBasketball} alt="Sports team basketball game" className="background-image" /> */}
                            </div>
                        </div>
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <LazyLoadImage
                                    alt="Sports team football court"
                                    src={sportsBaseFootball}
                                    effect="blur"
                                    scrollPosition={scrollPosition}
                                    className="background-image"
                                    height={"100%"}
                                />
                                {/* <img src={sportsBaseFootball} alt="Sports team football court" className="background-image" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="sports-team-right">
                        <span className="dss-team-number-label number-label-large">02</span>
                        <div className="description-title-wrapper">
                            <h1 className="dss-team-title heading-one">Echipa Tuiasi</h1>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="dss-team-description paragraph">Universitatea Tehnic?? din Ia??i are propria echip?? de fotbal care ??n 2014 a fost campioan?? na??ional?? ??i a reprezentat TUIA??I ??i Rom??nia la faza interna??ional?? din Rotterdam, unde s-au desf????urat Jocurile Universitare Europene ??? EUGames 2014, unde au participat 2.830 de sportivi din 280 de centre universitare, reprezent??nd 174 de universit????i din 34 de ????ri din Europa.</p>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="dss-team-description paragraph">Juc??torii au echipamente proprii, ??n culorile alb-albastru care amintesc de tradi??ia Politehnicii Ia??i. ??ncep??nd cu anul 2013, TUIA??I a participat la mai multe competi??ii sportive organizate de Federa??ia Rom??n?? de Minifotbal sau desf????urate sub egida Federa??iei Rom??ne de Fotbal, ob??in??nd rezultate remarcabile.</p>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="dss-team-description paragraph">Din anul 2015, universitatea ??i-a format echip?? proprie, at??t de fete c??t ??i de b??ie??i, pentru baschet, streetball, volei ??i badminton, particip??nd la campionatele na??ionale universitare, organizate de Ministerul Educa??iei Na??ionale ??i Cercet??rii ??tiin??ifice, prin Federa??ia Sportului ??colar ??i Universitar.</p>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default trackWindowScroll(SportsTeam);
