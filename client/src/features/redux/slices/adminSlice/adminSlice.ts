import { createSlice } from '@reduxjs/toolkit';
import { getPendingRestaurantThunk, acceptRestaurantThunk, declineRestaurantThunk } from './adminThunk';
import type { OneRestaurantType } from '../../../../types/oneRestaurantType/oneRestaurantTypes';

const initialState: {
  pendingRestaurants: OneRestaurantType[];
 
} = { pendingRestaurants: [] };

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPendingRestaurantThunk.fulfilled, (state, action) => {
      state.pendingRestaurants = action.payload;
    });

    builder.addCase(acceptRestaurantThunk.fulfilled, (state,action) => {
      const acceptedRestaurant = state.pendingRestaurants.find((el) => el.id === action.payload.id)
      if (acceptedRestaurant) {
        acceptedRestaurant.status = 'Accepted';
      }
    });

    builder.addCase(declineRestaurantThunk.fulfilled, (state, action) => {
      const declinedRestaurant = state.pendingRestaurants.find((restaurant) => restaurant.id === action.payload.id);
  if (declinedRestaurant) {
    declinedRestaurant.status = 'Declined';
  }
    });
  },
});

export default adminSlice.reducer;