import React from 'react';
import './PrimarySection.scss';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import primarySectionImage from '../../../assets/images/AboutPageImages/showcase-top.jpg';

function PrimarySection({ scrollPosition }) {
    return (
        <section className="primary-section">
            <div className="primary-section-inner">
                <div className="primary-section-content">
                    <div className="content-left">
                        {/* <div className="content-left-preview">
                            <span className="hexagon-wrapper">
                                <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                                    <path d="M13.5629 13.5629L45 0.541196L76.4371 13.5629L89.4588 45L76.4371 76.4371L45 89.4588L13.5629 76.4371L0.541196 45L13.5629 13.5629Z" stroke="#eaeaea"></path>
                                </svg>
                                <span className="hexagon-wrapper-label hexagon-label">01</span>
                            </span>
                            <span className="preview-label label-medium">Introduction</span>
                        </div> */}
                        <div className="content-left-description">
                            {/* <div className="description-title-wrapper">
                                <h1 className="description-title heading-one">About Us</h1>
                            </div> */}
                            <div className="description-paragraph-wrapper">
                                <p className="description-paragraph paragraph">În interiorul campusului se găsesc 21 de cămine, o cantină studenţească cu cele mai accesibile preţuri din oraș, săli și terenuri de sport și un dispensar medical. Campusul este alimentat de echipamente termice de ultimă generație, mare parte a căminelor sunt reabilitate și au o capacitate totală de 8.000 de locuri. Toate camerele au acces la internet gratuit și cablu TV.</p>
                            </div>
                            <div className="description-paragraph-wrapper">
                                <p className="description-paragraph paragraph">Pentru a asigura securitatea studenților, campusul este monitorizat de un sistem de supraveghere video performant, care are în componență 105 de camere. Dacă ești student la TUIAȘI, beneficiezi de reduceri considerabile pe transportul în comun, astfel, cu 6 lei, poți călători o lună de zile pe toate liniile RATP.</p>                       
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="image-block">
                            <div className="image-block-overlay"></div>
                            <div className="image-block-showcase">
                                <LazyLoadImage
                                    alt="tuiasi-dss"
                                    src={primarySectionImage}
                                    effect="blur"
                                    scrollPosition={scrollPosition}
                                    className="background-image"
                                    height={"100%"}
                                />
                                {/* <img src={primarySectionImage} alt="" className="background-image" /> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="content-bottom">
                        <div className="description-paragraph-wrapper">
                            <p className="description-paragraph paragraph">În interiorul campusului se găsesc 21 de cămine, o cantină studenţească cu cele mai accesibile preţuri din oraș, săli și terenuri de sport și un dispensar medical. Campusul este alimentat de echipamente termice de ultimă generație, mare parte a căminelor sunt reabilitate și au o capacitate totală de 8.000 de locuri. Toate camerele au acces la internet gratuit și cablu TV.</p>
                        </div>
                        <div className="description-paragraph-wrapper">
                            <p className="description-paragraph paragraph">Pentru a asigura securitatea studenților, campusul este monitorizat de un sistem de supraveghere video performant, care are în componență 105 de camere. Dacă ești student la TUIAȘI, beneficiezi de reduceri considerabile pe transportul în comun, astfel, cu 6 lei, poți călători o lună de zile pe toate liniile RATP.</p>                       
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default trackWindowScroll(PrimarySection);
