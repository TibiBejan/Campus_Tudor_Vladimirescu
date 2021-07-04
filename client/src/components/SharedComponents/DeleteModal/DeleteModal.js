import React, { useEffect } from 'react';
import deleteIllustation from '../../../assets/images/delete-illustration.svg';
import './DeleteModal.scss';

function DeleteModal({ handleDelete, toggleModal, toggled }) {

    useEffect(() => {
        toggled ? document.body.style.overflow = 'hidden' : document.body.style.overflowY = 'scroll';
        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [toggled]);

    return (
        <div className={toggled ? "modal-wrapper open" : "modal-wrapper"}>
            <div className="modal-box">
                <div className="modal-box-inner">
                    <h3 className="heading-three">Sunteti sigur?</h3>
                    <p className="paragraph">Aceasta actiune nu poate fi revocata!</p>
                    <div className="delete-illustration">
                        <img src={deleteIllustation} alt="" className="background-image" />
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="modal-action-button" onClick={handleDelete}>
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
