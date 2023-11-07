import { createSlice } from '@reduxjs/toolkit';
import type { CountryType, OneCountryType } from '../../../../types/categoryType/categoryTypes';
import { allCountriesActionThunk, deleteOneCountryActionThunk, oneCountryActionThunk } from './CountryThuncks';



const initialState: {
  countries: CountryType[];
  oneCountry: OneCountryType | null;
} = {
  countries: [],
  oneCountry: null,
};


const countrySlice = createSlice({
  name: 'counties',
  initialState,
  reducers: {
    clearAllRestaurants(state) {
      state.oneCountry= null
    }

  },
  extraReducers: (builder) => {
    builder.addCase(allCountriesActionThunk.fulfilled, (state, action) => {
      state.countries = action.payload;
    });

    builder.addCase(oneCountryActionThunk.fulfilled, (state, action) => {
      state.oneCountry = action.payload;
    });
 

  },
  
});

export default countrySlice.reducer;
export const {clearAllRestaurants} = countrySlice.actions;  
