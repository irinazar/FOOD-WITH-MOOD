import React, { useEffect } from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import RestorantInfo from './ui/RestorantInfo';
import style from '../UserAccount/style.module.css';
import Comment from './ui/Comment';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getOwnerThunk } from '../../../features/redux/slices/lk/lkThuncks';
import type { OwnerType } from '../../../types/lkTypes/lkTypes';

export default function OwnerAccount(): JSX.Element {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    void dispatch(getOwnerThunk(Number(id)));
  }, []);

  const owner = useAppSelector((state) => state.lkReducer.currentOwner) as OwnerType;

  return (
    <div className={style.container}>
      <RestorantInfo owner={owner} />

      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="gray.100" px="4" fontSize="xl" fontWeight="bold">
          Я владелец
        </AbsoluteCenter>
      </Box>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="gray.100" px="4" fontSize="xl" fontWeight="bold">
          Отзывы о моих ресторанах
        </AbsoluteCenter>
      </Box>
      <div className={style['comment-owner-container']}>
        <Comment />
      </div>
    </div>
  );
}
