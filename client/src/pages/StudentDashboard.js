import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAccommodation, receiveAccommodation, accommodationError, accommodationSelector } from '../redux/accommodationSlice';
import { userSelector } from '../redux/userSlice';
import axios from 'axios';

// COMPONENTS
import AuthBanner from '../components/SharedComponents/AuthBanner/AuthBanner';
import StudentDashboardMain from '../components/StudentDashboard/StudentDashboardMain/StudentDashboardMain';
import StudentDashboardAccommodate from '../components/StudentDashboard/StudentDashboardAccommodate/StudentDashboardAccommodate';
import StatsSection from '../components/SharedComponents/StatsSection/StatsSection';
import Footer from '../components/LayoutComponents/Footer/Footer';


// DATA
const bannerData = {
    isLink: null,
    subtitle: "Informatii general si repartizare"
}

function Dashboard() {

    // SLICE OF STATE
    const accommodationState = useSelector(accommodationSelector);
    const userState = useSelector(userSelector);
    const dispatch = useDispatch();
    // STATE
    const [ isLoading, setIsLoading ] = useState(true);

    // GET CURRENT ENROLLMENT ON FIRST RENDER
    useEffect(() => {
        const fetchAccommodation = () => {
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    withCredentials: true,
                    credentials: 'include'
                }, 
            }

            if(!userState.user.uuid) {
                return;
            }

            dispatch(requestAccommodation());

            axios.get(`/api/v1/accommodation/${userState.user.uuid}`, reqConfig).then((response) => {
                const { accommodatedUser } = response.data;
                dispatch(receiveAccommodation(accommodatedUser));
                setIsLoading(false);
            }).catch(err => {
                dispatch(accommodationError('There is an error with your informations, please try again later'));
                setIsLoading(false);
            });
        }

        fetchAccommodation();
    }, [dispatch, userState.user.uuid]);

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <main className="page-content">
                <AuthBanner sectionData={ bannerData }/>    
                {
                    accommodationState.isAccommodated ?
                        <StudentDashboardAccommodate /> 
                        : <StudentDashboardMain />
                }
                <StatsSection />
            </main>
            <Footer /> 
        </>
    )
}

export default Dashboard
