import React, { useState, useEffect, useRef } from 'react';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import Button from '../../SharedComponents/Button/ButtonPrimary';
import axios from 'axios';

import { useFormik } from 'formik';
import { adminSearchSchema } from '../../../validation/AdminSchema';

// REUDX
import { useDispatch } from 'react-redux';
import { requestStudents, receiveStudents, studentsError } from '../../../redux/adminSlice';

import './AdminDashboardSearch.scss';

function AdminDashboardSearch() {

     // GLOBAL STATE SLICE
    const dispatch = useDispatch();
    // STATE
    const [ formError, setFormError ] = useState('');
    // REF
    const blockRef = useRef(null)

    // RESET SCROLL POS
    const executeScroll = () => window.scrollTo(0, blockRef.current.offsetTop);  
    // EFFECT ON FIRST RENDER
    useEffect(() => {
        const fetchAllStudents = () => {
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    withCredentials: true,
                    credentials: 'include'
                },   
            }

             // INIT REQ
             dispatch(requestStudents());
             axios.get('/api/v1/users/', reqConfig).then((response) => {
                const { students } = response.data;
                dispatch(receiveStudents(students));
                setFormError('');
            }).catch(err => {
                const message = err.response.data.message ? err.response.data.message : "Please type a querry or select something from the inputs below.";
                setFormError(message);
                dispatch(studentsError(message));
            });
        }

        fetchAllStudents();
    }, [dispatch]);

    const onSubmit = async (values) => {

        executeScroll();

        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            },   
        }

        let reqUrl = null;
        if(values.university && values.searchQuerry) {
            reqUrl = `/api/v1/search-users?${values.university ? `university=${values.university}` : ''}&${values.searchQuerry ? `searchQuerry=${values.searchQuerry}` : ''}`;
        } else if(values.university && (!values.searchQuerry || values.searchQuerry === '')) {
            reqUrl = `/api/v1/search-users?university=${values.university}`;
        } else if (values.searchQuerry && (!values.university || values.university === '')) {
            reqUrl = `/api/v1/search-users?searchQuerry=${values.searchQuerry}`;
        } else if((!values.university || values.university === '') && (!values.searchQuerry || values.searchQuerry === '')) {
            reqUrl = '/api/v1/users/'
        }

        // INIT REQ
        dispatch(requestStudents());

        axios.get(reqUrl, reqConfig).then((response) => {
            const { students } = response.data;
            dispatch(receiveStudents(students));
            setFormError('');
            if( students.rows && students.rows.length === 0 ) {
                dispatch(studentsError('Nu au fost gasiti studenti pe baza acestor criterii.'));
                setFormError('Nu au fost gasiti studenti pe baza acestor criterii.');
            } else if (!students.length === 0 || !students) {
                dispatch(studentsError('Nu au fost gasiti studenti pe baza acestor criterii.'));
                setFormError('Nu au fost gasiti studenti pe baza acestor criterii.');
            }
        }).catch(err => {
            let message;
            err.response.data.message ? message = err.response.data.message : message = "Please type a querry or select something from the inputs below."
            setFormError(message);
            dispatch(studentsError(message));
        });
    }

    // FORM HANDLER
    const formik = useFormik({
        initialValues: {
            university: '',
            searchQuerry: '',
        },
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit,
        validationSchema: adminSearchSchema
    });


    return (
        <>
            <div className="dashboard-form-block" ref={blockRef}>
                <div className="dashboard-form-block-heading-wrapper">
                    <h3 className="dashboard-form-title heading-three">Cauta in baza de date.</h3>    
                    {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }    
                </div>
                <form className="dashboard-admin-search-form" method="POST" onSubmit={ formik.handleSubmit }>
                    <div className="form-block full-width">
                        <div className="form-group">
                            <label htmlFor="searchQuerry" className="form-group-label label">Adresa de e-email, numele sau prenumele studentului*</label>
                            <input 
                                type="text" 
                                id="searchQuerry" 
                                className="form-group-input"
                                name="searchQuerry"
                                value={formik.values.searchQuerry}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.searchQuerry && <ErrorMessageEl>{formik.errors.searchQuerry}</ErrorMessageEl>}
                        </div>
                    </div>
                    <div className="form-block full-width">
                        <div className="form-group">
                            <label htmlFor="university" className="form-group-label label">Universitatea</label>
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
                    <Button type="submit" textLabel="Cauta" />
                </form>
            </div>
        </>
    )
}

export default AdminDashboardSearch;
