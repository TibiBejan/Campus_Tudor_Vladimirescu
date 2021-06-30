import React, { useState } from 'react';
import { useHistory } from 'react-router';
import StudentDashboardNav from '../StudentDashboardNav/StudentDashboardNav';
import ErrorMessageEl from '../../SharedComponents/FormErrorMessage/ErrorMessage';
import ButtonPrimary from '../../SharedComponents/Button/ButtonPrimary';
import axios from 'axios';

// REDUX
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/userSlice'; 

import enrollIllustration from '../../../assets/images/Enrollment-complete.svg';
import './StudentDashboardEnrollSuccess.scss';

function StudentDasboardEnrollSuccess() {

    // REDUX
    const userState = useSelector(userSelector);
    const history = useHistory();
    // STATE
    const [ formError, setFormError ] = useState('');

    // ACCOMMODATE STUDENT
    const accommodateStudent = () => {
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            }, 
        }

        axios.get('/api/v1/users/studentAllocation', reqConfig).then((response) => {
            if(response.status === 200 || response.status === 201) {
                history.push(`/${userState.user.first_name}.${userState.user.last_name}/dashboard`);
            } else {
                setFormError('You are already enrolled');
            }
        }).catch(err => {
            setFormError('You are already enrolled');
        });
    }

    return (
        <section className="dashboard-enroll-success">
            <div className="dashboard-enroll-success-inner">
                <StudentDashboardNav />
                <ErrorMessageEl>{formError}</ErrorMessageEl>
                <div className="enroll-success-illustration">
                    <img src={enrollIllustration} alt="Enrollment complete illustration" className="background-image" />
                </div>
                <ButtonPrimary type="button" onClick={accommodateStudent} textLabel="Confirma si finalizeaza inrolarea" />
            </div>
        </section>
    )
}

export default StudentDasboardEnrollSuccess;
