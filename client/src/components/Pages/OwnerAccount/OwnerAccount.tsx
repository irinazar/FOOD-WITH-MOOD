import React from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';
import RestorantInfo from './ui/RestorantInfo';
import style from '../UserAccount/style.module.css';
import Comment from './ui/Comment';

export default function OwnerAccount(): JSX.Element {
  return (
    <div className={style.container}>
      <RestorantInfo />

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
