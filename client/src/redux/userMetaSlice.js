import { createSlice } from '@reduxjs/toolkit';

export const userMetaSlice = createSlice({
    name: 'userMeta',
    initialState: {
        userKins: [],
        currentKin: {},
        userMeta: {},
        isMetaCreated: false,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {
        requestKins: (state) => {
            state.isFetching = true;
        },
        receiveKins: (state, { payload }) => {
            state.userKins = payload;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        kinsError: (state, { payload }) => {
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestKin: (state) => {
            state.isFetching = true;
        },
        receiveKin: (state, { payload }) => {
            state.currentKin = payload;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        kinError: (state, { payload }) => {
            state.currentKin = {};
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestCreateMeta: (state) => {
            state.isFetching = true;
        },
        receiveCreateMeta: (state, { payload }) => {
            state.userMeta = payload;
            state.isMetaCreated = true;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        createMetaError: (state, { payload }) => {
            state.userMeta = {};
            state.isMetaCreated = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestGetMeta: (state) => {
            state.isFetching = true;
        },
        receiveGetMeta: (state, { payload }) => {
            state.userMeta = payload;
            state.isMetaCreated = true;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        getMetaError: (state, { payload }) => {
            state.userMeta = {};
            state.isMetaCreated = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestUpdateMeta: (state) => {
            state.isFetching = true;
        },
        receiveUpdateMeta: (state, { payload }) => {
            state.userMeta = payload;
            state.isMetaCreated = true;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        updateMetaError: (state, { payload }) => {
            state.isMetaCreated = true;
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestDeleteMeta: (state) => {
            state.isFetching = true;
        },
        receiveDeleteMeta: (state) => {
            state.userMeta = {};
            state.isMetaCreated = false;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        deleteMetaError: (state, { payload }) => {
            state.isMetaCreated = true;
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        }
    }
});

export const { 
    requestKins, 
    receiveKins, 
    kinsError, 
    requestKin,
    receiveKin,
    kinError,
    requestCreateMeta,
    receiveCreateMeta,
    createMetaError,
    requestGetMeta,
    receiveGetMeta,
    getMetaError,
    requestUpdateMeta,
    receiveUpdateMeta,
    updateMetaError,
    requestDeleteMeta,
    receiveDeleteMeta,
    deleteMetaError

} = userMetaSlice.actions;
export const userMetaSelector = (state) => state.userMeta;
export default userMetaSlice.reducer;
