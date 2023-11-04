import type {
  CountryType,
  OwnerType,
  SubmitRestaurantType,
  SubmitRestaurantType2,
  SubmitUserType2,
  UserLkType,
} from '../../types/lkTypes/lkTypes';
import apiService from '../index';

export const getAllCountry = (): Promise<CountryType[]> =>
  apiService.get<CountryType[]>('/lk/country').then((res) => res.data);

export const getOwnerServer = (id: number): Promise<OwnerType> =>
  apiService.get<OwnerType>(`/lk/owner/${id}`).then((res) => res.data);

export const getUserServer = (id: number): Promise<UserLkType> =>
  apiService.get<UserLkType>(`/lk/user/${id}`).then((res) => res.data);

export const editUserServer = (formData: SubmitUserType2): Promise<UserLkType> => {
  const { id, ...otherData } = formData;
  console.log(formData);
  return apiService.post<UserLkType>(`/lk/userupdate/${id}`, formData).then((res) => res.data);
};

export const editOwnerServer = (formData: SubmitUserType2): Promise<UserLkType> => {
  const { id, ...otherData } = formData;
  return apiService.post<UserLkType>(`/lk/ownerupdate/${id}`, otherData).then((res) => res.data);
};

export const newRestaurantServer = (
  formData: SubmitRestaurantType2,
): Promise<SubmitRestaurantType> =>
  apiService.post<SubmitRestaurantType>('/lk/newrestaurant', formData).then((res) => res.data);
