import React, { useState, useRef } from 'react';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import { useFormik } from 'formik';
import { appointmentSchema } from '../../../validation/AppointmentSchema';
import './ContactFormSection.scss';

function ContactForm() {

    // STATE
    const [ formError, setFormError ] = useState('');
    // REF
    const blockRef = useRef(null);
    // RESET SCROLL POS
    const executeScroll = () => window.scrollTo(0, blockRef.current.offsetTop);  

    const onSubmit = (values) => {   
        executeScroll();
        setFormError('');
    }

     // FORM HANDLER
     const formik = useFormik({
        initialValues: {
            first_name:'',
            last_name: '',
            phone_number: '',
            dob: '',
            email: '',
            message:'',
        },
        validateOnBlur: true,
        enableReinitialize: true,
        onSubmit,
        validationSchema: appointmentSchema
    });

    return (
        <section className="contact-form-section">
            <div className="contact-form-section-inner">
                <div className="contact-form-section-heading" ref={blockRef}>
                    <p className="contact-form-paragraph paragraph">Prin programare sau telefonic</p>
                    <h3 className="contact-form-title heading-three">Alegeți ora întâlnirii noastre la confortul dvs., în biroul nostru sau online.</h3>
                    {formError ? <GeneralErrorMessage>{formError}</GeneralErrorMessage> : null }  
                </div>
                <form className="contact-form-section-wrapper"  method="POST" onSubmit={ formik.handleSubmit }>
                    <div className="form-block">
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
                            <label htmlFor="last_name" className="form-group-label label">Prenumele studentului.*</label>
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
                            <label htmlFor="meeting_type" className="form-group-label label">Cum va decurge intâlnirea?*</label>
                            <div className="form-group-buttons">
                                <div className="radio-button-group">
                                    <label htmlFor="appointment" className="button-group-label label">
                                        <input 
                                            type="radio" 
                                            id="appointment" 
                                            value="appointment" 
                                            className="button-group-input"
                                        />
                                        <div className="radio-button-el" />
                                        Fizic, cu programare
                                    </label>
                                </div>
                                <div className="radio-button-group">
                                    <label htmlFor="phone" className="button-group-label label">
                                        <input 
                                            type="radio" 
                                            id="phone" 
                                            value="phone" 
                                            className="button-group-input"
                                            defaultChecked
                                        />
                                        <div className="radio-button-el" />
                                        Telefonic
                                    </label>
                                </div>
                            </div>
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
                    </div>
                    <div className="form-block text-area-group">
                        <div className="form-group">
                            <label htmlFor="message" className="form-group-label label">Mesajul sau remarca dvs.*</label>
                            <textarea 
                                id="message" 
                                className="form-group-input text-area" 
                                placeholder="Describe your request"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.message && <ErrorMessageEl>{formik.errors.message}</ErrorMessageEl>}   
                        </div>
                    </div>
                    <ButtonPrimary type="submit" textLabel="Stabiliți o întâlnire" />
                </form>
            </div>
        </section>
    )
}

export default ContactForm;
