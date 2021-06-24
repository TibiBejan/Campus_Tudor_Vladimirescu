import React, { useState, useEffect } from 'react';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';

import { useFormik } from 'formik';
import { forgotPwdSchema } from '../../../validation/AuthSchema';
// import { useDispatch } from 'react-redux';
// import { requestForgotPassword, receiveForgotPassword, forgotPasswordError } from '../../../redux/userAuthSlice';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

import './ForgotPasswordComponent.scss';

function ForgotPasswordComponent() {

    // const dispatch = useDispatch();
    // const history = useHistory();

    // STATE
    const [ formError, setFormError ] = useState('');
    const [ currentEmail, setCurrentEmail ] = useState('');
    // EFFECT
    // useEffect(() => {
    //     if(localStorage.getItem('JWTToken')) {
    //         history.push('/');
    //     }
    // }, [history]);

    const onSubmit = async (values) => {
        // const reqConfig = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         "Access-Control-Allow-Origin": "*",
        //     },
        //     credentials: "same-origin",
        // }

        console.log(values);
        // INIT REQ
        // dispatch(requestForgotPassword());

        // axios.post("http://127.0.0.1:8001/api/v1/users/forgotPassword", values, reqConfig).then((response) => {
        //     if(response.status === 200 || response.status === 201) {
        //         localStorage.setItem('resetToken', response.data.resetToken);
        //         dispatch(receiveForgotPassword());
        //         setCurrentEmail(values);
        //     } else {
        //         dispatch(forgotPasswordError('There is an error, please try again'));
        //     }
        // }).catch(err => {
        //     const { message } = err.response.data;
        //     setFormError(message);
        //     dispatch(forgotPasswordError(message));
        // });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: forgotPwdSchema
    });

    return (
        <section className="forgot-password-section">
            <div className="forgot-password-section-inner">
                <div className="forgot-password-content">
                    { currentEmail ? (
                        <>
                            <div className="forgot-password-paragraph-wrapper">
                                <p className="forgot-password-paragraph paragraph-quote-large">An email has been sent to your e-mail adress. Please follow the provided instructions to reset your password.</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="forgot-password-paragraph-wrapper">
                                <p className="forgot-password-paragraph paragraph-quote-large">Forgot your password ? Please enter your username or email address. You will receive a link by email to create a new password.</p>
                                {formError ? <ErrorMessageEl>{formError}</ErrorMessageEl> : null }
                            </div>
                            <form className="forgot-password-form" method="POST" onSubmit={ formik.handleSubmit }>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-group-label label">Introduceti e-mail-ul dvs.*</label>
                                    <input 
                                        type="text" 
                                        id="email" 
                                        className="form-group-input"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.errors.email && <ErrorMessageEl>{formik.errors.email}</ErrorMessageEl>}  
                                </div>
                                <ButtonPrimary type="submit" textLabel="Reset Password" />
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ForgotPasswordComponent;
