import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { userMetaSlice } from './userMetaSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userMeta: userMetaSlice.reducer,
  },
});

export default store;