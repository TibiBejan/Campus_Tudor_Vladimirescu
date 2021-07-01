import React, { useState } from 'react';
import { useHistory } from 'react-router';
import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import axios from 'axios';

import { useFormik } from 'formik';
import { createMetaSchema } from '../../../validation/UserSchema';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { requestCreateMeta, receiveCreateMeta, createMetaError } from '../../../redux/userMetaSlice';
import { userSelector } from '../../../redux/userSlice';
import './StudentDashboardCreateInfo.scss';

function StudentDashboardCreateInfo() {

    // REDUX
    const dispatch = useDispatch();
    const userState = useSelector(userSelector);
    const history = useHistory();
    // STATE
    const [ formError, setFormError ] = useState('');

    const onSubmit = (values, { resetForm }) => {
        // RESET SCROLL POSITION
        window.scrollTo(0,0);

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            }, 
        }

        dispatch(requestCreateMeta());

        axios.post(`/api/v1/users/student-meta`,  values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                const { studentMeta } = response.data;
                resetForm();
                setFormError('');
                dispatch(receiveCreateMeta(studentMeta));
                history.push(`/${userState.user.first_name}.${userState.user.last_name}/dashboard`);
            } else {
                dispatch(createMetaError('There is an error with creating your information, please try again'));
                setFormError('There is an error with creating your information, please try again');
            }
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            dispatch(createMetaError(message));
            setFormError(message);
        });
    };

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            username: '',
            dob: '',
            sex: '',
            nationality: '',
            phone_number: '',
            adress: '',
            city: '',
            state_province: '',
            country: '',
            zip_code: '',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: createMetaSchema
    });

    return (
        <section className="dashboard-info-create">
            <div className="dashboard-info-create-inner">
                <StudentDashboardNav />
                <div className="dashboard-form-block">
                    <div className="dashboard-form-block-heading-wrapper">
                        <h3 className="dashboard-form-title heading-three">Adauga informatiile personale</h3>    
                        {formError ? <ErrorMessageEl>{formError}</ErrorMessageEl> : null }    
                    </div>
                    <form className="dashboard-info-create-form" method="POST" onSubmit={ formik.handleSubmit }>
                        <div className="form-block">
                            <div className="form-group">
                                <label htmlFor="username" className="form-group-label label">Numele de utilizator.*</label>
                                <input 
                                    type="text" 
                                    id="username" 
                                    className="form-group-input" 
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                />
                            {formik.errors.username && <ErrorMessageEl>{formik.errors.username}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="dob" className="form-group-label label">Data nasterii.*</label>
                                <input 
                                    type="date" 
                                    id="dob" 
                                    className="form-group-input"
                                    name="dob"
                                    value={formik.values.dob}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.dob && <ErrorMessageEl>{formik.errors.dob}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="sex" className="form-group-label label">Genul.*</label>
                                <select 
                                    id="sex" 
                                    className="form-group-input form-group-select"
                                    name="sex"
                                    value={formik.values.sex}
                                    onChange={formik.handleChange}
                                >
                                    <option value="" label="Selectati genul" />
                                    <option value="Masculin" label="Masculin" />
                                    <option value="Feminin" label="Feminin" />
                                </select>
                                {formik.errors.sex && <ErrorMessageEl>{formik.errors.sex}</ErrorMessageEl>}       
                            </div>
                            <div className="form-group">
                                <label htmlFor="nationality" className="form-group-label label">Nationalitatea*</label>
                                <input 
                                    type="text" 
                                    id="nationality" 
                                    className="form-group-input"
                                    name="nationality"
                                    value={formik.values.nationality}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.nationality && <ErrorMessageEl>{formik.errors.nationality}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone_number" className="form-group-label label">Numarul de telefon.*</label>
                                <input 
                                    type="text" 
                                    id="phone_number" 
                                    className="form-group-input"
                                    name="phone_number"
                                    value={formik.values.phone_number}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.phone_number && <ErrorMessageEl>{formik.errors.phone_number}</ErrorMessageEl>}
                            </div>
                        </div>
                        <div className="form-block">
                            <div className="form-group">
                                <label htmlFor="adress" className="form-group-label label">Adresa.*</label>
                                <input 
                                    type="text" 
                                    id="adress" 
                                    className="form-group-input" 
                                    name="adress"
                                    value={formik.values.adress}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.adress && <ErrorMessageEl>{formik.errors.adress}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="city" className="form-group-label label">Orasul.*</label>
                                <input 
                                    type="text" 
                                    id="city" 
                                    className="form-group-input" 
                                    name="city"
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.city && <ErrorMessageEl>{formik.errors.city}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="state_province" className="form-group-label label">Statul sau provincia.*</label>
                                <input 
                                    type="text" 
                                    id="state_province" 
                                    className="form-group-input" 
                                    name="state_province"
                                    value={formik.values.state_province}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.state_province && <ErrorMessageEl>{formik.errors.state_province}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="country" className="form-group-label label">Tara.*</label>
                                <input 
                                    type="text" 
                                    id="country" 
                                    className="form-group-input" 
                                    name="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.country && <ErrorMessageEl>{formik.errors.country}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip_code" className="form-group-label label">Codul ZIP.*</label>
                                <input 
                                    type="text" 
                                    id="zip_code" 
                                    className="form-group-input" 
                                    name="zip_code"
                                    value={formik.values.zip_code}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.zip_code && <ErrorMessageEl>{formik.errors.zip_code}</ErrorMessageEl>}
                            </div>
                        </div>
                        <ButtonPrimary type="submit" textLabel="Creaza informatiile" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StudentDashboardCreateInfo;
