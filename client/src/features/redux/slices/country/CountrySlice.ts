import { createSlice } from '@reduxjs/toolkit';
import type { CountryType } from '../../../../types/categoryType/categoryTypes';
import { allCountriesActionThunk } from './CountryThuncks';


const initialState: {
  countries: CountryType[];
  restaurants: null | CountryType[];
} = {
  countries: [],
  restaurants: null,

};

const countrySlice = createSlice({
  name: 'counties',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(allCountriesActionThunk.fulfilled, (state, action) => {
      state.countries = action.payload;
    });

  },
});

export default countrySlice.reducer;
