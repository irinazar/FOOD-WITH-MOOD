import { createSlice } from '@reduxjs/toolkit';
import type {
  SubmitRestaurantType,
} from '../../../../types/lkTypes/lkTypes';
import {
  getUserRestaurants,
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
