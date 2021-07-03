import React, { useState } from 'react';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';

import { useSelector } from 'react-redux';
import { adminSelector } from '../../../redux/adminSlice';
import axios from 'axios';

import { useFormik } from 'formik';
import { updateAccountDetailsSchema } from '../../../validation/UserSchema';

import './DashboardStudentUpdateAccount.scss';

function DashboardStudentUpdateAccount() {

    // SLICE OF STATE
    const adminState = useSelector(adminSelector);
    // STATE
    const [ formError, setFormError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true);

    const onSubmit = (values) => {

        // RESET SCROLL POSITION
        window.scrollTo(0, 0);

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                credentials: 'include'
            },
        }

        console.log(values);

        // axios.patch("/api/v1/users/updateMe", values, reqConfig).then((response) => {
        //     if(response.status === 200 || response.status === 201) {
        //         // const { user } = response.data;
        //         setFormError('');
        //         setIsLoading(false);
        //     }
        // }).catch(err => {
        //     setIsLoading(false);
        //     const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
        //     setFormError(message);
        // });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            first_name: adminState.selectedUser ? adminState.selectedUser.first_name : '',
            last_name: adminState.selectedUser ? adminState.selectedUser.last_name : '',
            email: adminState.selectedUser ? adminState.selectedUser.email : '',
        },
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit,
        validationSchema: updateAccountDetailsSchema
    });

    return (
        <section className="student-update-account-section">
            <div className="student-update-account-heading-wrapper">
                <h3 className="student-accommodation-title heading-three">Actualizeaza datele studentului</h3>    
                {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null} 
            </div>
            <div className="student-update-wrapper">
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
        </section>
    )
}

export default DashboardStudentUpdateAccount;
