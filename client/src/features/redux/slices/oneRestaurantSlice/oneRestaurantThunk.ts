import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOneRestaurantService } from '../../../../services/oneRestaurantService/oneRestaurantService';
import type { OneRestaurantType } from '../../../../types/oneRestaurantType/oneRestaurantTypes';


export const getOneRestaurantThunk = createAsyncThunk<OneRestaurantType, number>(
  'restaurant/getOne',
  async (id: number) => getOneRestaurantService(id).then((data) => data));
