import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import { IconContext } from 'react-icons';
import { ImEye } from "react-icons/im";

import { useFormik } from 'formik';
import { loginSchema } from '../../../validation/AuthSchema';
// import { useDispatch } from 'react-redux';
// import { requestLogin, receiveLogin, loginError } from '../../../redux/userAuthSlice';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

import './LoginComponent.scss';

function LoginComponent() {

    // const dispatch = useDispatch();
    // const history = useHistory();

    // STATE
    const [ formError, setFormError ] = useState('');
    const [ visiblePassword, setVisiblePassword ] = useState(false);

    // EFFECT
    // useEffect(() => {
    //     if(localStorage.getItem('JWTToken')) {
    //         history.push('/');
    //     }
    // }, [history]);

    const onSubmit = async (values) => {

        // RESET SCROLL POSITION
        window.scrollTo(0, 0);

        console.log(values);
        
        // const user = {
        //     email: values.email,
        //     password: values.password
        // }

        // const reqConfig = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         "Access-Control-Allow-Origin": "*",
        //     },
        //     credentials: "same-origin",
        // }

        // INIT REQ
        // dispatch(requestLogin());

        // axios.post("http://127.0.0.1:8001/api/v1/users/login", user, reqConfig).then((response) => {
        //     const { jwtToken, userData } = response.data;
            
        //     if(response.status === 200 || response.status === 201) {
        //         localStorage.setItem('JWTToken', jwtToken);
        //         localStorage.setItem('userId', userData.uuid);
        //         dispatch(receiveLogin(userData));
        //         history.push('/');
        //     } else {
        //         dispatch(loginError('There is an error, please try again'));
        //     }
        // }).catch(err => {
        //     const { message } = err.response.data;
        //     setFormError(message);
        //     dispatch(loginError(message));
        // });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: loginSchema
    });

    return (
        <section className="user-login-wrapper">
            <div className="user-login-inner">
                <div className="user-login-heading-wrapper">
                    <h3 className="user-login-title heading-three">Log In</h3>    
                    {formError ? <ErrorMessageEl>{formError}</ErrorMessageEl> : null }    
                </div>
                <form className="user-login-form" method="POST" onSubmit={ formik.handleSubmit }>
                    <div className="form-group">
                        <label htmlFor="username" className="form-group-label label">Numele utilizatorului sau e-mail-ul dvs..*</label>
                        <input 
                            type="text" 
                            id="username" 
                            className="form-group-input"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && <ErrorMessageEl>{formik.errors.email}</ErrorMessageEl>}  
                    </div>
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
                    <ButtonPrimary type="submit" textLabel="Conectare" />
                </form>
                <Link to="/forgot-password" className="link-wrapper">
                    <span className="link-wrapper-label label-medium">Forgot your password?</span>
                </Link>
            </div>     
        </section>
    )
}

export default LoginComponent;