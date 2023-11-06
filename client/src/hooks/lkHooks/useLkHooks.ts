import { useEffect, useState } from 'react';
import { useAppDispatch } from '../reduxHooks';
import {
  deleteThunk,
  getAllCountryThunk,
  getOwnerThunk,
  getUserRestaurants,
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
import type { Coordinates } from '../../components/Pages/OwnerAccount/ui/ModalNewRestorant';

const useLkHooks = (): {
  handlerSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
    selectedCountryIds: string[],
  ) => void;
  handlerOwnerSubmit: (e: React.FormEvent<HTMLFormElement>, id: number) => void;
  handlerRestaurantSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
    mapCoordinates: Coordinates,
  ) => void;
  handleCountryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCountryIds: number[];
  deleteHandler: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
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
    formData.append('id', id.toString());
    formData.append('countryId', selectedCountryIds.join(' '));

    void dispatch(updateUserThunk({ formData, id }));
    void dispatch(getUserRestaurants(Number(id))); //! !!!!!!!! не работает второй диспатч
  };

  const handlerOwnerSubmit = (e: React.FormEvent<SubmitUserTypeHTML>, id: number): void => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', id.toString());
    formData.append('telephone', e.currentTarget.telephone.value);
    formData.append('name', e.currentTarget.name.value);
    formData.append('email', e.currentTarget.email.value);
    formData.append('file', e.currentTarget.file.files[0]);
    console.log(e.currentTarget.file.files[0]);

    void dispatch(updateOwnerThunk({ formData, id }));
  };
  //= ============================map

  const handlerRestaurantSubmit = (
    e: React.FormEvent<SubmitRestTypeHTML>,
    id: number,
    mapCoordinates: { lat: number; lng: number },
  ): void => {
    e.preventDefault();
    const formData = new FormData();

    const fileInput = e.currentTarget.file as HTMLInputElement;

    formData.append('title', e.currentTarget.title.value);
    formData.append('id', id.toString());
    formData.append('adress', e.currentTarget.adress.value);
    formData.append('countryId', e.currentTarget.countryId.value);
    formData.append('description', e.currentTarget.description.value);
    formData.append('coordX', mapCoordinates.lat);
    formData.append('coordY', mapCoordinates.lng);
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append('file', fileInput.files[i]);
    }

    console.log(formData);

    void dispatch(newRestaurantThunk(formData));
  };

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>, id: number): void => {
    e.preventDefault();
    void dispatch(deleteThunk(id));
  };

  //= =============================== map

  return {
    handlerSubmit,
    handlerOwnerSubmit,
    handlerRestaurantSubmit,
    deleteHandler,
  };
};

export default useLkHooks;
