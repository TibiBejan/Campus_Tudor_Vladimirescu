import React from 'react';
import './SportsTeam.scss';

import sportsBaseBasketball from '../../../assets/images/AboutPageImages/baza-sportiva-basketball.jpg';
import sportsBaseFootball from '../../../assets/images/AboutPageImages/baza-sportiva-football.jpg';

function SportsTeam() {
    return (
        <section className="sports-team-section">
            <div className="sports-team-section-inner">
                <div className="sports-team-section-content">
                    <div className="sports-team-left">
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <img src={sportsBaseBasketball} alt="Sports team basketball game" className="background-image" />
                            </div>
                        </div>
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <img src={sportsBaseFootball} alt="Sports team football court" className="background-image" />
                            </div>
                        </div>
                    </div>
                    <div className="sports-team-right">
                        <span className="dss-team-number-label number-label-large">02</span>
                        <div className="description-title-wrapper">
                            <h1 className="dss-team-title heading-one">Echipa Tuiasi</h1>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="dss-team-description paragraph">Universitatea Tehnică din Iași are propria echipă de fotbal care în 2014 a fost campioană națională și a reprezentat TUIAȘI și România la faza internațională din Rotterdam, unde s-au desfășurat Jocurile Universitare Europene – EUGames 2014, unde au participat 2.830 de sportivi din 280 de centre universitare, reprezentând 174 de universități din 34 de țări din Europa.</p>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="dss-team-description paragraph">Jucătorii au echipamente proprii, în culorile alb-albastru care amintesc de tradiția Politehnicii Iași. Începând cu anul 2013, TUIAȘI a participat la mai multe competiţii sportive organizate de Federaţia Română de Minifotbal sau desfăşurate sub egida Federaţiei Române de Fotbal, obținând rezultate remarcabile.</p>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="dss-team-description paragraph">Din anul 2015, universitatea și-a format echipă proprie, atât de fete cât și de băieți, pentru baschet, streetball, volei și badminton, participând la campionatele naționale universitare, organizate de Ministerul Educației Naționale și Cercetării Științifice, prin Federația Sportului Școlar și Universitar.</p>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default SportsTeam;
