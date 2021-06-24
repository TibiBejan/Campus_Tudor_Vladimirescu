import React from 'react';
import './TuiasiTeam.scss';

import campusImageRight from '../../../assets/images/AboutPageImages/campus-showcase-1.jpg';
import campusImageLeft from '../../../assets/images/AboutPageImages/campus-showcase-2.jpg'; 

function TuiasiTeam() {
    return (
        <section className="tuiasi-team-section">
            <div className="tuiasi-team-section-inner">
                <div className="tuiasi-team-section-content">
                    <div className="content-left">
                        {/* <div className="content-left-preview">
                            <span className="hexagon-wrapper">
                                <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                                    <path d="M13.5629 13.5629L45 0.541196L76.4371 13.5629L89.4588 45L76.4371 76.4371L45 89.4588L13.5629 76.4371L0.541196 45L13.5629 13.5629Z" stroke="#eaeaea"></path>
                                </svg>
                                <span className="hexagon-wrapper-label hexagon-label">02</span>
                            </span>
                            <span className="preview-label label-medium">DSS Team</span>
                        </div> */}
                        <div className="content-left-description">
                            <div className="description-title-wrapper">
                                <h1 className="description-title heading-one">Un oraș în mijlocul Iașului</h1>
                            </div>
                            <div className="description-paragraph-wrapper">
                                <p className="description-paragraph paragraph">Această insulă în mijlocul Iașului are propriul ecosistem – studenții au un campionat de fotbal pe cămine, cu etape în fiecare săptămână și cu decernare de trofee la final, au o bază sportivă mai mare decât cea din micile orașe amintite anterior, se gospodăresc an de an și ajută la deszăpezirea parcării interioare si la curățarea spațiilor verzi.</p>
                            </div>
                            <div className="description-paragraph-wrapper">
                                <p className="description-paragraph paragraph">Echipele de sport ale universității au cea mai tare galerie din Iași și aduc an de an zeci de trofee, iar poveștile despre aventurile și legendele din Tudor dăinuie încă dinainte de 1989 în ligile studențești, care duc mai departe o tradiție de camaraderie aproape unică în țară.</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        {/* <div className="description-paragraph-wrapper">
                            <p className="description-paragraph paragraph">Echipele de sport ale universității au cea mai tare galerie din Iași și aduc an de an zeci de trofee, iar poveștile despre aventurile și legendele din Tudor dăinuie încă dinainte de 1989 în ligile studențești, care duc mai departe o tradiție de camaraderie aproape unică în țară.</p>
                        </div> */}
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <img src={campusImageRight} alt="Tuiasi Team Showcase" className="background-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tuiasi-team-section-showcase">
                    <div className="showcase-left">
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <img src={campusImageLeft} alt="Tuiasi Team Showcase" className="background-image" />
                            </div>
                        </div>
                    </div>
                    <div className="showcase-right">
                        <ul className="showcase-right-list">
                            <li className="showcase-right-list-item">
                                <div className="list-item-number">1</div>
                                <div className="list-item-content">
                                    <h5 className="content-title heading-five">Echipa DSS</h5>
                                    <p className="content-paragraph paragraph">Direcția Servicii Studențești are grijă ca studenții să aibă tot confortul în campus.</p>
                                </div>
                            </li>
                            <li className="showcase-right-list-item">
                                <div className="list-item-number">2</div>
                                <div className="list-item-content">
                                    <h5 className="content-title heading-five">Echipa Tuiasi</h5>
                                    <p className="content-paragraph paragraph">Universitatea Tehnică din Iași are propria echipă de fotbal care în 2014 a fost campioană națională.</p>
                                </div>
                            </li>
                            <li className="showcase-right-list-item">
                                <div className="list-item-number">3</div>
                                <div className="list-item-content">
                                    <h5 className="content-title heading-five">Simulare 3D</h5>
                                    <p className="content-paragraph paragraph">Din ianuarie 2015, Campusul „Tudor Vladimirescu” poate fi vizitat și prin intermediul unei simulări 3D pe calculator.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TuiasiTeam;
