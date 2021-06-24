import React, { useState } from 'react';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import { IconContext } from 'react-icons';
import { ImEye } from "react-icons/im";

import { useFormik } from 'formik';
import { resetPwdSchema } from '../../../validation/AuthSchema';
// import { useDispatch } from 'react-redux';
// import { requestResetPassword, receiveResetPassword, resetPasswordError } from '../../../redux/userAuthSlice';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

import './ResetPasswordComponent.scss';

function ResetPasswordComponent() {

    // const dispatch = useDispatch();
    // const history = useHistory();

    // STATE
    const [ formError, setFormError ] = useState('');
    const [ visiblePassword, setVisiblePassword ] = useState(false);
    const [ visibleConfirmPassword, setVisibleConfirmPassword ] = useState(false);

    const onSubmit = async (values) => {

        console.log(values);

        // const resetToken = localStorage.getItem('resetToken');

        // const reqConfig = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         "Access-Control-Allow-Origin": "*",
        //     },
        //     credentials: "same-origin",
        // }

        // INIT REQ
        // dispatch(requestResetPassword());

        // axios.patch(`http://127.0.0.1:8001/api/v1/users/resetPassword/${resetToken}`,  values, reqConfig).then((response) => {
        //     const { userData } = response.data;
            
        //     if(response.status === 200 || response.status === 201) {
        //         localStorage.removeItem('resetToken');
        //         dispatch(receiveResetPassword(userData));
        //         history.push('/login');
        //     } else {
        //         dispatch(resetPasswordError('There is an error, please try again'));
        //     }
        // }).catch(err => {
        //     const { message } = err.response.data;
        //     setFormError(message);
        //     dispatch(resetPasswordError(message));
        // });
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
