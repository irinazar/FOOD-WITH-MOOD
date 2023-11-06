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
} from '../../../../types/lkTypes/lkTypes';
import {
  deleteServer,
  editOwnerServer,
  editUserServer,
  getAllCountry,
  getCommentsServer,
  getOwnerServer,
  getUserRestaurantServer,
  getUserServer,
  newReplyComment,
  newRestaurantServer,
} from '../../../../services/lkService/lkService';

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
