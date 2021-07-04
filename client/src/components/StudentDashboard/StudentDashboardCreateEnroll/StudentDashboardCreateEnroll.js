import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router';
import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import axios from 'axios';

import { useFormik } from 'formik';
import { enrollSchema } from '../../../validation/UserSchema';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { requestEnroll, receiveEnroll, enrollError } from '../../../redux/userEnrollSlice';
import { userSelector } from '../../../redux/userSlice';
import './StudentDashboardCreateEnroll.scss';

function StudentDashboardCreateEnroll() {

    // REDUX
    const dispatch = useDispatch();
    const userState = useSelector(userSelector);
    const history = useHistory();
    // STATE
    const [ formError, setFormError ] = useState('');
    const [ typeOfStudy, setTypeOfStudy ] = useState('');
    // REF
    const blockRef = useRef(null)

    // RESET SCROLL POS
    const executeScroll = () => window.scrollTo(0, blockRef.current.offsetTop);  

    // HANDLE FIELD ON BLUR
    const handleBlur = (e) => setTypeOfStudy(e.target.value);

    // CREATE ENROLLMENT
    const onSubmit = (values, { resetForm }) => {
        // RESET SCROLL POSITION
        executeScroll();

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            }, 
        }

        dispatch(requestEnroll());

        axios.post(`/api/v1/users/enrollment`,  values, reqConfig).then((response) => {
            const { enrollment } = response.data;
            dispatch(receiveEnroll(enrollment));
            resetForm();
            setFormError('');
            history.push(`/${userState.user.first_name}.${userState.user.last_name}/enrollment/success`);
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            dispatch(enrollError(message));
            setFormError(message);
        });
    };

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            university: '',
            year_of_study: '',
            type_of_study: '',
            grade: '',
            financial_type: '',
            nationality: '',
            student_gender: '',
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: enrollSchema
    });

    return (
        <section className="dashboard-create-enroll">
            <div className="dashboard-create-enroll-inner">
                <StudentDashboardNav />
                <div className="dashboard-form-block" ref={blockRef}>
                    <div className="dashboard-form-block-heading-wrapper">
                        <h3 className="dashboard-form-title heading-three">Adauga informatiile personale</h3>    
                        {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }    
                    </div>
                    <form className="dashboard-create-enroll-form" method="POST" onSubmit={ formik.handleSubmit }>
                        <div className="form-block full-width">
                            <div className="form-group">
                                <label htmlFor="university" className="form-group-label label">Universitatea dvs.*</label>
                                <select 
                                    id="university" 
                                    className="form-group-input form-group-select"
                                    name="university"
                                    value={formik.values.university}
                                    onChange={formik.handleChange}
                                >
                                    <option value="" label="Selectati universitatea" />
                                    <option value="Facultatea de Ştiinţa şi Ingineria Materialelor" label="Facultatea de Ştiinţa şi Ingineria Materialelor" />
                                    <option value="Facultatea de Mecanică Iaşi" label="Facultatea de Mecanică Iaşi" />
                                    <option value="Facultatea de Inginerie Electrică, Energetică şi Informatică Aplicată" label="Facultatea de Inginerie Electrică, Energetică şi Informatică Aplicată" />
                                    <option value="Facultatea de Inginerie Chimică și Protecția Mediului „Cristofor Simionescu”" label="Facultatea de Inginerie Chimică și Protecția Mediului „Cristofor Simionescu”" />
                                    <option value="Facultatea de Hidrotehnică, Geodezie şi Ingineria Mediului" label="Facultatea de Hidrotehnică, Geodezie şi Ingineria Mediului" />
                                    <option value="Facultatea de Electronică, Telecomunicaţii şi Tehnologia Informaţiei" label="Facultatea de Electronică, Telecomunicaţii şi Tehnologia Informaţiei" />
                                    <option value="Facultatea de Design Industrial și Managementul Afacerilor" label="Facultatea de Design Industrial și Managementul Afacerilor" />
                                    <option value="Facultatea de Construcţii şi Instalaţii" label="Facultatea de Construcţii şi Instalaţii" />
                                    <option value="Facultatea de Automatică și Calculatoare" label="Facultatea de Automatică și Calculatoare" />
                                    <option value="Facultatea de Arhitectură „G.M. Cantacuzino”" label="Facultatea de Arhitectură „G.M. Cantacuzino”" />
                                    <option value="Facultatea Construcţii de Maşini și Management Industrial" label="Facultatea Construcţii de Maşini și Management Industrial" />
                                </select>
                                {formik.errors.university && <ErrorMessageEl>{formik.errors.university}</ErrorMessageEl>}       
                            </div>
                        </div>
                        <div className="form-block">
                            <div className="form-group">
                                <label htmlFor="type_of_study" className="form-group-label label">Tipul de studiu.*</label>
                                <select 
                                    id="type_of_study" 
                                    className="form-group-input form-group-select"
                                    name="type_of_study"
                                    value={formik.values.type_of_study}
                                    onChange={formik.handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="" label="Selectati tipul de studiu" />
                                    <option value="Licenta" label="Licenta" />
                                    <option value="Master" label="Master" />
                                    <option value="Doctorat" label="Doctorat" />
                                </select>
                                {formik.errors.type_of_study && <ErrorMessageEl>{formik.errors.type_of_study}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="year_of_study" className="form-group-label label">Anul de studiu.*</label>
                                <select 
                                    id="year_of_study" 
                                    className="form-group-input form-group-select"
                                    name="year_of_study"
                                    value={formik.values.year_of_study}
                                    onChange={formik.handleChange}
                                >
                                    <option value="" label="Selectati anul de studiu" />
                                    { (typeOfStudy === 'Licenta' || typeOfStudy === '')&& (
                                        <>
                                            <option value="1" label="1" />
                                            <option value="2" label="2" />
                                            <option value="3" label="3" />
                                            <option value="4" label="4" />
                                            <option value="5" label="5" />
                                            <option value="6" label="6" />
                                        </>
                                    )}

                                    { (typeOfStudy === 'Master' || typeOfStudy === 'Doctorat') && (
                                        <>
                                            <option value="1" label="1" />
                                            <option value="2" label="2" />
                                        </>
                                    )}
                                </select>
                                {formik.errors.year_of_study && <ErrorMessageEl>{formik.errors.year_of_study}</ErrorMessageEl>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="grade" className="form-group-label label">Media generala a anului trecut.*</label>
                                <input 
                                    type="number" 
                                    min="0"
                                    max="10"
                                    step="0.01"
                                    id="grade" 
                                    className="form-group-input"
                                    name="grade"
                                    value={formik.values.grade}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.grade && <ErrorMessageEl>{formik.errors.grade}</ErrorMessageEl>}
                            </div>
                        </div>
                        <div className="form-block">
                            <div className="form-group">
                                <label htmlFor="financial_type" className="form-group-label label">Tipul de studiu: buget / taxa.*</label>
                                <select 
                                    id="financial_type" 
                                    className="form-group-input form-group-select"
                                    name="financial_type"
                                    value={formik.values.financial_type}
                                    onChange={formik.handleChange}
                                >
                                    <option value="" label="Selectati tipul de studiu: buget / taxa" />
                                    <option value="Buget" label="Buget" />
                                    <option value="Taxa" label="Taxa" />
                                </select>
                                {formik.errors.financial_type && <ErrorMessageEl>{formik.errors.financial_type}</ErrorMessageEl>}
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
                                <label htmlFor="student_gender" className="form-group-label label">Genul dvs.*</label>
                                <select 
                                    id="student_gender" 
                                    className="form-group-input form-group-select"
                                    name="student_gender"
                                    value={formik.values.student_gender}
                                    onChange={formik.handleChange}
                                >
                                    <option value="" label="Selectati genul dvs." />
                                    <option value="Feminin" label="Feminin" />
                                    <option value="Masculin" label="Masculin" />
                                </select>
                                {formik.errors.student_gender && <ErrorMessageEl>{formik.errors.student_gender}</ErrorMessageEl>}
                            </div>          
                        </div>
                        <ButtonPrimary type="submit" textLabel="Inroleaza-te" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StudentDashboardCreateEnroll;

