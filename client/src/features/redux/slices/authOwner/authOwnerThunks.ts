import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  checkOwnerService,
  logoutOwnerService,
  submitCodeService,
  submitLoginService,
  submitSignupService,
} from '../../../../services/authOwnerService/authOwnerService';
import type {
  AuthLoginType,
  AuthSignUpType,
  AuthType,
  CreateConfirmType,
} from '../../../../types/authType/authTypes';

export const checkOwnerThunk = createAsyncThunk<AuthType>('owner/checkOwnerThunk', () =>
checkOwnerService(),
);

export const loginOwnerThunk = createAsyncThunk<AuthType, AuthLoginType>(
  'owner/loginOwnerThunk',
  (formData) => submitLoginService(formData),
);

export const signUpOwnerThunk = createAsyncThunk<AuthType, AuthSignUpType>(
  'owner/signUpOwnerThunk',
  (formData) => submitSignupService(formData),
);

export const codeOwnerThunk = createAsyncThunk<string, CreateConfirmType>(
  'owner/codeUserThunk',
  (formData) => submitCodeService(formData),
);

export const logoutOwnerThunk = createAsyncThunk<boolean>('owner/logoutOwnerThunk', async () =>
  logoutOwnerService().then(() => true),
);
