import apiService from "..";
import type { CountryType } from "../../types/categoryType/categoryTypes";



export const allCountriesService = async (): Promise<CountryType[]> => {
    const { data } = await apiService<CountryType[]>('/country');
    return data;
  };