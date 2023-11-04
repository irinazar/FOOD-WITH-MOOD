import { createSlice } from '@reduxjs/toolkit';
import { getOneRestaurantThunk } from './oneRestaurantThunk';
import type { OneRestaurantType } from '../../../../types/oneRestaurantType/oneRestaurantTypes';

const initialState: { oneRestaurant: OneRestaurantType | null } = { oneRestaurant: null };

const oneRestaurantSlice = createSlice({
  name: 'oneRestaurant',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOneRestaurantThunk.fulfilled, (state, action) => {
      state.oneRestaurant = action.payload;
    });
  },
});

export default oneRestaurantSlice.reducer;
