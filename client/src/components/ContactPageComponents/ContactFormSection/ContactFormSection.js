import React from 'react';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';

import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import './ContactFormSection.scss';

function ContactForm() {


    return (
        <section className="contact-form-section">
            <div className="contact-form-section-inner">
                <div className="contact-form-section-heading">
                    <p className="contact-form-paragraph paragraph">Prin programare sau telefonic</p>
                    <h3 className="contact-form-title heading-three">Alegeți ora întâlnirii noastre la confortul dvs., în biroul nostru sau online.</h3>
                </div>
                <form className="contact-form-section-wrapper" method="POST">
                    <div className="form-block">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-group-label label">Prenumele dvs.*</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                className="form-group-input"
                                name="firstName" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-group-label label">Numele dvs.*</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                className="form-group-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber" className="form-group-label label">Telefonul dvs.*</label>
                            <input 
                                type="text" 
                                id="phoneNumber" 
                                className="form-group-input"
                            />
                        </div>
                    </div>
                    <div className="form-block">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-group-label label">Cum va decurge intâlnirea?*</label>
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
                                            checked   
                                        />
                                        <div className="radio-button-el" />
                                        Telefonic
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date" className="form-group-label label">Data dorită*</label>
                            <input 
                                type="date" 
                                id="date" 
                                className="form-group-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-group-label label">Email-ul dvs.*</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="form-group-input"    
                            />
                        </div>
                    </div>
                    <div className="form-block text-area-group">
                        <div className="form-group">
                            <label htmlFor="message" className="form-group-label label">Mesajul sau remarca dvs.*</label>
                            <textarea 
                                id="message" 
                                className="form-group-input text-area" 
                                placeholder="Describe your request"
                            />
                        </div>
                    </div>
                    <ButtonPrimary type="submit" textLabel="Stabiliți o întâlnire" />
                </form>
            </div>
        </section>
    )
}

export default ContactForm;
