import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { userMetaSlice } from './userMetaSlice';
import { userEnrollSlice } from './userEnrollSlice';
import { accommodationSlice } from './accommodationSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userMeta: userMetaSlice.reducer,
    userEnroll: userEnrollSlice.reducer,
    accommodation: accommodationSlice.reducer,
  },
});

export default store;