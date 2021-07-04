import React from 'react';
import Button from '../Button/ButtonPrimary';
import kinIllustration from '../../../assets/images/kin-illustration.svg';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './AddCard.scss';

function AddCard({ handleClick, scrollPosition }) {

    return (
        <div className="add-card" onClick={ handleClick }>
            <div className="add-card-content">
                <div className="card-showcase-profile-image">
                     <LazyLoadImage
                        alt="Ilustratia persoanei de contact a studentului"
                        src={kinIllustration}
                        effect="blur"
                        scrollPosition={scrollPosition}
                        className="background-image"
                        height={"100%"}
                    />
                    {/* <img src={kinIllustration} alt="Ilustratia persoanei de contact a studentului" className="background-image" /> */}
                </div>
                <Button type="button" textLabel="Adauga contact" />
            </div>
        </div>
    )
}

export default trackWindowScroll(AddCard);
