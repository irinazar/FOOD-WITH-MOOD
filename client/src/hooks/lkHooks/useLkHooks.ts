import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../reduxHooks';
import {
  addNewReplyThunk,
  deleteThunk,
  favoriteThunk,
  getAllCountryThunk,
  getUserRestaurants,
  newRestaurantThunk,
  updateOwnerThunk,
  updateUserThunk,
} from '../../features/redux/slices/lk/lkThuncks';
import type { SubmitRestTypeHTML, SubmitUserTypeHTML } from '../../types/lkTypes/lkTypes';
import type { Coordinates } from '../../components/Pages/OwnerAccount/ui/ModalNewRestorant';

const useLkHooks = (): {
  handlerSubmit: (
    e: React.FormEvent<SubmitUserTypeHTML>,
    id: number,
    selectedCountryIds: string[],
  ) => void;
  handlerOwnerSubmit: (e: React.FormEvent<SubmitUserTypeHTML>, id: number) => void;
  handlerRestaurantSubmit: (
    e: React.FormEvent<SubmitRestTypeHTML>,
    id: number,
    mapCoordinates: Coordinates,
  ) => void;
  handleCountryChange: (e: React.FormEvent<SubmitUserTypeHTML>) => void;
  selectedCountryIds: number[];
  deleteHandler: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  handlerReplySubmit: (
    e: React.FormEvent<HTMLFormElement>,
    commentId: number,
    OwnerId: number,
  ) => void;
  handleFavoriteClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    userId: number,
    restaurantId: number,
  ) => void;
  isFavorited: boolean;
  setIsFavorited: React.Dispatch<React.SetStateAction<boolean>>;
} => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getAllCountryThunk());
  }, []);

  const handlerSubmit = useCallback(
    (e: React.FormEvent<SubmitUserTypeHTML>, id: number, selectedCountryIds: string[]): void => {
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
    },
    [],
  );

  const handlerOwnerSubmit = useCallback(
    (e: React.FormEvent<SubmitUserTypeHTML>, id: number): void => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('id', id.toString());
      formData.append('telephone', e.currentTarget.telephone.value);
      formData.append('name', e.currentTarget.name.value);
      formData.append('email', e.currentTarget.email.value);
      formData.append('file', e.currentTarget.file.files[0]);

      void dispatch(updateOwnerThunk({ formData, id }));
    },
    [],
  );
  //= ============================map

  const handlerRestaurantSubmit = useCallback(
    (
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
      formData.append('phone', e.currentTarget.phone.value);

      formData.append('description', e.currentTarget.description.value);
      formData.append('coordX', mapCoordinates.lat);
      formData.append('coordY', mapCoordinates.lng);
      for (let i = 0; i < fileInput.files.length; i++) {
        formData.append('file', fileInput.files[i]);
      }

      void dispatch(newRestaurantThunk(formData));
    },
    [],
  );

  const deleteHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>, id: number): void => {
    e.preventDefault();
    void dispatch(deleteThunk(id));
  }, []);

  const handlerReplySubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>, commentId: number, restOwnerId: number): void => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.currentTarget)) as { body: string };
      const { body } = data;

      const newdata = { body, commentId, restOwnerId };

      void dispatch(addNewReplyThunk(newdata));
      e.currentTarget.reset();
    },
    [],
  );

  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const handleFavoriteClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, userId: number, restaurantId: number): void => {
      setIsFavorited(!isFavorited);

      const data = { userId, restaurantId };

      void dispatch(favoriteThunk(data));
    },
    [],
  );

  return {
    handlerSubmit,
    handlerOwnerSubmit,
    handlerRestaurantSubmit,
    deleteHandler,
    handlerReplySubmit,
    handleFavoriteClick,
    isFavorited,
    setIsFavorited,
  };
};

export default useLkHooks;
