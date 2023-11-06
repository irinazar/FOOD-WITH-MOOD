import { createAsyncThunk } from '@reduxjs/toolkit';
import type { OneRestaurantType } from '../../../../types/oneRestaurantType/oneRestaurantTypes';
import { acceptRestaurantService, declineRestaurantService, getPendingRestaurantService } from '../../../../services/adminService/adminService';


export const getPendingRestaurantThunk = createAsyncThunk<OneRestaurantType[], void>(
  'admin/getPendingRestaurant',
  async () => getPendingRestaurantService().then((data) => data)
);


export const acceptRestaurantThunk = createAsyncThunk<OneRestaurantType, number>(
  'admin/acceptRestaurant',
  async (restaurantId) => acceptRestaurantService(restaurantId).then((data) => data)
);


export const declineRestaurantThunk = createAsyncThunk<OneRestaurantType, number>(
  'admin/declineRestaurant',
  async (restaurantId) => declineRestaurantService(restaurantId).then((data) => data)
);