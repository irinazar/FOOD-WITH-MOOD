import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  allCountriesService,
  oneCountryService,
} from '../../../../services/countryService/countryService';
import type { CountryType, OneCountryType } from '../../../../types/categoryType/categoryTypes';

export const allCountriesActionThunk = createAsyncThunk<CountryType[]>('county/all', async () =>
  allCountriesService().then((res) => res),
);

export const oneCountryActionThunk = createAsyncThunk<OneCountryType, number>(
  'country/one',
  async (id) => {
    const response = await oneCountryService(id);
    // console.log(response);
    return response;
  },
);

export const deleteOneCountryActionThunk = createAsyncThunk<OneCountryType, number>(
  'delete',
  async () => {
    console.log('Запрос на удаление страны с ID');
  },
);
