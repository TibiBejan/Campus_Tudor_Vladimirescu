import React, { useState, useEffect } from 'react';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';

import { useFormik } from 'formik';
import { registerSchema } from '../../../validation/AuthSchema';
// import { useDispatch } from 'react-redux';
// import { requestRegister, receiveRegister, registerError } from '../../../redux/userAuthSlice';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './RegisterComponent.scss';

function RegisterComponent() {

    // const dispatch = useDispatch();
    const history = useHistory();

    // STATE
    const [ formError, setFormError ] = useState('');
    // EFFECT
    // useEffect(() => {
    //     if(localStorage.getItem('JWTToken')) {
    //         history.push('/');
    //     }
    // }, [history]);

    const onSubmit = (values) => {

        // RESET SCROLL POSITION
        window.scrollTo(0, 0);

        const user = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password
        }

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        }

        // INIT REQ
        // dispatch(requestRegister());

        axios.post("http://127.0.0.1:8001/api/v1/users/register", user, reqConfig).then((response) => {
            console.log(response.data);
            console.log('registration success');
            history.push('/login');
        }).catch(err => {
            const { message } = err.response.data;
            setFormError(message);
            console.log('registration failed');
            // dispatch(registerError(message));
        });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirm: ''
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: registerSchema
    });

    return (
        <section className="register-form-section">
            <div className="register-form-section-inner">
                <div className="register-heading-wrapper">
                    <h3 className="register-title heading-three">Create an account</h3>    
                    {formError ? <ErrorMessageEl>{formError}</ErrorMessageEl> : null }
                </div>     
                <form className="register-form" method="POST" onSubmit={ formik.handleSubmit }>
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
                    <div className="form-group">
                        <label htmlFor="password" className="form-group-label label">Parola dvs.*</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="form-group-input" 
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                         {formik.errors.password && <ErrorMessageEl>{formik.errors.password}</ErrorMessageEl>}  
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2" className="form-group-label label">Reintroduceti parola dvs.*</label>
                        <input 
                            type="password" 
                            id="password2" 
                            className="form-group-input" 
                            name="password_confirm"
                            value={formik.values.password_confirm}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password_confirm && <ErrorMessageEl>{formik.errors.password_confirm}</ErrorMessageEl>}  
                    </div>
                    <ButtonPrimary type="submit" textLabel="Inregistreaza-te" />
                </form>
            </div>
        </section>
    )
}

export default RegisterComponent;