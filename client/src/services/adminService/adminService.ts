import apiService from '..';
import type { OneRestaurantType } from '../../types/oneRestaurantType/oneRestaurantTypes';

export const getPendingRestaurantService = (): Promise<OneRestaurantType[]> =>
  apiService
    .get<OneRestaurantType[]>('/admin/')
    .then((response) => response.data)
    .catch((error) => {
      console.error('Ошибка:', error);
      throw error;
    });

    export const acceptRestaurantService = (restaurantId: number): Promise<OneRestaurantType> =>
    apiService
      .patch<OneRestaurantType>(`/admin/accept/${restaurantId}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Ошибка:', error);
        throw error;
      });
  
  export const declineRestaurantService = (restaurantId: number): Promise<OneRestaurantType> =>
    apiService
      .patch<OneRestaurantType>(`/admin/decline/${restaurantId}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Ошибка:', error);
        throw error;
      });