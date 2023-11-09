import apiService from '..';
import type {
  AuthLoginType,
  AuthSignUpType,
  AuthType,
  CreateConfirmType,
} from '../../types/authType/authTypes';
// import type {
//   CreateConfirmType,
//   OwnerLoginType,
//   OwnerSignUpType,
//   RestOwnerType,
// } from '../../types/authType/authTypes';

export const checkOwnerService = async (): Promise<AuthType> => {
  const { data } = await apiService<AuthType>('/authOwner/check');
  return data;
};

export const submitSignupService = async (formData: AuthSignUpType): Promise<AuthType> => {
  const { data } = await apiService.post<AuthType>('/authOwner/signup', formData);
 

  return data;
};

export const submitLoginService = async (formData: AuthLoginType): Promise<AuthType> => {
  const { data } = await apiService.post<AuthType>('/authOwner/login', formData);
  return data;
};

export const submitCodeService = async (formData: CreateConfirmType): Promise<string> => {
  const { data } = await apiService.post<string>('/authOwner/code', formData);
  return data;
};

export const logoutOwnerService = (): Promise<void> => apiService('/authOwner/logout');
