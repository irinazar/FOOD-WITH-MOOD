// import { AxiosResponse } from 'axios';
import type {
  ConfirmType,
  CreateConfirmType,
  UserLoginType,
  UserSignUpType,
  UserType,
} from '../../types/userType/userTypes';
import apiService from '..';

export const checkUserService = async (): Promise<UserType> => {
  const { data } = await apiService<UserType>('/user/check');
  return data;
};

export const submitSignupService = async (formData: UserSignUpType): Promise<UserType> => {
  const { data } = await apiService.post<UserType>('/user/signup', formData);
  return data;
};

export const submitLoginService = async (formData: UserLoginType): Promise<UserType> => {
  const { data } = await apiService.post<UserType>('/user/login', formData);
  return data;
};

export const submitCodeService = async (formData: CreateConfirmType): Promise<string> => {
  const { data } = await apiService.post<string>('/user/code', formData);
  return data;
};

export const logoutUserService = (): Promise<void> => apiService('/user/logout');
