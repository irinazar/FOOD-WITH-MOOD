import type {
  CommentResponseType,
  CountryType,
  OwnerType,
  ReplyType,
  SubmitRestaurantType,
  SubmitRestaurantType2,
  SubmitUserType2,
  UserLkType,
} from '../../types/lkTypes/lkTypes';
import type { BookingResponse } from '../../types/oneRestaurantType/oneRestaurantTypes';
import apiService from '../index';

export const getAllCountry = (): Promise<CountryType[]> =>
  apiService.get<CountryType[]>('/lk/country').then((res) => res.data);

export const getOwnerServer = (id: number): Promise<OwnerType> =>
  apiService.get<OwnerType>(`/lk/owner/${id}`).then((res) => res.data);

export const getUserServer = (id: number): Promise<UserLkType> =>
  apiService.get<UserLkType>(`/lk/user/${id}`).then((res) => res.data);

export const editUserServer = (formData: SubmitUserType2): Promise<UserLkType> =>
  apiService
    .post<UserLkType>(`/lk/userupdate/${formData.id}`, formData.formData)
    .then((res) => res.data);

export const editOwnerServer = (formData: SubmitUserType2): Promise<UserLkType> =>
  apiService
    .post<UserLkType>(`/lk/ownerupdate/${formData.id}`, formData.formData)
    .then((res) => res.data);

export const newRestaurantServer = (
  formData: SubmitRestaurantType2,
): Promise<SubmitRestaurantType> =>
  apiService.post<SubmitRestaurantType>('/lk/newrestaurant', formData).then((res) => res.data);

export const getUserRestaurantServer = (id: number): Promise<SubmitRestaurantType[]> =>
  apiService.post<SubmitRestaurantType[]>(`/lk/getmyrest/${id}`, id).then((res) => res.data);

export const deleteServer = (id: number): Promise<void | number> =>
  apiService.delete<void>(`/lk/delmyrest/${id}`).then(() => id);

export const getCommentsServer = (id: number): Promise<CommentResponseType[]> =>
  apiService.get<CommentResponseType[]>(`/lk/mycomments/${id}`).then((res) => res.data);

export const newReplyComment = (data: ReplyType): Promise<ReplyType> =>
  apiService.post<ReplyType>('/lk/replycomment', data).then((res) => res.data);

  export const getBookingsServer = (id: number): Promise<BookingResponse[]> =>
  apiService.get<BookingResponse[]>(`/lk/${id}/booking`).then((res) => res.data);

export const deleteBookingServer = (id: number): Promise<{message: string}> =>
apiService.delete<{message: string}>(`/lk/${id}/booking`).then(({data}) => data);