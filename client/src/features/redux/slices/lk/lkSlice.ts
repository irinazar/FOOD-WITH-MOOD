
import { createSlice } from '@reduxjs/toolkit';
import type {
  CommentResponseType,
  CountryType,
  OwnerType,
  SubmitRestaurantType,
  UserLkType,
} from '../../../../types/lkTypes/lkTypes';
import {
  addNewReplyThunk,
  deleteThunk,
  getAllCountryThunk,
  getBookingsThunk,
  getMyComment,
  getOwnerThunk,
  getUserRestaurants,
  getUserThunk,
  newRestaurantThunk,
  updateOwnerThunk,
  updateUserThunk,
} from './lkThuncks';
import type { BookingResponse } from '../../../../types/oneRestaurantType/oneRestaurantTypes';

const initialState: {
  country: CountryType[];
  currentOwner: OwnerType | null;
  currentUserLk: UserLkType | null;
  comments: CommentResponseType[] | null;
  bookings: {
    bookings: BookingResponse[]
  }
} = {
  country: [],
  currentOwner: null,
  currentUserLk: null,
  comments: null,
  bookings: {
    bookings: []
  }
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
    builder.addCase(addNewReplyThunk.fulfilled, (state, action) => {
      if (state.comments) {
        state.comments.map((el) =>
          el.id === action.payload.commentId
            ? el.CommentReplies.push(action.payload)
            : el.CommentReplies,
        );
      }
    });

    builder.addCase(getBookingsThunk.fulfilled, (state, action) => {
      state.bookings = action.payload
    })
  },
});
