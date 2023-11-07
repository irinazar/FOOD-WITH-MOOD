import { createSlice } from '@reduxjs/toolkit';
import type {
  CommentResponseType,
  CountryType,
  FavoriteResponse,
  OwnerType,
  SubmitRestaurantType,
  UserLkType,
} from '../../../../types/lkTypes/lkTypes';
import {
  addNewReplyThunk,
  deleteThunk,
  favoriteThunk,
  getAllCountryThunk,
  getMyComment,
  getOwnerThunk,
  getUserRestaurants,
  getUserThunk,
  myFavoriteThunk,
  newRestaurantThunk,
  updateOwnerThunk,
  updateUserThunk,
} from './lkThuncks';

const initialState: {
  country: CountryType[];
  currentOwner: OwnerType | null;
  currentUserLk: UserLkType | null;
  comments: CommentResponseType[] | null;
  favorite: FavoriteResponse[] | null;
} = {
  country: [],
  currentOwner: null,
  currentUserLk: null,
  comments: null,
  favorite: null,
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
      if (state.currentOwner) {
        state.currentOwner = { ...state.currentOwner, ...action.payload };
      }
    });
    builder.addCase(newRestaurantThunk.fulfilled, (state, action) => {
      if (state.currentOwner) {
        state.currentOwner.Restaurants.push(action.payload);
      }
    });
    builder.addCase(deleteThunk.fulfilled, (state, action) => {
      if (state.currentOwner) {
        state.currentOwner.Restaurants = state.currentOwner.Restaurants.filter(
          (el) => Number(el.id) !== action.payload,
        );
      }
    });
    builder.addCase(getMyComment.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(addNewReplyThunk.fulfilled, (state, action) => {
      if (state.comments) {
        state.comments.map((el) =>
          el.id === action.payload.commentId
            ? el.CommentReplies.push(action.payload)
            : el.CommentReplies,
        );
      }
    });
    builder.addCase(myFavoriteThunk.fulfilled, (state, action) => {
      state.favorite = action.payload;
    });
    builder.addCase(favoriteThunk.fulfilled, (state, action) => {
      if (action.payload.del) {
        state.favorite = state.favorite?.filter((el) => el.id !== action.payload.rest.id);
      } else {
        state.favorite?.push(action.payload.rest);
      }
    });
  },
});
