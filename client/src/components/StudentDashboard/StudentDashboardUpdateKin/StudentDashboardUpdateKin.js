import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import axios from 'axios';

import { useFormik } from 'formik';
import { createKinSchema } from '../../../validation/UserSchema';

import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/userSlice';

import './StudentDashboardUpdateKin.scss'

function StudentDashboardUpdateKin() {

    // STATE
    const [ currentKin, setCurrentKin ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [ formError, setFormError ] = useState('');
    const userState = useSelector(userSelector);
    const { id } = useParams();
    const history = useHistory();

    // GET CURRENT KIN ON FIRST RENDER
    useEffect(() => {
        const fetchCurrentkin = () => {
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    withCredentials: true,
                    credentials: 'include'
                }, 
            }
    
            axios.get(`/api/v1/users/kins/${id}`, reqConfig).then((response) => {
                const { kin } = response.data;
                setCurrentKin(kin);
                setIsLoading(false);
                setFormError('');
            }).catch(err => {
                setIsLoading(false);
                const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
                setFormError(message);
                history.push(`/${userState.user.first_name}.${userState.user.last_name}/kins`);
            });
        }
        fetchCurrentkin();
    }, []);

    // SUBMIT UPDATED KIN
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

        axios.patch(`/api/v1/users/kins/${id}`,  values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                resetForm();
                setFormError('');
                history.push(`/${userState.user.first_name}.${userState.user.last_name}/kins`);
            } else {
                setFormError('There is an error, please try again');
            }
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            setFormError(message);
        });
    };

    // HANDLE DELETE KIN
    const handleDeleteKin = () => {
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            }, 
        }

        axios.delete(`/api/v1/users/kins/${id}`, reqConfig).then((response) => {
            if(response.status === 204) {
                history.push(`/${userState.user.first_name}.${userState.user.last_name}/kins`);
                window.location.reload();
            } else {
                setFormError('There is an error, your kin relation can not be deleted. Please try again');
            }
        }).catch(err => {
            const message = err.response.data.errors[0].msg;
            const reqMessage = err.response.message;
            setFormError(reqMessage ? reqMessage : message);
        });
    }
     
    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: currentKin ? currentKin.first_name : '',
            last_name: currentKin ? currentKin.last_name : '',
            email: currentKin ? currentKin.email : '',
            relation: currentKin ? currentKin.relation : '',
            adress: currentKin ? currentKin.adress : '',
            phone_number: currentKin ? currentKin.phone_number : '',
        },
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit,
        validationSchema: createKinSchema
    });

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <section className="dashboard-kin-update">
            <div className="dashboard-kin-update-inner">
                <StudentDashboardNav />
                <div className="dashboard-form-block">
                    <div className="dashboard-form-block-heading-wrapper">
                        <h3 className="dashboard-form-title heading-three">Actualizeaza persoana de contact: {currentKin && `${currentKin.first_name} ${currentKin.last_name}`}</h3>
                        {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }    
                    </div>
                    <form className="dashboard-kin-update-form" method="POST" onSubmit={ formik.handleSubmit }>
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
                        <ButtonPrimary type="submit" textLabel="Actualizeaza pesoana de contact" />
                        <ButtonPrimary type="button" onClick={handleDeleteKin} textLabel="Sterge pesoana de contact" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StudentDashboardUpdateKin;
