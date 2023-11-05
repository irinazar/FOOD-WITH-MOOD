import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/UserSlice';
import { lkSlice } from './slices/lk/lkSlice';
import { restSlice } from './slices/lk/restSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    lkReducer: lkSlice.reducer,
    restREducer: restSlice.reducer,
  },
});

export default store;
