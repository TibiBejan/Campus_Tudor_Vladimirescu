import React, { useState, useEffect, useRef } from 'react';
import AdminDashboardNav from '../AdminDashboardNav/AdminDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import { IconContext } from 'react-icons';
import { ImEye } from "react-icons/im";
import axios from 'axios';

import { useFormik } from 'formik';
import { createStudentSchema } from '../../../validation/AdminSchema';
import './AdminDashboardCreateUser.scss';

function AdminDashboardCreateUser() {

    // STATE
    const [ formError, setFormError ] = useState('');
    const [ visiblePassword, setVisiblePassword ] = useState(false);
    const [ visibleConfirmPassword, setVisibleConfirmPassword ] = useState(false);
    // REF
    const blockRef = useRef(null);  
    // EFFECT
    useEffect(() => {
        setFormError('');
    }, []);

    // RESET SCROLL POS
    const executeScroll = () => window.scrollTo(0, blockRef.current.offsetTop);  

    const onSubmit = (values, { resetForm }) => {   
        executeScroll();

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            },
        }

        ///api/v1/users/

        axios.post(`https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/`, values, reqConfig).then((response) => {
            setFormError('Student creat!');
            resetForm();
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            setFormError(message);
        });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name:'',
            last_name: '',
            email: '',
            password: '',
            password_confirm: '',
            role:'',
        },
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit,
        validationSchema: createStudentSchema
    });


    return (
        <section className="dashboard-account-create">
            <div className="dashboard-account-create-inner">
                <AdminDashboardNav />
                <div className="dashboard-form-block" ref={blockRef}>
                    <div className="dashboard-form-block-heading-wrapper">
                        <h3 className="dashboard-form-title heading-three">Adauga un student</h3>    
                        {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }    
                    </div>
                    <form className="dashboard-account-create-form" method="POST" onSubmit={ formik.handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="first_name" className="form-group-label label">Prenumele studentului.*</label>
                            <input 
                                type="text" 
                                id="first_name" 
                                className="form-group-input" 
                                name="first_name"
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
                            />
                        {formik.errors.first_name && <ErrorMessageEl>{formik.errors.first_name}</ErrorMessageEl>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name" className="form-group-label label">Numele studentului.*</label>
                            <input 
                                type="text" 
                                id="last_name" 
                                className="form-group-input"
                                name="last_name"
                                value={formik.values.last_name}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.last_name && <ErrorMessageEl>{formik.errors.last_name}</ErrorMessageEl>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-group-label label">Email-ul studentului.*</label>
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
                            <label htmlFor="password" className="form-group-label label">Parola studentului*</label>
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
                            <label htmlFor="password_confirm" className="form-group-label label">Confirma parola studentului*</label>
                            <div className="input-wrapper">
                                <input 
                                    type={visibleConfirmPassword ? "text" : "password"}
                                    id="password_confirm" 
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
                        <div className="form-group">
                            <label htmlFor="role" className="form-group-label label">Rolul dorit.*</label>
                            <input 
                                type="text" 
                                id="role" 
                                className="form-group-input"
                                name="role"
                                value={formik.values.role}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.role && <ErrorMessageEl>{formik.errors.role}</ErrorMessageEl>}       
                        </div>
                        <ButtonPrimary type="submit" textLabel="Adauga un student" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AdminDashboardCreateUser;
