import { createSlice } from '@reduxjs/toolkit';
import type { CommentType } from '../../../../types/oneRestaurantType/oneRestaurantTypes';
import { getOneRestCommentThunk } from './oneRestCoomentThunk';

const initialState: {oneRestComments: CommentType[] | []} = {oneRestComments: []};

const oneRestCommentSlice = createSlice({
  name: 'oneRestComments',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getOneRestCommentThunk.fulfilled, (state, action) => {
      state.oneRestComments = action.payload
    })
  }
});

export default oneRestCommentSlice.reducer