import apiService from "..";
import type { CountryType, OneCountryType } from "../../types/categoryType/categoryTypes";



export const allCountriesService = async (): Promise<CountryType[]> => {
    const { data } = await apiService<CountryType[]>('/country');
    return data;
  };

export const oneCountryService = async (id:number): Promise<OneCountryType> => {
  const {data} = await apiService<OneCountryType>(`/country/${id}`)
  return data
}