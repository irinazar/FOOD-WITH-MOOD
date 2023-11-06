import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBookingService, addOneCommentService, addRatingService, getOneRestaurantService } from '../../../../services/oneRestaurantService/oneRestaurantService';
import type { BookingInputType, BookingType, CommentType, OneRestaurantType, PictureType, RatingType } from '../../../../types/oneRestaurantType/oneRestaurantTypes';


export const getOneRestaurantThunk = createAsyncThunk<{oneRestaurant: OneRestaurantType, comments: CommentType[], pictures: PictureType[], averageRating: number}, number>(
  'restaurant/getOne',
  async (id: number) => getOneRestaurantService(id).then((data) => data));

export const addCommentThunk = createAsyncThunk<CommentType, { id: number; body: string }>(
  'restaurant/addComment',
  async ({ id, body }) => addOneCommentService(id, body).then((data) => data)
);

export const addRatingThunk = createAsyncThunk<RatingType, { id: number; rating: number }>(
  'restaurant/addRating',
  async ({ id, rating }) => addRatingService(id, rating).then((data) => data)
);

export const addBookingThunk = createAsyncThunk<BookingType, { id: number; formData: BookingInputType}>(
  'restaurant/addBooking',
  async({ id, formData}) => addBookingService(id, formData).then((data) => data)
)