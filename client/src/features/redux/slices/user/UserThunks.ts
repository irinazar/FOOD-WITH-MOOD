import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  checkUserService,
  logoutUserService,
  submitCodeService,
  submitLoginService,
  submitSignupService,
} from '../../../../services/userService/userService';
import type {
  AuthLoginType,
  AuthSignUpType,
  AuthType,
  CreateConfirmType,
} from '../../../../types/authType/authTypes';

export const checkUserThunk = createAsyncThunk<AuthType>('user/checkUserThunk', () =>
  checkUserService(),
);

export const loginUserThunk = createAsyncThunk<AuthType, AuthLoginType>(
  'user/loginUserThunk',
  (formData) => submitLoginService(formData),
);

export const signUpUserThunk = createAsyncThunk<AuthType, AuthSignUpType>(
  'user/signUpUserThunk',
  (formData) => submitSignupService(formData),
);

export const codeUserThunk = createAsyncThunk<string, CreateConfirmType>(
  'user/codeUserThunk',
  (formData) => submitCodeService(formData),
);

export const logoutUserThunk = createAsyncThunk<boolean>('user/logout', async () =>
  logoutUserService().then(() => true),
);
