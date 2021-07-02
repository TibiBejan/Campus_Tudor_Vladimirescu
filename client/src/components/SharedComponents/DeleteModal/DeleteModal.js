import React from 'react';
import deleteIllustation from '../../../assets/images/delete-illustration.svg';
import './DeleteModal.scss';

function DeleteModal({ deleteStudent, toggleModal, toggled }) {
    return (
        <div className={toggled.open ? "modal-wrapper open" : "modal-wrapper"}>
            <div className="modal-box">
                <div className="modal-box-inner">
                    <h3 className="heading-three">Sunteti sigur?</h3>
                    <p className="paragraph">Aceasta actiune nu poate fi revocata!</p>
                    <div className="delete-illustration">
                        <img src={deleteIllustation} alt="" className="background-image" />
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="modal-action-button" onClick={deleteStudent}>
                            <span className="label">Confirmă</span>
                        </button>
                        <button type="button" className="modal-action-button" onClick={toggleModal}>
                            <span className="label">Intoarce-te</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;
