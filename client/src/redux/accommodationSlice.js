import { createSlice } from '@reduxjs/toolkit';

export const accommodationSlice = createSlice({
    name: 'accommodation',
    initialState: {
        accommodation: {},
        isAccommodated: false,
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: '',
    },
    reducers: {
        requestAccommodation: (state) => {
            state.isFetching = true;
        },
        receiveAccommodation: (state, { payload }) => {
            state.accommodation = payload;
            state.isAccommodated = true;
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = '';
        },
        accommodationError: (state, { payload }) => {
            state.accommodation = {};
            state.isAccommodated = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;
        },
    }
});

export const { 
    requestAccommodation,
    receiveAccommodation,
    accommodationError,

} = accommodationSlice.actions;
export const accommodationSelector = (state) => state.accommodation;
export default accommodationSlice.reducer;