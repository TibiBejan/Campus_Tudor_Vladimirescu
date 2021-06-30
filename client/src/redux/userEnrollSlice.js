import { createSlice } from '@reduxjs/toolkit';

export const userEnrollSlice = createSlice({
    name: 'userEnroll',
    initialState: {
        enrollment: {},
        isEnrolled: false,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {
        requestEnroll: (state) => {
            state.isFetching = true;
        },
        receiveEnroll: (state, { payload }) => {
            state.enrollment = payload;
            state.isEnrolled = true;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        enrollError: (state, { payload }) => {
            state.enrollment = {};
            state.isEnrolled = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestUpdateEnroll: (state) => {
            state.isFetching = true;
        },
        receiveUpdateEnroll: (state, { payload }) => {
            state.enrollment = payload;
            state.isEnrolled = true;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        updateEnrollError: (state, { payload }) => {
            state.isEnrolled = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestDeleteEnroll: (state) => {
            state.isFetching = true;
        },
        receiveDeleteEnroll: (state, { payload }) => {
            state.enrollment = {};
            state.isEnrolled = false;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        deleteEnrollError: (state, { payload }) => {
            state.isEnrolled = true;
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },
    }
});

export const { 
    requestEnroll,
    receiveEnroll,
    enrollError,
    requestUpdateEnroll,
    receiveUpdateEnroll,
    updateEnrollError,
    requestDeleteEnroll,
    receiveDeleteEnroll,
    deleteEnrollError

} = userEnrollSlice.actions;
export const userEnrollSelector = (state) => state.userEnroll;
export default userEnrollSlice.reducer;