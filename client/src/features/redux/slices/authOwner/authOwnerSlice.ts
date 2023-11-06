import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  checkOwnerThunk,
  codeOwnerThunk,
  loginOwnerThunk,
  logoutOwnerThunk,
  signUpOwnerThunk,
} from './authOwnerThunks';
import type {
  AuthLoadingType,
  AuthType,
  CreateConfirmType,
} from '../../../../types/authType/authTypes';

type OwnerState = AuthLoadingType;
const initialState: OwnerState = { status: 'loading' };

export const authOwnerSlice = createSlice({
  name: 'authOwner',
  initialState: initialState as OwnerState,
  reducers: {
    setOwner(state, action: PayloadAction<AuthType>) {
      return {status:"logged", ...action.payload};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkOwnerThunk.pending, (state) => ({ status: 'loading' }));
    builder.addCase(checkOwnerThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'logged',
    }));
    builder.addCase(checkOwnerThunk.rejected, (state) => ({
      status: 'guest',
    }));
    builder.addCase(signUpOwnerThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'loading',
    }));
    builder.addCase(signUpOwnerThunk.rejected, (state, action) => ({
      status: 'guest',
    }));
    builder.addCase(codeOwnerThunk.fulfilled, (state, action) => ({
      status: 'logged',
    }));
    builder.addCase(loginOwnerThunk.fulfilled, (state, action) => ({
      ...action.payload,
      status: 'logged',
    }));
    builder.addCase(loginOwnerThunk.rejected, (state, action) => ({
      status: 'guest',
    }));
    builder.addCase(logoutOwnerThunk.fulfilled, (state) => ({ status: 'guest' }));
  },
});
export const { setOwner } = authOwnerSlice.actions;
export default authOwnerSlice.reducer;
