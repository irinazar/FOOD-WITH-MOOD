import { createSlice } from '@reduxjs/toolkit';
import type { UserLoadingType } from '../../../../types/userType/userTypes';
import {
  checkUserThunk,
  codeUserThunk,
  loginUserThunk,
  logoutUserThunk,
  signUpUserThunk,
} from './UserThuncks';

type UserState = UserLoadingType;
const initialState: UserState = { status: 'loading' };

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkUserThunk.pending, (state) => ({ status: 'loading' }));
    builder.addCase(checkUserThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'logged',
    }));
    builder.addCase(checkUserThunk.rejected, (state) => ({
      status: 'guest',
    }));
    builder.addCase(signUpUserThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'loading',
    }));
    builder.addCase(signUpUserThunk.rejected, (state, action) => ({
      status: 'guest',
    }));
    builder.addCase(codeUserThunk.fulfilled, (state, action) => ({
      status: 'logged',
    }));
    builder.addCase(loginUserThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'logged',
    }));
    builder.addCase(loginUserThunk.rejected, (state, action) => ({
      status: 'guest',
    }));
    builder.addCase(logoutUserThunk.fulfilled, (state) => ({ status: 'guest' }));
  },
});

export default userSlice.reducer;
