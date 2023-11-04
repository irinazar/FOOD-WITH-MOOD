// import type OneRestaurantType from '../../types/oneRestaurantType/oneRestaurantTypes';
import apiService from '..';
import type { CommentType, OneRestaurantType } from '../../types/oneRestaurantType/oneRestaurantTypes';

export const getOneRestaurantService = (id: number): Promise<OneRestaurantType> =>
  apiService.get<OneRestaurantType>(`/restaurants/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Ошибка:', error);
      throw error;
    });

    export const getOneRestCommentService = (id: number): Promise<CommentType[]> =>
    apiService.get<CommentType[]>(`/restaurants/${id}/comments`)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Ошибка:', error);
        throw error;
      });