import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  ConfirmType,
  CreateConfirmType,
  UserLoginType,
  UserSignUpType,
  UserType,
} from '../../../../types/userType/userTypes';
import {
  checkUserService,
  logoutUserService,
  submitCodeService,
  submitLoginService,
  submitSignupService,
} from '../../../../services/userService/userService';

export const checkUserThunk = createAsyncThunk<UserType>('user/checkUserThunk', () =>
  checkUserService(),
);

export const loginUserThunk = createAsyncThunk<UserType, UserLoginType>(
  'user/loginUserThunk',
  (formData) => submitLoginService(formData),
);

export const signUpUserThunk = createAsyncThunk<UserType, UserSignUpType>(
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
