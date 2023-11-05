import { createSlice } from '@reduxjs/toolkit';
import type {
  CountryType,
  OwnerType,
  SubmitRestaurantType,
  UserLkType,
} from '../../../../types/lkTypes/lkTypes';
import {
  getAllCountryThunk,
  getOwnerThunk,
  getUserRestaurants,
  getUserThunk,
  newRestaurantThunk,
  updateOwnerThunk,
  updateUserThunk,
} from './lkThuncks';

const initialState: {
  restaurant: SubmitRestaurantType[] | null;
} = {
  restaurant: null,
};

export const restSlice = createSlice({
  name: 'rest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserRestaurants.fulfilled, (state, action) => {
      state.restaurant = action.payload;
    });
  },
});
