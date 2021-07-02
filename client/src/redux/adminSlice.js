import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        selectedUser: {},
        searchedUsers: {},
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

        requestSearchedUsers: (state) => {
            state.isFetching = true;
        },
        receiveSearchedUsers: (state, { payload }) => {
            state.searchedUsers = payload;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        searchedUsersError: (state, { payload }) => {
            state.searchedUsers = {};
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
    requestSearchedUsers,
    receiveSearchedUsers,
    searchedUsersError,

} = adminSlice.actions;
export const adminSelector = (state) => state.admin;
export default adminSlice.reducer;