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
import { 
    requestUpdateEnroll,
    receiveUpdateEnroll,
    updateEnrollError,
    requestDeleteEnroll,
    receiveDeleteEnroll,
    deleteEnrollError 
} from '../../../redux/userEnrollSlice';
import { userSelector } from '../../../redux/userSlice';

import './StudentDashboardUpdateEnroll.scss';

function StudentDashboardUpdateEnroll({ sectionData }) {

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

    // UPDATE ENROLLMENT
    const onSubmit = (values, { resetForm }) => {
        // RESET SCROLL POSITION
        executeScroll();

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                credentials: 'include'
            }, 
        }

        dispatch(requestUpdateEnroll());

        axios.patch(`/api/v1/users/enrollment/${sectionData.uuid}`,  values, reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                const { enrollment } = response.data;
                dispatch(receiveUpdateEnroll(enrollment));
                resetForm();
                setFormError('');
                history.push(`/${userState.user.first_name}.${userState.user.last_name}/enrollment/success`);
            } else {
                dispatch(updateEnrollError('There is an error with creating your information, please try again'));
                setFormError('There is an error with creating your information, please try again');
            }
        }).catch(err => {
            const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
            setFormError(message);
            dispatch(updateEnrollError(message));
        });
    };

    // DELETE ENROLLMENT
    const handleDeleteEnrollment = () => {
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true,
                credentials: 'include'
            }, 
        }

        dispatch(requestDeleteEnroll());

        axios.delete(`/api/v1/users/enrollment/${sectionData.uuid}`, reqConfig).then((response) => {
            if(response.status === 204) {
                dispatch(receiveDeleteEnroll());
                history.push(`/${userState.user.first_name}.${userState.user.last_name}/kins`);
            } else {
                dispatch(deleteEnrollError('There is an error, your enrollment can not be deleted. Please try again'));
                setFormError('There is an error, your enrollment can not be deleted. Please try again');
            }
        }).catch(err => {
            setFormError('There is an error, please try again');
        });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            university: sectionData.university,
            year_of_study: sectionData.year_of_study,
            type_of_study: sectionData.type_of_study,
            grade: sectionData.grade,
            financial_type: sectionData.financial_type,
            nationality: sectionData.nationality,
            student_gender: sectionData.student_gender,
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: enrollSchema
    });

    return (
        <section className="dashboard-update-enroll">
            <div className="dashboard-update-enroll-inner">
                <StudentDashboardNav />
                <div className="dashboard-form-block" ref={blockRef}>
                    <div className="dashboard-form-block-heading-wrapper">
                        <h3 className="dashboard-form-title heading-three">Adauga informatiile personale</h3>    
                        {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }    
                    </div>
                    <form className="dashboard-update-enroll-form" method="POST" onSubmit={ formik.handleSubmit }>
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
                                    <option value="Facultatea de ??tiin??a ??i Ingineria Materialelor" label="Facultatea de ??tiin??a ??i Ingineria Materialelor" />
                                    <option value="Facultatea de Mecanic?? Ia??i" label="Facultatea de Mecanic?? Ia??i" />
                                    <option value="Facultatea de Inginerie Electric??, Energetic?? ??i Informatic?? Aplicat??" label="Facultatea de Inginerie Electric??, Energetic?? ??i Informatic?? Aplicat??" />
                                    <option value="Facultatea de Inginerie Chimic?? ??i Protec??ia Mediului ???Cristofor Simionescu???" label="Facultatea de Inginerie Chimic?? ??i Protec??ia Mediului ???Cristofor Simionescu???" />
                                    <option value="Facultatea de Hidrotehnic??, Geodezie ??i Ingineria Mediului" label="Facultatea de Hidrotehnic??, Geodezie ??i Ingineria Mediului" />
                                    <option value="Facultatea de Electronic??, Telecomunica??ii ??i Tehnologia Informa??iei" label="Facultatea de Electronic??, Telecomunica??ii ??i Tehnologia Informa??iei" />
                                    <option value="Facultatea de Design Industrial ??i Managementul Afacerilor" label="Facultatea de Design Industrial ??i Managementul Afacerilor" />
                                    <option value="Facultatea de Construc??ii ??i Instala??ii" label="Facultatea de Construc??ii ??i Instala??ii" />
                                    <option value="Facultatea de Automatic?? ??i Calculatoare" label="Facultatea de Automatic?? ??i Calculatoare" />
                                    <option value="Facultatea de Arhitectur?? ???G.M. Cantacuzino???" label="Facultatea de Arhitectur?? ???G.M. Cantacuzino???" />
                                    <option value="Facultatea Construc??ii de Ma??ini ??i Management Industrial" label="Facultatea Construc??ii de Ma??ini ??i Management Industrial" />
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
                        <ButtonPrimary type="submit" textLabel="Actualizeaza inrolarea" />
                        <ButtonPrimary type="button" onClick={handleDeleteEnrollment} textLabel="Sterge inrolarea" />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StudentDashboardUpdateEnroll;
