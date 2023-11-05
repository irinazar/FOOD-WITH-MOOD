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
  country: CountryType[];
  currentOwner: OwnerType | null;
  currentUserLk: UserLkType | null;
} = {
  country: [],
  currentOwner: null,
  currentUserLk: null,
};

export const lkSlice = createSlice({
  name: 'lk',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCountryThunk.fulfilled, (state, action) => {
      state.country = action.payload;
    });
    builder.addCase(getOwnerThunk.fulfilled, (state, action) => {
      state.currentOwner = action.payload;
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.currentUserLk = action.payload;
    });
    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      state.currentUserLk = action.payload;
    });
    builder.addCase(updateOwnerThunk.fulfilled, (state, action) => {
      state.currentOwner = { ...state.currentOwner, ...action.payload };
    });
    builder.addCase(newRestaurantThunk.fulfilled, (state, action) => {
      if (state.currentOwner) {
        state.currentOwner.Restaurants.push(action.payload);
      }
    });
  },
});
