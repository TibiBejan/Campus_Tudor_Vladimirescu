import React, { useState, useEffect, useRef } from 'react';
import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import { IconContext } from 'react-icons';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import KinCard from '../../SharedComponents/KinCard/KinCard';
import AddCard from '../../SharedComponents/AddCard/AddCard';
import axios from 'axios';

import { useFormik } from 'formik';
import { createKinSchema } from '../../../validation/UserSchema';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { requestKins, receiveKins, kinsError, userMetaSelector } from '../../../redux/userMetaSlice';
import './StudentDashboardKins.scss';

// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade  } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.scss";
import 'swiper/components/effect-fade/effect-fade.scss';
// INSTAL MODULES
SwiperCore.use([Navigation, EffectFade]);

function StudentDashboardKins() {

    // REDUX
    const dispatch = useDispatch();
    const userMetaState = useSelector(userMetaSelector);
    // STATE
    const [ formError, setFormError ] = useState('');
    const [ slidesLength, setSlidesLength ] = useState(null);
    const [ activeIndex, setActiveIndex ] = useState(1);
    const [ disabled, setDisabled ] = useState({
        prevButton: false,
        nextButton: false
    });

    // REF
    const sliderPrevButton = useRef(null);
    const sliderNextButton = useRef(null);
    const inputFocus = useRef(null);
    const blockRef = useRef(null)
    // RESET SCROLL POS
    const executeScroll = () => window.scrollTo(0, blockRef.current.offsetTop);  

    const onSubmit = (values, { resetForm }) => {
        // RESET SCROLL POSITION
        executeScroll();

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            }, 
        }

        ///api/v1/users/kins

        axios.post(`https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/kins`,  values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                console.log('Kin created!')
                resetForm();
                setFormError('');
                window.location.reload();
            } else {
                setFormError('There is an error, please try again');
            }
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            setFormError(message);
        });
    };

    useEffect(() => {
        const fetchKins = () => {
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    withCredentials: true,
                    credentials: 'include'
                }, 
            }
            // INIT REQ
            dispatch(requestKins());

            ///api/v1/users/kins
    
            axios.get(`/api/v1/users/kins`, reqConfig).then((response) => {
                if(response.status === 200 || response.status === 201) {
                    const { kins } = response.data;
                    dispatch(receiveKins(kins));
                } else {
                    setFormError('Pentru a continua procesul de inrolarea, va rugam sa introduceti cel putin o persoana de contact');
                }
            }).catch(err => {
                dispatch(kinsError('Pentru a continua procesul de inrolarea, va rugam sa introduceti cel putin o persoana de contact'));
                setFormError('Pentru a continua procesul de inrolarea, va rugam sa introduceti cel putin o persoana de contact');
            });
        }

        fetchKins();
    }, [dispatch]);

    const handleCreateKin = () => {
        inputFocus.current.focus();
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            relation: '',
            adress: '',
            phone_number: ''
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: createKinSchema
    });

    return (
        <section className="dashboard-kins">
            <div className="dashboard-kins-inner">
                <StudentDashboardNav />

                <Swiper 
                    slidesPerView={1}
                    navigation={{
                        prevEl: sliderPrevButton.current,
                        nextEl: sliderNextButton.current,
                    }}
                    breakpoints={{
                        1500: {slidesPerView: 3},
                        1366: {slidesPerView: 2.5},
                        1150: {slidesPerView: 2},
                        767: {slidesPerView: 1.5},
                        650: {slidesPerView: 1}
                    }}
                    spaceBetween={40}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    speed={1000}
                    onInit={() => {
                        setSlidesLength(userMetaState.userKins.length);
                        setActiveIndex(1);
                    }}
                    onSlideChange={(Swiper) => {
                        setActiveIndex(Swiper.activeIndex + 1);
                        if(Swiper.activeIndex === 0) {
                            setDisabled({
                                prevButton: true,
                                nextButton: false
                            });
                        } else if(Swiper.activeIndex >= userMetaState.userKins.length -1) {
                            setDisabled({
                                prevButton: false,
                                nextButton: true
                            });
                        } else {
                            setDisabled({
                                prevButton: false,
                                nextButton: false
                            });
                        }
                    }}
                    className="student-kins-slider"
                >
                    <SwiperSlide>
                        <AddCard handleClick={handleCreateKin}/>
                    </SwiperSlide>
                    {userMetaState.userKins.map((kin, index) => (
                        <SwiperSlide key={`kin-${index}`}>
                            <KinCard cardData={kin} />
                        </SwiperSlide>
                    ))}

                    <button disabled={disabled.prevButton} className="showcase-prev-button" ref={sliderPrevButton}>
                        <IconContext.Provider value={{color: '#fafafa', size: '34px'}}>
                            <BsArrowLeft />
                        </IconContext.Provider>
                    </button>
                    <button disabled={disabled.nextButton} className="showcase-next-button" ref={sliderNextButton}>
                        <IconContext.Provider value={{color: '#fafafa', size: '34px'}}>
                            <BsArrowRight />
                        </IconContext.Provider>
                    </button>
                </Swiper>

                <div className="dashboard-form-block">
                    <div className="dashboard-form-block-heading-wrapper" ref={blockRef}>
                        <h3 className="dashboard-form-title heading-three">Adauga o persoana de contact</h3>    
                        {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }    
                    </div>
                    <form className="dashboard-kins-form" method="POST" onSubmit={ formik.handleSubmit }>
                        <div className="form-block">
                            <div className="form-group">
                                <label htmlFor="firstName" className="form-group-label label">Prenumele persoanei de contact.*</label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    className="form-group-input" 
                                    name="first_name"
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    ref={inputFocus}
                                />
                            {formik.errors.first_name && <ErrorMessageEl>{formik.errors.first_name}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName" className="form-group-label label">Numele persoanei de contact.*</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    className="form-group-input"
                                    name="last_name"
                                    value={formik.values.last_name}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.last_name && <ErrorMessageEl>{formik.errors.last_name}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-group-label label">Email-ul persoanei de contact.*</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="form-group-input"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.email && <ErrorMessageEl>{formik.errors.email}</ErrorMessageEl>}       
                            </div>
                        </div>
                        <div className="form-block">
                            <div className="form-group">
                                <label htmlFor="relation" className="form-group-label label">Tipul relatiei.*</label>
                                <input 
                                    type="text" 
                                    id="relation" 
                                    className="form-group-input" 
                                    name="relation"
                                    value={formik.values.relation}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.relation && <ErrorMessageEl>{formik.errors.relation}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="adress" className="form-group-label label">Adresa persoanei de contact.*</label>
                                <input 
                                    type="text" 
                                    id="adress" 
                                    className="form-group-input" 
                                    name="adress"
                                    value={formik.values.adress}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.adress && <ErrorMessageEl>{formik.errors.adress}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone_number" className="form-group-label label">Numarul de telefon.*</label>
                                <input 
                                    type="text" 
                                    id="phone_number" 
                                    className="form-group-input" 
                                    name="phone_number"
                                    value={formik.values.phone_number}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.phone_number && <ErrorMessageEl>{formik.errors.phone_number}</ErrorMessageEl>}
                            </div>
                        </div>
                        <ButtonPrimary type="submit" textLabel="Adauga pesoana de contact" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StudentDashboardKins;
