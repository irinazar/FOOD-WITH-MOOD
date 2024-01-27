import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  OwnerType,
  CountryType,
  UserLkType,
  SubmitUserType2,
  SubmitRestaurantType2,
  SubmitRestaurantType,
  CommentResponseType,
  ReplyType,
  FavoriteResponse,
  UserIdRestId,
} from '../../../../types/lkTypes/lkTypes';
import {
  allmyFavService,
  deleteBookingServer,
  deleteServer,
  editOwnerServer,
  editUserServer,
  favoriteService,
  getAllCountry,
  getBookingsServer,
  getCommentsServer,
  getOwnerServer,
  getUserRestaurantServer,
  getUserServer,
  newReplyComment,
  newRestaurantServer,
} from '../../../../services/lkService/lkService';
import type { BookingResponse } from '../../../../types/oneRestaurantType/oneRestaurantTypes';

export const getAllCountryThunk = createAsyncThunk<CountryType[]>('allcountry', async () =>
  getAllCountry().then((data) => data),
);

export const getOwnerThunk = createAsyncThunk<OwnerType, number>('owner', async (id) =>
  getOwnerServer(id).then((data) => data),
);
export const getUserThunk = createAsyncThunk<UserLkType, number>('user', async (id) =>
  getUserServer(id).then((data) => data),
);

export const updateUserThunk = createAsyncThunk<UserLkType, SubmitUserType2>(
  'updateuser',
  async (formdata) => editUserServer(formdata).then((data) => data),
);

export const updateOwnerThunk = createAsyncThunk<UserLkType, SubmitUserType2>(
  'updateowner',
  async (formdata) => editOwnerServer(formdata).then((data) => data),
);
export const newRestaurantThunk = createAsyncThunk<SubmitRestaurantType, SubmitRestaurantType2>(
  'newrestowner',
  async (formdata) => {
    const data = await newRestaurantServer(formdata);
    return data;
  },
);

export const getUserRestaurants = createAsyncThunk<SubmitRestaurantType[], number>(
  'getuserrest',
  async (id) => getUserRestaurantServer(id).then((data) => data),
);

export const deleteThunk = createAsyncThunk<number, number>('deleterest', async (id) =>
  deleteServer(id).then(() => id),
);

export const getMyComment = createAsyncThunk<CommentResponseType[], number>(
  'allcomment',
  async (id) => getCommentsServer(id).then((data) => data),
);

export const addNewReplyThunk = createAsyncThunk<ReplyType, ReplyType>(
  'addnewreply',
  async (data) => newReplyComment(data).then((res) => res),
);

export const favoriteThunk = createAsyncThunk<FavoriteResponse, UserIdRestId>(
  'favorite',
  async (data) => favoriteService(data).then((res) => res),
);

export const myFavoriteThunk = createAsyncThunk<FavoriteResponse[], number>(
  'allmyfav',
  async (data) => allmyFavService(data).then((res) => res),
);

export const getBookingsThunk = createAsyncThunk<BookingResponse[], number>(
  'getbookings',
  async(id) => getBookingsServer(id).then((data) => data)
)

export const deleteBookingThunk = createAsyncThunk('deletebooking', async(id: number) => deleteBookingServer(id).then((data) => data.message))

