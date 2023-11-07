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
import type {
  FavoriteType,
  SubmitRestaurantType,
  UserLkType,
} from '../../../types/lkTypes/lkTypes';
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

  const myfav = useAppSelector((state) => state.lkReducer.favorite) as FavoriteType[];
  const userlk = useAppSelector((state) => state.lkReducer.currentUserLk) as UserLkType;

  console.log(myfav);

  useEffect(() => {
    void dispatch(getUserThunk(Number(id)));
  }, []);

  useEffect(() => {
    void dispatch(getUserRestaurants(Number(id)));
  }, [myfav, userlk]);

  useEffect(() => {
    void dispatch(myFavoriteThunk(Number(id)));
  }, []);

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
          <Box
            className={style.containercardrest}
            key={el?.id}
            maxW="300px"
            borderWidth="1px"
            p="2"
            m="2"
          >
            <a
              className={style.restName}
              style={{ textDecoration: 'underline' }}
              href={`/countries/${el?.id}`}
            >
              <strong>{el.title}</strong>
            </a>
            <Text marginTop="5px" textAlign="center">
              <strong> {el?.phone}</strong>
            </Text>
            <Text marginTop="5px" textAlign="center">
              <strong> {el?.adress} </strong>
            </Text>

            <div style={{ marginTop: 'auto' }}>
              <div className={style.containermini}>
                <FavoriteButtonMy
                  handleFavoriteClick={handleFavoriteClick}
                  idUser={userlk?.id}
                  idRest={el?.id}
                  rest={el}
                />
              </div>
              <div className={style.containerimg}>
                <Image src={`${STATIC_URL}/img/restaurants/${el.Images[0]?.image}`} alt="img" />
              </div>
            </div>
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
          <Box
            className={style.containercardrest}
            key={el.id}
            maxW="500px"
            borderWidth="1px"
            p="4"
            m="4"
          >
            <a
              className={style.restName}
              style={{ textDecoration: 'underline' }}
              href={`/countries/${el?.id}`}
            >
              <strong>{el?.title}</strong>
            </a>
            <Text marginTop="5px" textAlign="center">
              <strong> {el?.phone}</strong>
            </Text>
            <Text marginTop="5px" textAlign="center">
              <strong> {el?.adress} </strong>
            </Text>

            <Text style={{ flex: '0 0 auto' }} marginTop="5px">
              {el?.description}
            </Text>

            <div style={{ marginTop: 'auto' }}>
              <div className={style.containermini}>
                <FavoriteButtonMy
                  isFavorited={isFavorited}
                  handleFavoriteClick={handleFavoriteClick}
                  idUser={userlk?.id}
                  idRest={el?.id}
                  rest={el}
                />
              </div>
              <div className={style.containerimg}>
                <Image src={`${STATIC_URL}/img/restaurants/${el?.Images[0]?.image}`} alt="img" />
              </div>
            </div>
          </Box>
        ))}
      </Flex>
    </div>
  );
}

export default React.memo(UserAccount);
