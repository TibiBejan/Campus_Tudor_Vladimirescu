import React from 'react';
import './ContactSectionSmall.scss';

function ContactSectionSmall({ title, phone, mail }) {
    return (
        <section className="contact-section">
            <div className="contact-section-inner">
                <div className="contact-section-content">
                    <div className="content-heading-wrapper">
                        <h3 className="content-heading-title heading-three">{title}</h3>
                    </div>
                    <div className="content-block">
                        <div className="content-block-group">
                            <span className="group-label label">Prin telefon:</span>
                            <a href="tel:0232271288" className="group-link-wrapper">
                                <span className="group-link-label link-label">{phone ? phone : '0232.271.288'}</span>
                            </a>
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="content-block-group">
                            <span className="group-label label">Prin e-mail:</span>
                            <a href="mailto:dss@tuiasi.ro" className="group-link-wrapper">
                                <span className="group-link-label link-label">{mail ? mail : 'dss@tuiasi.ro'}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSectionSmall;
