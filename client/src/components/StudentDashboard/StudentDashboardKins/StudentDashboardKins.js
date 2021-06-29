import React, { useState, useEffect } from 'react';
import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import KinCard from '../../SharedComponents/KinCard/KinCard';
import axios from 'axios';

import { useFormik } from 'formik';
import { createKinSchema } from '../../../validation/UserSchema';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { requestKins, receiveKins, kinsError, userMetaSelector } from '../../../redux/userMetaSlice';
// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import './StudentDashboardKins.scss';

function StudentDashboardKins() {

    // REDUX
    const dispatch = useDispatch();
    const userMetaState = useSelector(userMetaSelector);

    // STATE
    const [ formError, setFormError ] = useState('');

    const onSubmit = (values, { resetForm }) => {
        // RESET SCROLL POSITION
        window.scrollTo(0,0);

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            }, 
        }

        axios.post(`/api/v1/users/kins`,  values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                console.log('Kin created!')
                resetForm();
                setFormError('');
            } else {
                setFormError('There is an error, please try again');
            }
        }).catch(err => {
            setFormError('There is an error, please try again');
        });
    };

    useEffect(() => {
        const fetchKins = () => {
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    withCredentials: true,
                    credentials: 'include'
                }, 
            }
            // INIT REQ
            dispatch(requestKins());
    
            axios.get(`/api/v1/users/kins`, reqConfig).then((response) => {
                if(response.status === 200 || response.status === 201) {
                    const { kins } = response.data;
                    dispatch(receiveKins(kins));
                } else {
                    setFormError('There is an error, please try again');
                }
            }).catch(err => {
                const { message } = err.data.message;
                dispatch(kinsError(message ? message : 'There is an error, please try again'));
                setFormError(message ? message : 'There is an error, please try again');
            });
        }

        fetchKins();
    }, [dispatch]);

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
                    breakpoints={{
                        1366: {slidesPerView: 2},
                        1024: {slidesPerView: 1.5},
                        650: {slidesPerView: 1}
                    }}
                    spaceBetween={40}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    speed={1000}
                    className="student-kins-slider"
                >
                    {userMetaState.userKins.map((kin, index) => (
                        <SwiperSlide key={`kin-${index}`}>
                            <KinCard cardData={kin} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="dashboard-form-block">
                    <div className="dashboard-form-block-heading-wrapper">
                        <h3 className="dashboard-form-title heading-three">Adauga o persoana de contact</h3>    
                        {formError ? <ErrorMessageEl>{formError}</ErrorMessageEl> : null }    
                    </div>
                    <form className="dashboard-kins-form" method="POST" onSubmit={ formik.handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-group-label label">Prenumele persoanei de contact.*</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                className="form-group-input" 
                                name="first_name"
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
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
                            <label htmlFor="phone_number" className="form-group-label label">Numarul de telefon al persoanei de contact.*</label>
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
                        <ButtonPrimary type="submit" textLabel="Adauga pesoana de contact" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StudentDashboardKins;
