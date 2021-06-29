import { createSlice } from '@reduxjs/toolkit';

export const userMetaSlice = createSlice({
    name: 'userMeta',
    initialState: {
        userKins: [],
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
    }
});

export const { 
    requestKins, 
    receiveKins, 
    kinsError, 

} = userMetaSlice.actions;
export const userMetaSelector = (state) => state.userMeta;
export default userMetaSlice.reducer;
