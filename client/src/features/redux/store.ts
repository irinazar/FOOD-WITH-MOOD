import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/UserSlice';
import { lkSlice } from './slices/lk/lkSlice';
import { restSlice } from './slices/lk/restSlice';
import { restNewSlice } from './slices/lk/lkNewSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    lkReducer: lkSlice.reducer,
    restREducer: restSlice.reducer,
    // restNewReducer: restNewSlice.reducer,
  },
});

export default store;
