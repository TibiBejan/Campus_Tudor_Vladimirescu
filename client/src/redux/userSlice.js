import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isFetching: false,
        isSuccess: false,
        isError: false,
        isAuthenticated: false,
        errorMessage: '',
    },
    reducers: {
        requestLogin: (state) => {
            state.isFetching = true;
            state.isAuthenticated = false;
        },
        receiveLogin: (state, { payload }) => {
            state.user = payload;
            state.isAuthenticated = true;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        loginError: (state, { payload }) => {
            state.isSuccess = false;
            state.isAuthenticated = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        handleLogout: (state) => {
            state.isSuccess = true;
            state.isFetching = false;
            state.isAuthenticated = false;
            state.isError = false;
            state.errorMessage = '';
            state.user = {};
        },
        logoutError: (state, { payload }) => {
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },

        requestCheckLogin: (state) => {
            state.isFetching = true;
            state.isAuthenticated = false;
        },
        receiveCheckLogin: (state, { payload }) => {
            state.user = payload;
            state.isAuthenticated = true;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        checkLoginError: (state, { payload }) => {
            state.isSuccess = false;
            state.isAuthenticated = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },
        
    },
});

export const { requestLogin, 
    receiveLogin, 
    loginError, 
    handleLogout, 
    logoutError, 
    requestCheckLogin,
    receiveCheckLogin,
    checkLoginError
} = userSlice.actions;
export const userSelector = (state) => state.user;
export default userSlice.reducer;

