import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/UserSlice';
import { lkSlice } from './slices/lk/lkSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    lkReducer: lkSlice.reducer
  },
});

export default store;
