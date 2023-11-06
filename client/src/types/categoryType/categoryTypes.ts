import type { OneRestaurantType } from "../oneRestaurantType/oneRestaurantTypes";


export type CountryType = {
    id: number;
    name: string;
    description: string;
    img: string;
  };

  export type OneCountryType = {
    id: number;
    name: string;
    description: string;
    img: string;
    Restaurants: OneRestaurantType[]
  };
