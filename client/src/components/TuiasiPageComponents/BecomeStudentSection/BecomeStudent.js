import React from 'react';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import './BecomeStudent.scss';

function BecomeStudent() {
    return (
        <section className="become-student-section">
            <div className="become-student-section-inner">
                <div className="become-student-heading-wrapper">
                    <h2 className="become-student-title heading-two">DEVINO #STUDENTLATUIASI!</h2>
                </div>
                <a href="https://www.tuiasi.ro/licenta/" target="_blank" rel="noreferrer" className="become-student-button-wrapper">
                    <ButtonPrimary textLabel="Afla mai multe despre admitere" />
                </a>
            </div>
        </section>
    )
}

export default BecomeStudent;
