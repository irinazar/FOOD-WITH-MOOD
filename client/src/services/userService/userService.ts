import apiService from '..';
import type {
  AuthLoginType,
  AuthSignUpType,
  AuthType,
  CreateConfirmType,
} from '../../types/authType/authTypes';

export const checkUserService = async (): Promise<AuthType> => {
  const { data } = await apiService<AuthType>('/user/check');
  return data;
};

export const submitSignupService = async (formData: AuthSignUpType): Promise<AuthType> => {
  const { data } = await apiService.post<AuthType>('/user/signup', formData);
  return data;
};

export const submitLoginService = async (formData: AuthLoginType): Promise<AuthType> => {
  const { data } = await apiService.post<AuthType>('/user/login', formData);
  return data;
};

export const submitCodeService = async (formData: CreateConfirmType): Promise<string> => {
  const { data } = await apiService.post<string>('/user/code', formData);
  return data;
};

export const logoutUserService = (): Promise<void> => apiService('/user/logout');
