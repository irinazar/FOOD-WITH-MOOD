import React, { useEffect } from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import UserInfo from './ui/UserInfo';
import style from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getUserThunk } from '../../../features/redux/slices/lk/lkThuncks';
import type { UserLkType } from '../../../types/lkTypes/lkTypes';

export default function UserAccount(): JSX.Element {
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    void dispatch(getUserThunk(Number(id)));
  }, []);

  const userlk = useAppSelector((state) => state.lkReducer.currentUserLk) as UserLkType;
  return (
    <div className={style.container}>
      <UserInfo userlk={userlk} />
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="gray.100" px="4" fontSize="xl" fontWeight="bold">
          Любимые рестораны
        </AbsoluteCenter>
      </Box>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="gray.100" px="4" fontSize="xl" fontWeight="bold">
          Ваша подборка
        </AbsoluteCenter>
      </Box>
    </div>
  );
}
