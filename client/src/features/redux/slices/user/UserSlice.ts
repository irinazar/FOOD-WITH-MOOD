import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  checkUserThunk,
  codeUserThunk,
  loginUserThunk,
  logoutUserThunk,
  signUpUserThunk,
} from './UserThunks';
import type { AuthLoadingType, AuthType } from '../../../../types/authType/authTypes';

type UserState = AuthLoadingType;
const initialState: UserState = { status: 'loading' };

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState,
  reducers: {
    setUser(state, action: PayloadAction<AuthType>) {
      return { status: 'logged', ...action.payload };
    },
  },
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

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
