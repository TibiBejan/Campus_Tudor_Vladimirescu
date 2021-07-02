import React, { useState } from 'react';
import { useHistory } from 'react-router';
import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import axios from 'axios';

import { useFormik } from 'formik';
import { createMetaSchema } from '../../../validation/UserSchema';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {  
    requestDeleteMeta, 
    receiveDeleteMeta, 
    deleteMetaError, 
    requestUpdateMeta,
    receiveUpdateMeta,
    updateMetaError, 
} from '../../../redux/userMetaSlice';
import { userSelector } from '../../../redux/userSlice'; 
import './StudentDashboardUpdateInfo.scss';

function StudentDashboardUpdateInfo({ sectionData }) {

    // REDUX
    const dispatch = useDispatch();
    const userState = useSelector(userSelector);
    // STATE
    const [ formError, setFormError ] = useState('');
    const history = useHistory();

    // SUBMIT UPDATED INFORMATIONS
    const onSubmit = (values) => {
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

        dispatch(requestUpdateMeta());

        axios.patch(`/api/v1/users/student-meta/${sectionData.uuid}`, values, reqConfig).then((response) => {
            const { studentMeta } = response.data;
            setFormError('');
            dispatch(receiveUpdateMeta(studentMeta));
            history.push(`/${userState.user.first_name}.${userState.user.last_name}/dashboard`);
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            dispatch(updateMetaError(message));
            setFormError(message);
        });
    };

    // HANDLE DELETE INFORMATIONS
    const handleDeleteInfo = () => {
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            }, 
        }

        dispatch(requestDeleteMeta());

        axios.delete(`/api/v1/users/student-meta/${sectionData.uuid}`, reqConfig).then((response) => {
            if(response.status === 204) {
                dispatch(receiveDeleteMeta());
                history.push(`/${userState.user.first_name}.${userState.user.last_name}/dashboard`);
            } else {
                dispatch(deleteMetaError('There is an error, your information can not be deleted. Please try again'));
                setFormError('There is an error, your information can not be deleted. Please try again');
            }
        }).catch(err => {
            dispatch(deleteMetaError('There is an error, your information can not be deleted. Please try again'));
            setFormError('There is an error, please try again');
        });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            username: sectionData ? sectionData.username : '',
            dob: sectionData ? sectionData.dob : '',
            sex: sectionData ? sectionData.sex : '',
            nationality: sectionData ? sectionData.nationality : '',
            phone_number: sectionData ? sectionData.phone_number : '',
            adress: sectionData ? sectionData.adress : '',
            city: sectionData ? sectionData.city : '',
            state_province: sectionData ? sectionData.state_province : '',
            country: sectionData ? sectionData.country : '',
            zip_code: sectionData ? sectionData.zip_code : '',
        },
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit,
        validationSchema: createMetaSchema
    });


    return (
        <section className="dashboard-info-update">
            <div className="dashboard-info-update-inner">
                <StudentDashboardNav />
                <div className="dashboard-form-block">
                    <div className="dashboard-form-block-heading-wrapper">
                        <h3 className="dashboard-form-title heading-three">Actualizeaza-ti informatiile personale</h3>    
                        {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }    
                    </div>
                    <form className="dashboard-info-update-form" method="POST" onSubmit={ formik.handleSubmit }>
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
                        <ButtonPrimary type="submit" textLabel="Actualizeaza-ti informatiile" />
                        <ButtonPrimary type="button" onClick={handleDeleteInfo} textLabel="Sterge informatiile" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StudentDashboardUpdateInfo;
