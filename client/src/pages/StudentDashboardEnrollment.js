import React, { useState, useEffect } from 'react'
import axios from 'axios';
// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StudentDashboardCreateEnroll from '../components/StudentDashboard/StudentDashboardCreateEnroll/StudentDashboardCreateEnroll';
import StudentDashboardUpdateEnroll from '../components/StudentDashboard/StudentDashboardUpdateEnroll/StudentDashboardUpdateEnroll';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';
// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { requestEnroll, receiveEnroll, enrollError, userEnrollSelector } from '../redux/userEnrollSlice';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Inrolarea studentilor"
}

function StudentDashboardEnrollment() {

    // SLICE OF STATE
    const userEnrollSlice = useSelector(userEnrollSelector);
    const dispatch = useDispatch();
    // STATE
    const [ currentEnroll, setCurrentEnroll ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    // GET CURRENT ENROLLMENT ON FIRST RENDER
    useEffect(() => {
        const fetchCurrentEnroll = () => {
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    withCredentials: true,
                    credentials: 'include'
                }, 
            }
            
            dispatch(requestEnroll());

            axios.get('/api/v1/users/enrollment', reqConfig).then((response) => {
                const { enrollment } = response.data;
                dispatch(receiveEnroll(enrollment));
                setCurrentEnroll(enrollment);
                setIsLoading(false);
            }).catch(err => {
                dispatch(enrollError('There is an error with your informations'));
                setIsLoading(false);
            });
        }

        fetchCurrentEnroll();
    }, [dispatch]);

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <main className="page-content">
                <AuthBanner sectionData={ bannerData }/>    
                {
                    userEnrollSlice.isEnrolled ? <StudentDashboardUpdateEnroll sectionData={currentEnroll} /> : <StudentDashboardCreateEnroll />
                }
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default StudentDashboardEnrollment;
