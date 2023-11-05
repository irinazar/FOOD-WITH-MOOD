// import { createSlice } from '@reduxjs/toolkit';
// import type {
//   CountryType,
//   OwnerType,
//   SubmitRestaurantType,
//   UserLkType,
// } from '../../../../types/lkTypes/lkTypes';
// import {
//   getAllCountryThunk,
//   getOwnerThunk,
//   getUserRestaurants,
//   getUserThunk,
//   newRestaurantThunk,
//   updateOwnerThunk,
//   updateUserThunk,
// } from './lkThuncks';

// const initialState: {
//   ownernewrest: SubmitRestaurantType[] | null;
// } = {
//   ownernewrest: null,
// };

// export const restNewSlice = createSlice({
//   name: 'restnew',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(newRestaurantThunk.fulfilled, (state, action) => {
//         if (state.ownernewrest) {
//           state.ownernewrest = [...state.ownernewrest, action.payload];
//         } else {
//           state.ownernewrest = [action.payload];
//         }
//       });
//   },
// });
