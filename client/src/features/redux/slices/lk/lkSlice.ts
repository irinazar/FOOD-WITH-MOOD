import { createSlice } from '@reduxjs/toolkit';
import type {
  CommentResponseType,
  CountryType,
  OwnerType,
  SubmitRestaurantType,
  UserLkType,
} from '../../../../types/lkTypes/lkTypes';
import {
  deleteThunk,
  getAllCountryThunk,
  getMyComment,
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
  comments: CommentResponseType[] | null;
} = {
  country: [],
  currentOwner: null,
  currentUserLk: null,
  comments: null,
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
      if (state.currentOwner) {
        state.currentOwner = { ...state.currentOwner, ...action.payload };
      }
    });
    builder.addCase(newRestaurantThunk.fulfilled, (state, action) => {
      if (state.currentOwner) {
        state.currentOwner.Restaurants.push(action.payload);
      }
    });
    builder.addCase(deleteThunk.fulfilled, (state, action) => {
      if (state.currentOwner) {
        state.currentOwner.Restaurants = state.currentOwner.Restaurants.filter(
          (el) => Number(el.id) !== action.payload,
        );
      }
    });
    builder.addCase(getMyComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});
