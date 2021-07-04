import React, { useState, useRef } from 'react';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';

import { useSelector } from 'react-redux';
import { adminSelector } from '../../../redux/adminSlice';
import axios from 'axios';

import { useFormik } from 'formik';
import { updateStudentSchema } from '../../../validation/AdminSchema';

import './DashboardStudentUpdateAccount.scss';

function DashboardStudentUpdateAccount() {

    // SLICE OF STATE
    const adminState = useSelector(adminSelector);
    // STATE
    const [ formError, setFormError ] = useState('');
    // REF
    const updateAccForm = useRef(null);

    // RESET SCROLL POS
    const executeScroll = () => window.scrollTo(0, updateAccForm.current.offsetTop);  

    const onSubmit = (values) => {   

        executeScroll();

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            },
        }

        ///api/v1/users/${adminState.selectedUser.uuid}

        axios.patch(`https://campus-tudor-vladimirescu.herokuapp.com/api/v1/users/${adminState.selectedUser.uuid}`, values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                setFormError('');
            }
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            setFormError(message);
        });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: adminState.selectedUser ? adminState.selectedUser.first_name : '',
            last_name: adminState.selectedUser ? adminState.selectedUser.last_name : '',
            email: adminState.selectedUser ? adminState.selectedUser.email : '',
            role: adminState.selectedUser ? adminState.selectedUser.role : '',
        },
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit,
        validationSchema: updateStudentSchema
    });

    return (
        <section className="student-update-account-section" ref={updateAccForm}>
            <div className="student-update-account-heading-wrapper">
                <h3 className="student-accommodation-title heading-three">Actualizeaza datele studentului</h3>    
                {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null} 
            </div>
            <div className="student-update-wrapper">
                <form className="dashboard-account-update-form" method="POST" onSubmit={ formik.handleSubmit }>
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
                    <ButtonPrimary type="submit" textLabel="Actualizeaza" />
                </form>
            </div>
        </section>
    )
}

export default DashboardStudentUpdateAccount;
