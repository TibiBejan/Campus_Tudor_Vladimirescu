import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        selectedUser: {},
        students: [],
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {
        requestSelectedUser: (state) => {
            state.isFetching = true;
        },
        receiveSelectedUser: (state, { payload }) => {
            state.selectedUser = payload;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        selectedUserError: (state, { payload }) => {
            state.selectedUser = {};
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestStudents: (state) => {
            state.isFetching = true;
        },
        receiveStudents: (state, { payload }) => {
            state.students = payload;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        studentsError: (state, { payload }) => {
            state.students = [];
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestDeleteStudents: (state) => {
            state.isFetching = true;
        },
        receiveDeleteStudents: (state, { payload }) => {
            state.students = state.students.filter((student) => student.uuid !== payload);
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        studentsDeleteError: (state, { payload }) => {
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },
    }
});

export const { 
    requestSelectedUser,
    receiveSelectedUser,
    selectedUserError,
    requestStudents,
    receiveStudents,
    studentsError,
    requestDeleteStudents,
    receiveDeleteStudents,
    studentsDeleteError

} = adminSlice.actions;
export const adminSelector = (state) => state.admin;
export default adminSlice.reducer;