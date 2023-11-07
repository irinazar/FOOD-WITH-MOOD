import React, { useEffect, useState } from 'react';
import { AbsoluteCenter, Box, Divider, Flex, Text, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import UserInfo from './ui/UserInfo';
import style from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  getUserRestaurants,
  getUserThunk,
  myFavoriteThunk,
} from '../../../features/redux/slices/lk/lkThuncks';
import type { SubmitRestaurantType, UserLkType } from '../../../types/lkTypes/lkTypes';
import FavoriteButton from '../../UI/FavoriteButton/FavoriteButton';
import Rating from '../../UI/RestaurantPageUI/Rating';
import useLkHooks from '../../../hooks/lkHooks/useLkHooks';
import FavoriteButtonMy from './ui/FavoriteButtonMy';

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const STATIC_URL = import.meta.env.VITE_STATIC_URL;

function UserAccount(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { isFavorited, handleFavoriteClick } = useLkHooks();

  const myrest = useAppSelector((state) => state.restREducer.restaurant); //! !!! че это

  const myfav = useAppSelector((state) => state.lkReducer.favorite);

  console.log(myfav, '=================');

  useEffect(() => {
    void dispatch(getUserThunk(Number(id)));
  }, []);

  useEffect(() => {
    void dispatch(getUserRestaurants(Number(id)));
  }, []);

  useEffect(() => {
    void dispatch(myFavoriteThunk(Number(id)));
  }, []);

  const userlk = useAppSelector((state) => state.lkReducer.currentUserLk) as UserLkType;

  const userRest = useAppSelector(
    (state) => state.restREducer.restaurant,
  ) as SubmitRestaurantType[];

  return (
    <div className={style.container}>
      <UserInfo userlk={userlk} />
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="gray.100" px="4" fontSize="xl" fontWeight="bold">
          Любимые рестораны
        </AbsoluteCenter>
      </Box>
      <Flex flexWrap="wrap" justifyContent="center">
        {myfav?.map((el) => (
          <Box key={el?.id} maxW="500px" borderWidth="1px" p="4" m="4">
            <a className={style.restName} href={`/countries/${el?.id}`}>
              <strong>{el.title}</strong>
            </a>
            <Text>{el?.adress}</Text>
            <Text>{el?.description}</Text>
            <div className={style.containermini}>
              <FavoriteButtonMy
                isFavorited={isFavorited}
                handleFavoriteClick={handleFavoriteClick}
                idUser={userlk?.id}
                idRest={el?.id}
              />
              <Rating />
            </div>
            <Image src={`${STATIC_URL}/img/restaurants/${userlk?.avatar}`} alt=" " alt="" />
          </Box>
        ))}
      </Flex>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="gray.100" px="4" fontSize="xl" fontWeight="bold">
          Ваша подборка
        </AbsoluteCenter>
      </Box>
      <Flex flexWrap="wrap" justifyContent="center">
        {userRest?.map((el) => (
          <Box key={el.id} maxW="500px" borderWidth="1px" p="4" m="4">
            <a className={style.restName} href={`/countries/${el?.id}`}>
              <strong>{el?.title}</strong>
            </a>
            <Text>{el?.adress}</Text>
            <Text>{el?.description}</Text>
            <div className={style.containermini}>
              <FavoriteButtonMy
                isFavorited={isFavorited}
                handleFavoriteClick={handleFavoriteClick}
                idUser={userlk?.id}
                idRest={el?.id}
              />
              <Rating />
            </div>
            <Image
              src="https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_Seine_Tour_Eiffel_2.jpg"
              alt=""
            />
          </Box>
        ))}
      </Flex>
    </div>
  );
}

export default React.memo(UserAccount);
