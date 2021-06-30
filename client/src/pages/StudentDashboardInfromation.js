import React, { useState, useEffect } from 'react'

// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StudentDashboardCreateInfo from '../components/StudentDashboard/StudentDashboardCreateInfo/StudentDashboardCreateInfo';
import StudentDashboardUpdateInfo from '../components/StudentDashboard/StudentDashboardUpdateInfo/StudentDashboardUpdateInfo';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';
import axios from 'axios';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { requestGetMeta, receiveGetMeta, getMetaError, userMetaSelector } from '../redux/userMetaSlice';

// DATA
const bannerData = {
    isLink: null,
    subtitle: "Informatii generale"
}

function StudentDashboardInfromation() {

    // SLICE OF STATE
    const userMetaState = useSelector(userMetaSelector);
    const dispatch = useDispatch();
    // STATE
    const [ currentInfo, setCurrentInfo ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    // GET CURRENT INFORMATIONS ON FIRST RENDER
    useEffect(() => {
        const fetchCurrentInfo = () => {
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    withCredentials: true,
                    credentials: 'include'
                }, 
            }
            
            dispatch(requestGetMeta());

            axios.get(`/api/v1/users/student-meta`, reqConfig).then((response) => {
                const { studentMeta } = response.data;
                dispatch(receiveGetMeta(studentMeta));
                setCurrentInfo(studentMeta);
                setIsLoading(false);
            }).catch(err => {
                dispatch(getMetaError('There is an error with your informations'));
                setIsLoading(false);
            });
        }

        fetchCurrentInfo();
    }, [dispatch]);

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <main className="page-content">
                <AuthBanner sectionData={ bannerData }/>    
                {
                    userMetaState.isMetaCreated ? <StudentDashboardUpdateInfo sectionData={currentInfo}/> : <StudentDashboardCreateInfo />
                }
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default StudentDashboardInfromation;

