import React, { useState } from 'react';
import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import { IconContext } from 'react-icons';
import { ImEye } from "react-icons/im";
import axios from 'axios';

import { useFormik } from 'formik';
import { updatePwdSchema } from '../../../validation/UserSchema';

// REUDX
import { useDispatch } from 'react-redux';
import { requestUpdatePwd, receiveUpdatePwd, updatePwdError } from '../../../redux/userSlice';
import './StudentDashboardPwd.scss';

function StudentDashboardPwd() {

    // GLOBAL STATE SLICE
    const dispatch = useDispatch();
    // STATE
    const [ formError, setFormError ] = useState('');
    const [ visibleCurrentPassword, setVisibleCurrentPassword ] = useState(false);
    const [ visiblePassword, setVisiblePassword ] = useState(false);
    const [ visibleConfirmPassword, setVisibleConfirmPassword ] = useState(false);

    const onSubmit = async (values, { resetForm }) => {
         // RESET SCROLL POSITION
         window.scrollTo(0, 0);

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            },   
        }

        const body = {...values};

        // INIT REQ
        dispatch(requestUpdatePwd());

        axios.patch(`/api/v1/users/updateMyPassword`,  body, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                const { userData } = response.data;
                dispatch(receiveUpdatePwd(userData));
                resetForm();
                setFormError('');
            } else {
                setFormError('There is an error, please try again');
            }
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            setFormError(message);
            dispatch(updatePwdError(message));
        });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            password_confirm: '',
            password_new: '',
            password_new_confirm: ''
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: updatePwdSchema
    });

    return (
        <section className="dashboard-password-update">
            <div className="dashboard-password-update-inner">
                <StudentDashboardNav />
                <div className="dashboard-form-block">
                    <div className="dashboard-form-block-heading-wrapper">
                        <h3 className="dashboard-form-title heading-three">Update password</h3>    
                        {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }    
                    </div>
                    <form className="dashboard-password-update-form" method="POST" onSubmit={ formik.handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="password_confirm" className="form-group-label label">Current Password*</label>
                            <div className="input-wrapper">
                                <input 
                                    type={visibleCurrentPassword ? "text" : "password"}
                                    id="password_confirm" 
                                    className="form-group-input"
                                    name="password_confirm"
                                    value={formik.values.password_confirm}
                                    onChange={formik.handleChange}
                                />
                                <button type="button" onClick={() => setVisibleCurrentPassword(prevState => !prevState)} className="show-password-button">
                                    <IconContext.Provider value={{size: '30px', color: visibleCurrentPassword ? '#464646' : '#fafafa'}}>
                                        <ImEye />
                                    </IconContext.Provider>
                                </button>
                            </div>
                            {formik.errors.password_confirm && <ErrorMessageEl>{formik.errors.password_confirm}</ErrorMessageEl>}  
                        </div>
                        <div className="form-group">
                            <label htmlFor="password_new" className="form-group-label label">New Password*</label>
                            <div className="input-wrapper">
                                <input 
                                    type={visiblePassword ? "text" : "password"}
                                    id="password_new" 
                                    className="form-group-input"
                                    name="password_new"
                                    value={formik.values.password_new}
                                    onChange={formik.handleChange}
                                />
                                <button type="button" onClick={() => setVisiblePassword(prevState => !prevState)} className="show-password-button">
                                    <IconContext.Provider value={{size: '30px', color: visiblePassword ? '#464646' : '#fafafa'}}>
                                        <ImEye />
                                    </IconContext.Provider>
                                </button>
                            </div>
                            {formik.errors.password_new && <ErrorMessageEl>{formik.errors.password_new}</ErrorMessageEl>}  
                        </div>
                        <div className="form-group">
                            <label htmlFor="password_new_confirm" className="form-group-label label">Confirm your new password*</label>
                            <div className="input-wrapper">
                                <input 
                                    type={visibleConfirmPassword ? "text" : "password"}
                                    id="password_new_confirm" 
                                    className="form-group-input"
                                    name="password_new_confirm"
                                    value={formik.values.password_new_confirm}
                                    onChange={formik.handleChange}
                                />
                                <button type="button" onClick={() => setVisibleConfirmPassword(prevState => !prevState)} className="show-password-button">
                                    <IconContext.Provider value={{size: '30px', color: visibleConfirmPassword ? '#464646' : '#fafafa'}}>
                                        <ImEye />
                                    </IconContext.Provider>
                                </button>
                            </div>
                            {formik.errors.password_new_confirm && <ErrorMessageEl>{formik.errors.password_new_confirm}</ErrorMessageEl>}  
                        </div>
                        <ButtonPrimary type="submit" textLabel="Conectare" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StudentDashboardPwd;
