import { createSlice } from '@reduxjs/toolkit';
import { addBookingThunk, addCommentThunk, getOneRestaurantThunk } from './oneRestaurantThunk';
import type {
  BookingType,
  CommentType,
  OneRestaurantType,
  PictureType,
} from '../../../../types/oneRestaurantType/oneRestaurantTypes';

const initialState: {
  oneRestaurant: OneRestaurantType | null;
  comments: CommentType[];
  pictures: PictureType[];
  booking: BookingType[];
  averageRating: number;
} = { oneRestaurant: null, comments: [], pictures: [], booking: [], averageRating: 0 };

const oneRestaurantSlice = createSlice({
  name: 'oneRestaurant',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOneRestaurantThunk.fulfilled, (state, action) => {
      state.oneRestaurant = action.payload.oneRestaurant;
      state.comments = action.payload.comments;
      state.pictures = action.payload.pictures;
      state.averageRating = action.payload.averageRating
    });

    builder.addCase(addCommentThunk.fulfilled, (state, action) => {
      state.comments.push(action.payload);
    });

    builder.addCase(addBookingThunk.fulfilled, (state, action) => {
      if (state.booking !== null) {
        state.booking.push(action.payload);
      }
    });
  },
});

export default oneRestaurantSlice.reducer;
