import apiService from '..';
import type {
  BookingInputType,
  BookingType,
  CommentType,
  OneRestaurantType,
  PictureType,
} from '../../types/oneRestaurantType/oneRestaurantTypes';

export const getOneRestaurantService = (
  id: number,
): Promise<{
  oneRestaurant: OneRestaurantType;
  comments: CommentType[];
  pictures: PictureType[];
}> =>
  apiService
    .get<{ oneRestaurant: OneRestaurantType; comments: CommentType[]; pictures: PictureType[] }>(
      `/restaurants/${id}`,
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error('Ошибка:', error);
      throw error;
    });

export const addOneCommentService = (id: number, body: string): Promise<CommentType> => {
  const formData = new FormData();
  formData.append('body', body);
  return apiService
    .post<CommentType>(`/restaurants/${id}/addComment`, Object.fromEntries(formData))
    .then((response) => response.data)
    .catch((error) => {
      console.error('Ошибка:', error);
      throw error;
    });
};

export const addBookingService = (id: number, formData: BookingInputType): Promise<BookingType> =>
  apiService
    .post<BookingType>(`/restaurants/${id}/booking`, formData)
    .then((res) => res.data)
    .catch((error) => {
      console.error('Ошибка:', error);
      throw error;
    });
