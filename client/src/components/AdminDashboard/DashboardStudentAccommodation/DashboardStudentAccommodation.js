import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import NoHallCard from '../../SharedComponents/NoHallCard/NoHallCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { adminSelector } from '../../../redux/adminSlice';
import InitialTransition from '../../../utils/InitialTransition/InitialTransition';
import axios from 'axios';

import './DashboardStudentAccommodation.scss';

function DashboardStudentAccommodation() {

    // SLICE OF STATE
    const adminState = useSelector(adminSelector);
    // STATE
    const [ student, setStudent ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');

    // FETCH IMAGE ONLY IF STUDENT IS ACCOMMODATED
    let hallImage;
    if(adminState.selectedUser.hallId) {
        hallImage = require(`../../../assets/images/ResidenceHalls/campus-${adminState.selectedUser.hallId}.jpg`).default;
    }

    // EFFECT
    useEffect(() => {
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            },   
        }

        axios.get(`/api/v1/accommodated-user/${adminState.selectedUser.uuid}`, reqConfig).then((response) => {
            const { user } = response.data;
            setStudent(user);
            setIsLoading(false);
        }).catch(err => {
            setStudent({});
            setIsLoading(false);
            setError('Student can not be fetched, please try to refresh the page');
        });


    }, [adminState.selectedUser.uuid]);

    if(isLoading) {
        return <InitialTransition />
    }

    return (
        <section className="student-accommodation-section">
            <div className="student-accommodation-heading-wrapper">
                <h3 className="student-accommodation-title heading-three">Informatiile generale ale studentului</h3>    
                {error ? <GeneralErrorMessage>{error}</GeneralErrorMessage> : null} 
            </div>
            <div className="student-description">
                <ul className="student-descriptive-list">
                    <li className="descriptive-list-item">
                        <p className="list-item-label paragraph">Prenumele studentului: 
                            <span className="secondary-label">{student.first_name}</span>
                        </p>
                    </li>
                    <li className="descriptive-list-item">
                        <p className="list-item-label paragraph">Numele studentului: 
                            <span className="secondary-label">{student.last_name}</span>
                        </p>
                    </li>
                    <li className="descriptive-list-item">
                        <p className="list-item-label paragraph">E-mailul studentului: 
                            <span className="secondary-label">{student.email}</span>
                        </p>
                    </li>
                    <li className="descriptive-list-item">
                        <p className="list-item-label paragraph">Student creat pe data: 
                            <span className="secondary-label">{student.createdAt}</span>
                        </p>
                    </li>
                    <li className="descriptive-list-item">
                        <p className="list-item-label paragraph">Universitatea: 
                            <span className="secondary-label">{student.Enrollment ? student.Enrollment.university : 'Studentul nu este inrolat'}</span>
                        </p>
                    </li>
                    <li className="descriptive-list-item">
                        <p className="list-item-label paragraph">Tipul de studiu: 
                            {student.Enrollment ? (
                                <>
                                <span className="secondary-label">{`${student.Enrollment.type_of_study}`}</span>
                                in anul
                                <span className="secondary-label">{`${student.Enrollment.year_of_study}`}</span>
                                </>
                            ) : <span className="secondary-label">Studentul nu este inrolat</span>}
                        </p>
                    </li>
                    <li className="descriptive-list-item">
                        <p className="list-item-label paragraph">
                            Tipul de studiu si media anului precedent: 
                            {student.Enrollment ? (
                                <>
                                    <span className="secondary-label">{`${student.Enrollment.financial_type}`}</span>
                                    cu media
                                    <span className="secondary-label">{`${student.Enrollment.grade}`}</span>
                                </>
                            ) : <span className="secondary-label">Studentul nu este inrolat</span>}
                        </p>
                    </li>
                    <li className="descriptive-list-item">
                        <p className="list-item-label paragraph">
                            Nationalitatea studentului: 
                            <span className="secondary-label">{student.Enrollment ? student.Enrollment.nationality : <span className="secondary-label">Studentul nu este inrolat</span>}</span>
                        </p>
                    </li>
                    <li className="descriptive-list-item">
                        <p className="list-item-label paragraph">

                            {student.Enrollment && student.HallRoom ? (
                                <> 
                                    Pe baza informatiilor persoanle ale studentului:
                                    <span className="secondary-label">{`${student.first_name} ${student.last_name}`}</span>
                                    , acesta a fost repartizat in campusul Tudor Vladimirescu in caminul:
                                    <span className="secondary-label">{`T${student.hallId}`}</span>
                                    , in camera nu numarul: 
                                    <span className="secondary-label">{`${student.HallRoom.room_number}`}</span>
                                    , situata la
                                    <span className="secondary-label">{`${student.HallRoom.room_floor === 0 ? "parter" : `etajul ${student.HallRoom.room_floor}`}`}</span>
                                    Mai jos, se regasesc colegii de camera ai acestui student, precum si toate informatiile acestuia.
                                </>
                            ) : <span className="secondary-label">Studentul nu este inrolat</span>}
                        </p>
                    </li>
                </ul>
            </div>
            <div className="student-hall">
                { student.Hall ? 
                    <Link to={`/residence-halls/t${adminState.selectedUser.hallId}`} className="hall-card-wrapper">
                        <div className="hall-card">
                            <div className="hall-card-background">
                                <LazyLoadImage
                                    alt={`Camin T${adminState.selectedUser.hallId}`}
                                    src={hallImage}
                                    effect="blue"
                                    className="background-image"
                                    height={"100%"}
                                    width={"100%"}
                                />
                                {/* <img src={ hallImage } alt={`Camin T${adminState.selectedUser.hallId}`} className="background-image" /> */}
                            </div>
                            <div className="hall-card-content">
                                <h4 className="hall-card-title heading-four">Camin T{student.hallId}</h4>
                                <div className="hall-card-content-hovered">
                                    <span className="label">Studenti: {student.Hall.students_number}</span>
                                    <span className="label">Numar de camere: {student.Hall.rooms_number}</span>
                                    <span className="label">Studenti in camera: {student.Hall.student_per_room}</span>
                                    <span className="label">Media necesara: {student.Hall.min_grade}</span>
                                </div>
                            </div>
                        </div>
                    </Link> : <NoHallCard />
                }
            </div>
        </section>
    )
}

export default DashboardStudentAccommodation;
