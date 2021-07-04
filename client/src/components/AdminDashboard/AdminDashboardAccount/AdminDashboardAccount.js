import React, { useState, useRef } from 'react';
import AdminDashboardNav from '../AdminDashboardNav/AdminDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import axios from 'axios';

import { useFormik } from 'formik';
import { updateAccountDetailsSchema } from '../../../validation/UserSchema';

// REUDX
import { useDispatch, useSelector } from 'react-redux';
import { requestAccountUpdate, receiveAccountUpdate, updateAccountError, userSelector } from '../../../redux/userSlice';

import './AdminDashboardAccount.scss';

function AdminDashboardAccount() {

    // GLOBAL STATE SLICE
    const dispatch = useDispatch();
    const userState = useSelector(userSelector);
    // STATE
    const [ formError, setFormError ] = useState('');
    // REF
    const blockRef = useRef(null)

    // RESET SCROLL POS
    const executeScroll = () => window.scrollTo(0, blockRef.current.offsetTop);  

    const onSubmit = (values) => {

        // RESET SCROLL POSITION
        executeScroll();

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                credentials: 'include'
            },
        }

        // INIT REQ
        dispatch(requestAccountUpdate());
            
        axios.patch("/api/v1/users/updateMe", values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                const { user } = response.data;
                dispatch(receiveAccountUpdate(user));
                setFormError('');
            }
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            dispatch(updateAccountError(message));
            setFormError(message);
        });
        
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: userState.user.first_name,
            last_name: userState.user.last_name,
            email: userState.user.email
        },
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit,
        validationSchema: updateAccountDetailsSchema
    });

    return (
        <section className="dashboard-account-update">
            <div className="dashboard-account-update-inner">
                <AdminDashboardNav />
                <div className="dashboard-form-block" ref={blockRef}>
                    <div className="dashboard-form-block-heading-wrapper">
                        <h3 className="dashboard-form-title heading-three">Actualizeaza-ti informatiile contului</h3>    
                        {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }    
                    </div>
                    <form className="dashboard-account-update-form" method="POST" onSubmit={ formik.handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-group-label label">Prenumele dvs.*</label>
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
                            <label htmlFor="lastName" className="form-group-label label">Numele dvs.*</label>
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
                            <label htmlFor="email" className="form-group-label label">Email-ul dvs.*</label>
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
                        <ButtonPrimary type="submit" textLabel="Actualizeaza" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AdminDashboardAccount;
