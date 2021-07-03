import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, useHistory } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import DeleteModal from '../../SharedComponents/DeleteModal/DeleteModal';
import GeneralErrorMessage from '../../SharedComponents/GeneralErrorMessage/GeneralErrorMessage';

import { useDispatch } from 'react-redux';
import { 
    requestDeleteStudents,
    receiveDeleteStudents, 
    studentsDeleteError,
    requestSelectedUser,
    receiveSelectedUser,
    selectedUserError
} from '../../../redux/adminSlice';
import axios from 'axios';
import './AdminDashboardPagination.scss';
function AdminDashboardPagination({ studentsData }) {

    const dispatch = useDispatch();
    const history = useHistory();
    // STATE
    const [ pageNumber, setPageNumber ] = useState(0);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ studentId, setStudentId ] = useState(null);
    const [ error, setError ] = useState('');

    const tuiasiLogo = require(`../../../assets/images/Universities/embleme-tuiasi-rr-1-300x189.png`).default

    // HANDLE DELETE STUDENT
    const handleDelete = () => {
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            },   
        }

        dispatch(requestDeleteStudents());

        axios.delete(`/api/v1/users/${studentId}`, reqConfig).then((response) => {
            setModalOpen(false);
            setStudentId(null);
            dispatch(receiveDeleteStudents(studentId));
        }).catch(err => {
            setModalOpen(false);
            setStudentId(null);
            setError('Student can not be deleted, please try again later');
            dispatch(studentsDeleteError('Student can not be deleted, please try again later'));
        });
    }

    // HANDLE DISPATCH SELECTED STUDENT
    const dispatchSelectedStudent = (id) => {
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

    const toggleModal = (id) => {
        if(modalOpen === false) {
            setModalOpen(true);
            setStudentId(id);
        } else if (modalOpen === true) {
            setModalOpen(false);
            setStudentId(null);
        }
    }

    // RESET SCROLL POS ON PAGINATION
    useEffect(() => {
        window.scrollTo(0,0);
    }, [pageNumber])

    const students = studentsData;
    const studentsPerPage = 10;
    const pagesVisited = pageNumber * studentsPerPage;

    const pageCount = Math.ceil(students.length / studentsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const displayUsers = students.slice(pagesVisited, pagesVisited + studentsPerPage).map((student, index) => { 
        let status = '';
        if(student.Enrollment === null || student.Enrollment === undefined) {
            status = 'Autentificat'
        } else if(student.Enrollment && student.hallId === null) {
            status = 'Inrolat';
        } else if (student.Enrollment && student.hallId) {
            status = 'Cazat';
        }

       
        

        return (
            <div className="student-block" key={`student-${student.uuid}`}>
                <div className='student-block-primary-color' />
                <div className="student-block-uni-logo">
                    <img 
                        src={tuiasiLogo} 
                        alt="Student Tuiasi"
                        className="background-image" />
                </div>
                <div className="student-block-label-wrapper">
                    <span className="label">Prenume</span>
                    <span className="label-medium">{student.first_name}</span>
                </div>
                <div className="student-block-label-wrapper">
                    <span className="label">Nume</span>
                    <span className="label-medium">{student.last_name}</span>
                </div>
                <div className="student-block-label-wrapper">
                    <span className="label">Status</span>
                    <span className="label-medium">{status}</span>
                </div>
                <div className="student-block-actions">
                    <button type="button" className="button-action" onClick={() => dispatchSelectedStudent(student.uuid)}>
                        <IconContext.Provider value={{size: '24px', color: '#fafafa'}}>
                            <FaRegEdit />
                        </IconContext.Provider>
                    </button>
                    <button type="button" className="button-action" onClick={() => toggleModal(student.uuid)}>
                        <IconContext.Provider value={{size: '24px', color: '#fafafa'}} >
                            <BsTrash  className="button-action-icon"/>
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        )
    });


    return (
        <>
            <DeleteModal toggled={modalOpen} toggleModal={toggleModal} handleDelete={handleDelete}/>
            { error ? <GeneralErrorMessage>{error}</GeneralErrorMessage> : null}
            <div className="pagination-content-blocks">
                {displayUsers}
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination-buttons-wrapper"}
                previousLinkClassName={"previous-button"}
                nextLinkClassName={"next-button"}
                disabledClassName={"pagination-disabled"}
                activeClassName={"pagination-active"}
            />
        </>
    )
}


export default AdminDashboardPagination;
