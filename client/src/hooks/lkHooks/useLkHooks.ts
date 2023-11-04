import { useEffect, useState } from 'react';
import { useAppDispatch } from '../reduxHooks';
import {
  getAllCountryThunk,
  getOwnerThunk,
  newRestaurantThunk,
  updateOwnerThunk,
  updateUserThunk,
} from '../../features/redux/slices/lk/lkThuncks';
import type {
  SubmitRestTypeHTML,
  SubmitRestaurantType,
  SubmitRestaurantType2,
  SubmitUserType,
  SubmitUserType2,
  SubmitUserTypeHTML,
} from '../../types/lkTypes/lkTypes';

type Coordinates = {
  lat: number;
  lng: number;
};
const useLkHooks = (): {
  handlerSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
    selectedCountryIds: string[],
  ) => void;
  handlerOwnerSubmit: (e: React.FormEvent<HTMLFormElement>, id: number) => void;
  handlerRestaurantSubmit: (e: React.FormEvent<HTMLFormElement>, id: number) => void;
  mapCoordinates: Coordinates;
  setMapCoordinates: React.Dispatch<React.SetStateAction<Coordinates>>;
  handleCountryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCountryIds: number[];
} => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllCountryThunk());
  }, []);

  const handlerSubmit = (
    e: React.FormEvent<SubmitUserTypeHTML>,
    id: number,
    selectedCountryIds: string[],
  ): void => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('telephone', e.currentTarget.telephone.value);
    formData.append('name', e.currentTarget.name.value);
    formData.append('email', e.currentTarget.email.value);
    formData.append('file', e.currentTarget.file.files[0]);
    formData.append('countryId', selectedCountryIds.join(' '));


    const data = { id, ...Object.fromEntries(formData) } as SubmitUserType2;

    void dispatch(updateUserThunk(data));
  };

  const handlerOwnerSubmit = (e: React.FormEvent<SubmitUserTypeHTML>, id: number): void => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('telephone', e.currentTarget.telephone.value);
    formData.append('name', e.currentTarget.name.value);
    formData.append('email', e.currentTarget.email.value);
    formData.append('file', e.currentTarget.file.files[0]);
    console.log(e.currentTarget.file.files[0]);

    const data = { id, ...Object.fromEntries(formData) } as SubmitUserType2;

    void dispatch(updateOwnerThunk(data));
  };
  //= ============================map
  const [mapCoordinates, setMapCoordinates] = useState<Coordinates>({
    lat: 55.751574,
    lng: 37.573856,
  });

  const handlerRestaurantSubmit = (e: React.FormEvent<SubmitRestTypeHTML>, id: number): void => {
    e.preventDefault();
    const formData = new FormData();

    const fileInput = e.currentTarget.file as HTMLInputElement;

    formData.append('title', e.currentTarget.title.value);
    formData.append('adress', e.currentTarget.adress.value);
    formData.append('countryId', e.currentTarget.countryId.value);
    formData.append('description', e.currentTarget.description.value);
    formData.append('coordX', mapCoordinates.lat);
    formData.append('coordY', mapCoordinates.lng);
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('file', fileInput.files[i]);
    }

    const data = { id, ...Object.fromEntries(formData) } as SubmitRestaurantType2;
    console.log(data);

    void dispatch(newRestaurantThunk(data));
  };

  //= =============================== map

  return {
    handlerSubmit,
    handlerOwnerSubmit,
    handlerRestaurantSubmit,
    setMapCoordinates,
    mapCoordinates,
    // handleCountryChange,
    // selectedCountryIds,
  };
};

export default useLkHooks;
