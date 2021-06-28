import React, { useState, useEffect } from 'react';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import { IconContext } from 'react-icons';
import { ImEye } from "react-icons/im";

import { useFormik } from 'formik';
import { resetPwdSchema } from '../../../validation/AuthSchema';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/userSlice.js';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';

import './ResetPasswordComponent.scss';

function ResetPasswordComponent() {

    const userState = useSelector(userSelector);
    const params = useParams();

    // STATE
    const [ formError, setFormError ] = useState('');
    const [ visiblePassword, setVisiblePassword ] = useState(false);
    const [ visibleConfirmPassword, setVisibleConfirmPassword ] = useState(false);
    // EFFECT
    useEffect(() => {
        if(userState.isAuthenticated) {
            <Redirect push to='/dashboard' />
        }
    }, [userState]);


    const onSubmit = async (values) => {

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
            xhrFields: {withCredentials: true},
            mode: 'cors',
            credentials: 'include'
        }

        axios.patch(`/api/v1/users/resetPassword/${params.id}`,  values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                console.log('Password successfully changed!');
                <Redirect push to='/login' />
            } else {
                setFormError('There is an error, please try again');
            }
        }).catch(err => {
            const { message } = err.response.data;
            setFormError(message);
        });
    }


    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            password: '',
            password_confirm: '',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: resetPwdSchema
    });

    return (
        <section className="reset-password-section">
            <div className="reset-password-section-inner">
                <div className="reset-password-content">
                    <div className="reset-password-paragraph-wrapper">
                        <p className="reset-password-paragraph paragraph-quote-large">Please fill the fields below to reset your current password, then click the lick below to log in.</p>
                        {formError ? <ErrorMessageEl>{formError}</ErrorMessageEl> : null }
                    </div>
                    <form className="reset-password-form" method="POST" onSubmit={ formik.handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="password" className="form-group-label label">Parola dvs..*</label>
                            <div className="input-wrapper">
                                <input 
                                    type={visiblePassword ? "text" : "password"}
                                    id="password" 
                                    className="form-group-input"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <button type="button" onClick={() => setVisiblePassword(prevState => !prevState)} className="show-password-button">
                                    <IconContext.Provider value={{size: '30px', color: visiblePassword ? '#464646' : '#fafafa'}}>
                                        <ImEye />
                                    </IconContext.Provider>
                                </button>
                            </div>
                            {formik.errors.password && <ErrorMessageEl>{formik.errors.password}</ErrorMessageEl>}  
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2" className="form-group-label label">Confirmati parola dvs..*</label>
                            <div className="input-wrapper">
                                <input 
                                    type={visibleConfirmPassword ? "text" : "password"}
                                    id="password2" 
                                    className="form-group-input"
                                    name="password_confirm"
                                    value={formik.values.password_confirm}
                                    onChange={formik.handleChange}
                                />
                                <button type="button" onClick={() => setVisibleConfirmPassword(prevState => !prevState)} className="show-password-button">
                                    <IconContext.Provider value={{size: '30px', color: visibleConfirmPassword ? '#464646' : '#fafafa'}}>
                                        <ImEye />
                                    </IconContext.Provider>
                                </button>
                            </div>
                            {formik.errors.password_confirm && <ErrorMessageEl>{formik.errors.password_confirm}</ErrorMessageEl>}  
                        </div>
                        <ButtonPrimary type="submit" textLabel="Reset password" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ResetPasswordComponent;
