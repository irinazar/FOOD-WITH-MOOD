import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  OwnerType,
  CountryType,
  UserLkType,
  SubmitUserType2,
  SubmitRestaurantType2,
  SubmitRestaurantType,
} from '../../../../types/lkTypes/lkTypes';
import {
  editOwnerServer,
  editUserServer,
  getAllCountry,
  getOwnerServer,
  getUserRestaurantServer,
  getUserServer,
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
