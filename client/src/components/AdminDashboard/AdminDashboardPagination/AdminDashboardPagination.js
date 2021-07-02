import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import DeleteModal from '../../SharedComponents/DeleteModal/DeleteModal';
import { IconContext } from 'react-icons';
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import axios from 'axios';

import './AdminDashboardPagination.scss';

function AdminDashboardPagination({ studentsData }) {

    // STATE
    const [ pageNumber, setPageNumber ] = useState(0);
    const [ modalOpen, setModalOpen ] = useState({
        open: false,
        studentId: null
    });

    const handleDelete = () => {
        const reqConfig = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                withCredentials: true,
                credentials: 'include'
            },   
        }

        axios.delete(`/api/v1/users/${modalOpen.studentId}`, reqConfig).then((response) => {
            setModalOpen({
                open: false,
                studentId: null
            });
        }).catch(err => {
            setModalOpen({
                open: false,
                studentId: null
            });
        });
    }

    const toggleModal = (e) => {
        if(modalOpen.open === false) {
            setModalOpen({
                open: true,
                studentId: e.target.parentElement.attributes['data-uuid'].nodeValue
            });
        } else if (modalOpen.open === true) {
            setModalOpen({
                open: false,
                studentId: null
            });
        }
    }

    console.log(modalOpen)

    const students = studentsData.slice(0, 15);
    const studentsPerPage = 15;
    const pagesVisited = pageNumber * studentsPerPage;

    const displayUsers = students.slice(pagesVisited, pagesVisited + studentsPerPage).map((student, index) => {
        
        let status = '';
        if(!student.Enrollment) {
            status = 'Autentificat'
        } else if(student.Enrollment && student.hallId === null) {
            status = 'Inrolat';
        } else if (student.Enrollment && student.hallId) {
            status = 'Cazat';
        }

        return (
            <div className="table-row" key={`student-${student.uuid}`}>
                <div className="table-col">
                    <span className="label">{index + 1}</span>
                </div>
                <div className="table-col">
                    <span className="label">{student.first_name}</span>
                </div>
                <div className="table-col">
                    <span className="label">{student.last_name}</span>
                </div>
                <div className="table-col">
                    <span className="label">{student.email}</span>
                </div>
                <div className="table-col">
                    <span className="label">{status}</span>
                </div>
                <div className="table-col">
                    <Link to="" className="button-action">
                        <IconContext.Provider value={{size: '30px', color: '#fafafa'}}>
                            <FaRegEdit />
                        </IconContext.Provider>
                    </Link>
                    <button type="button" className="button-action" onClick={toggleModal} data-uuid={student.uuid}>
                        <IconContext.Provider value={{size: '30px', color: '#fafafa'}}>
                            <BsTrash />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        )
    });
    const pageCount = Math.ceil(students.length / studentsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className="table">
                <div className="table-head">
                    <div className="table-col">
                        <span className="label label-medium">Id</span>
                    </div>
                    <div className="table-col">
                        <span className="label label-medium">First Name</span>
                    </div>
                    <div className="table-col">
                        <span className="label label-medium">Last Name</span>
                    </div>
                    <div className="table-col hidden-mobile">
                        <span className="label label-medium">Email</span>
                    </div>
                    <div className="table-col hidden-mobile">
                        <span className="label label-medium">Status</span>
                    </div>
                    <div className="table-col hidden-mobile">
                        <span className="label label-medium">Actions</span>
                    </div>
                </div>
                {displayUsers}
            </div>
            <DeleteModal toggled={modalOpen} toggleModal={toggleModal} deleteStudent={handleDelete}/>
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
