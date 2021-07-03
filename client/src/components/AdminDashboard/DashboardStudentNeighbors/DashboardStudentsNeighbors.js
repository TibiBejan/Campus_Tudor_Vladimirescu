import React, { useState, useEffect } from 'react';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';
import EmptyNeighbordCard from '../../SharedComponents/EmptyNeighborCard/EmptyNeighbordCard';
import NeighborCard from '../../SharedComponents/NeighborCard/NeighborCard';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { requestSelectedUser, receiveSelectedUser, selectedUserError } from '../../../redux/adminSlice';
import { adminSelector } from '../../../redux/adminSlice';
import axios from 'axios';


// SWIPER SLIDER
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import './DashboardStudentsNeighbors.scss';

function DashboardStudentsNeighbors() {

    // SLICE OF STATE
    const dispatch = useDispatch();
    const adminState = useSelector(adminSelector);
    const history = useHistory();
    // STATE
    const [ students, setStudents ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');

    // EFFECT
    useEffect(() => {
        const fetchNeighbors = () => {
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    withCredentials: true,
                    credentials: 'include'
                },   
            }
    
            axios.get(`/api/v1/student-neighbors/${adminState.selectedUser.uuid}`, reqConfig).then((response) => {
                const { fetchedNeighbors } = response.data;
                const filteredNeighbors = fetchedNeighbors.filter(student => student.email !== adminState.selectedUser.email);
                setStudents(filteredNeighbors);
                setIsLoading(false);
            }).catch(err => {
                const message = err.response.data.errors ? err.response.data.errors[0].msg : err.response.data.message;
                setStudents([]);
                setIsLoading(false);
                setError(message ? message : 'Neighbors can not be fetched, please try to refresh the page');
            });
        }
       
        fetchNeighbors();
    }, [adminState.selectedUser]);

    // HANDLE SELECTED STUDENT CHANGE
    const hadleStudentChange = (id) => {
        const studentId = id;
    
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            },   
        }

        dispatch(requestSelectedUser());

        axios.get(`/api/v1/users/${studentId}`, reqConfig).then((response) => {
            const { user } = response.data;
            dispatch(receiveSelectedUser(user));
            history.push(`/admin/${user.uuid}`);
        }).catch(err => {
            setError('Student can not be selected, please try again later');
            dispatch(selectedUserError('Student can not be selected, please try again later'));
        });
    }

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <section className="student-neighbors-section">
            <div className="student-neighbors-heading-wrapper">
                <h3 className="student-accommodation-title heading-three">Colegi de camera</h3>    
                {error ? <GeneralErrorMessage>{error}</GeneralErrorMessage> : null} 
            </div>
            <div className="student-accommodation-neighbors">
                <Swiper 
                    slidesPerView={1}
                    breakpoints={{
                        1366: {slidesPerView: 2.5},
                        1250: {slidesPerView: 2},
                        768: {slidesPerView: 1.5},
                        767: {slidesPerView: 1}
                    }}
                    grabCursor={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    spaceBetween={50}
                    speed={1000}
                    className="dashboard-accommodate-slider"
                >
                    {students.length === 0 && (
                        <SwiperSlide>
                            <EmptyNeighbordCard message="In acest moment, acest student nu are colegi de camera"/>
                        </SwiperSlide>
                    )}
                    {students.map(student => (
                        <SwiperSlide key={`person-card-${student.email}`}>
                            <Link onClick={() => hadleStudentChange(student.uuid)}>
                                <NeighborCard cardData={student} disabledDetails/>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default DashboardStudentsNeighbors;
