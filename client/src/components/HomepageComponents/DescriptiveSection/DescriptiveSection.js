import React from 'react';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './DescriptiveSection.scss';

import showcaseImage from '../../../assets/images/AulaUniversitatii/aula-00005.jpg';

function DescriptiveSection({scrollPosition}) {
    return (
        <section className="descriptive-section">
            <div className="descriptive-section-inner">
                <div className="descriptive-heading">
                    <span className="descriptive-heading-subtitle label-medium">Tradiție</span>
                    <h1 className="descriptive-heading-title heading-one">Auditoriul Universității, o bijuterie arhitecturală</h1>
                </div>
                <div className="descriptive-showcase-image">
                    <LazyLoadImage
                        alt="Auditoriul Universității"
                        src={showcaseImage}
                        effect="blur"
                        scrollPosition={scrollPosition}
                        className="background-image"
                        height={"100%"}
                        width={"100%"}
                    />
                </div>
                <div className="descriptive-content">
                    <p className="descriptive-content-paragraph paragraph">Palatul Universității din Copou, construit între anii 1893-1897 în locul fostului Mare Teatru din Copou și al Școlii Belle-Arte, prezintă un stil arhitectural extravagant eclectic. Procesul de construcție a început la 28 aprilie 1892, în prezența Alteței sale Regale, prințul moștenitor Ferdinand. Piatra de temelie a fost pusă undeva sub Atriumul Universității Tehnice „Gheorghe Asachi” din Iași.</p>
                    <p className="descriptive-content-paragraph paragraph">Momentul este înregistrat pe placa de marmură albă care poate fi văzută deasupra intrării în Atrium, când vine din holul Pașilor Pierdute; acesta din urmă dezvăluie 19 picturi murale de peste 120 de metri pătrați, realizate de pictorul Sabin Bălașa în perioada 1968-1978. Picturile au fost menite a fi o reprezentare vizuală a spiritualității românești.</p>
                    <Link to="/news/post" className="link-wrapper">
                        <ButtonPrimary textLabel="Descoperă Auditoriul Universității" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default trackWindowScroll(DescriptiveSection);
