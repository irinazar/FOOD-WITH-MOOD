import React from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';
import UserInfo from './ui/UserInfo';
import style from './style.module.css';

export default function UserAccount(): JSX.Element {
  return (
    <div className={style.container}>
      <UserInfo />
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
