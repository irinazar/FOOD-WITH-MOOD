import { createAsyncThunk } from "@reduxjs/toolkit";
import { allCountriesService } from "../../../../services/countryService/countryService";
import type { CountryType } from "../../../../types/categoryType/categoryTypes";

export const allCountriesActionThunk = createAsyncThunk<CountryType[]>(
    'county/all',
    async () => allCountriesService().then((res) => res),
);