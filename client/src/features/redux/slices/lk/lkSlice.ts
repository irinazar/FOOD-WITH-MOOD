import { createSlice } from '@reduxjs/toolkit';
import type { CountryType, OwnerType, UserLkType } from '../../../../types/lkTypes/lkTypes';
import {
  getAllCountryThunk,
  getOwnerThunk,
  getUserThunk,
  updateOwnerThunk,
  updateUserThunk,
} from './lkThuncks';

const initialState: {
  country: CountryType[];
  currentOwner: OwnerType | null;
  currentUserLk: UserLkType | null;
} = {
  country: [],
  currentOwner: null,
  currentUserLk: null,
};

export const lkSlice = createSlice({
  name: 'lk',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCountryThunk.fulfilled, (state, action) => {
      state.country = action.payload;
    });
    builder.addCase(getOwnerThunk.fulfilled, (state, action) => {
      state.currentOwner = action.payload;
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.currentUserLk = action.payload;
    });
    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      state.currentUserLk = action.payload;
    });
    builder.addCase(updateOwnerThunk.fulfilled, (state, action) => {
      state.currentOwner = action.payload;
    });
  },
});
