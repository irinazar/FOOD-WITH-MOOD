import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user/UserSlice';
import oneRestaurantReducer from './slices/oneRestaurantSlice/oneRestaurantSlice';
import adminReducer from './slices/adminSlice/adminSlice';
import countryReducer from './slices/country/CountrySlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    oneRestaurant: oneRestaurantReducer,
    admin: adminReducer,
    countries: countryReducer,
  },
});

export default store;
