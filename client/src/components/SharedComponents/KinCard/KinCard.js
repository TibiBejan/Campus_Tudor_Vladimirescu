import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/ButtonPrimary';
// REDUX
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/userSlice';
import kinIllustration from '../../../assets/images/kin-illustration.svg';
import { LazyLoadImage, trackWindowScroll  } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './KinCard.scss';

function KinCard({ cardData, scrollPosition }) {

    // SLICE OF STATE
    const userState = useSelector(userSelector);

    return (
        <Link to={`/${userState.user.first_name}.${userState.user.last_name}/kins/${cardData.uuid}`} className="kin-card-link-wrapper">
            <div className="kin-card">
                <div className="kin-card-showcase">
                    <div className="card-showcase-profile-image">
                        {/* <img src={kinIllustration} alt="Ilustratia persoanei de contact a studentului" className="background-image" /> */}
                    
                        <LazyLoadImage
                            alt="Ilustratia persoanei de contact a studentului"
                            src={kinIllustration}
                            effect="blur"
                            scrollPosition={scrollPosition}
                            className="background-image"
                            height={"100%"}
                        />
                    </div>
                </div>
                <div className="kin-card-content">
                    <span className="content-label label">{cardData.relation}</span>
                    <p className="content-title label">Nume: {`${cardData.first_name} ${cardData.last_name}`}</p>
                    <p className="content-title label">Telefon: {cardData.phone_number}</p>
                    <Button type="button" textLabel="Actualizare" />
                </div>
            </div>
        </Link>
    )
}

export default trackWindowScroll(KinCard);
