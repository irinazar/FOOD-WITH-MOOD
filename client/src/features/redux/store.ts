import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/UserSlice';
import countryReducer from './slices/country/CountrySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    countries: countryReducer,
  },
});

export default store;
