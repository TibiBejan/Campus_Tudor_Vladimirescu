import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAccommodation, receiveAccommodation, accommodationError, accommodationSelector } from '../redux/accommodationSlice';
import { userSelector } from '../redux/userSlice';
import { userEnrollSelector } from '../redux/userEnrollSlice';
import axios from 'axios';
import InitialTransition from '../utils/InitialTransition/InitialTransition';

// COMPONENTS
import Header from '../components/LayoutComponents/Header/Header';
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

function StudentDashboard() {

    // SLICE OF STATE
    const accommodationState = useSelector(accommodationSelector);
    const userState = useSelector(userSelector);
    const userEnrollState = useSelector(userEnrollSelector);
    const dispatch = useDispatch();
    // STATE
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isAccommodated, setIsAccommodated ] = useState({});

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

            dispatch(requestAccommodation());

            ///api/v1/accommodation/${userState.user.uuid}

            axios.get(`/api/v1/accommodation/${userState.user.uuid}`, reqConfig).then((response) => {
                const { accommodatedUser } = response.data;
                dispatch(receiveAccommodation(accommodatedUser));
                setIsAccommodated(accommodatedUser);
                setIsLoading(false);
            }).catch(err => {
                dispatch(accommodationError('There is an error with your informations, please try again later'));
                setIsLoading(false);
                setIsAccommodated({});
            });
        }

        fetchAccommodation();

        return () => {
            setIsAccommodated({});
        }
    }, [dispatch, userState.user.uuid, userEnrollState]);

    if(isLoading) {
        return <InitialTransition />
    }

    return (
        <>
            <InitialTransition />
            <Header />
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

export default StudentDashboard
