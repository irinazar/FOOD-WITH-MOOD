import apiService from "..";
import type { CountryType, OneCountryType } from "../../types/categoryType/categoryTypes";



export const addFavoriteService = async (id:number):Promise<void> => {
 await apiService.post(`/favorite/${id}`);
    
  };

export const oneCountryService = async (id:number): Promise<OneCountryType> => {
  const {data} = await apiService.post<OneCountryType>(`/country/${id}`)
  return data
}