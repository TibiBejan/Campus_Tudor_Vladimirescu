import React, { useState, useRef } from 'react';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import { IconContext } from 'react-icons';
import { ImEye } from "react-icons/im";

import { useFormik } from 'formik';
import { resetPwdSchema } from '../../../validation/AuthSchema';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import './ResetPasswordComponent.scss';

function ResetPasswordComponent() {

    const history = useHistory();
    const params = useParams();

    // STATE
    const [ formError, setFormError ] = useState('');
    const [ visiblePassword, setVisiblePassword ] = useState(false);
    const [ visibleConfirmPassword, setVisibleConfirmPassword ] = useState(false);
    // REF
    const blockRef = useRef(null)

    // RESET SCROLL POS
    const executeScroll = () => window.scrollTo(0, blockRef.current.offsetTop);  


    const onSubmit = async (values) => {
        executeScroll();

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            },         
        }

        ///api/v1/users/resetPassword/${params.id}

        axios.patch(`https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/resetPassword/${params.id}`,  values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                console.log('Password successfully changed!');
                history.push('/login');
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
        <section className="reset-password-section" ref={blockRef}>
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
