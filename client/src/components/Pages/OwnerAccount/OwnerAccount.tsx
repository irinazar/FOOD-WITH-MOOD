import React, { useEffect } from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import RestorantInfo from './ui/RestorantInfo';
import style from '../UserAccount/style.module.css';
import Comment from './ui/Comment';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  getBookingsThunk,
  getMyComment,
  getOwnerThunk,
} from '../../../features/redux/slices/lk/lkThuncks';
import type { CommentResponseType, OwnerType } from '../../../types/lkTypes/lkTypes';
import OwnerCard from './ui/OwnerCard';
import Bookings from './ui/Bookings';
import { Reveal } from '../../UI/Animations/Reveal';

export default function OwnerAccount(): JSX.Element {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  console.log(id);
  const restmycomments = useAppSelector(
    (state) => state.lkReducer.comments,
  ) as CommentResponseType[];
  const owner = useAppSelector((state) => state.lkReducer.currentOwner) as OwnerType;
  const bookings = useAppSelector((state) => state.lkReducer.bookings);
  const ownerBookings = bookings?.bookings || [];

  useEffect(() => {
    void dispatch(getOwnerThunk(Number(id)));
  }, []);

  useEffect(() => {
    void dispatch(getBookingsThunk(Number(id)));
  }, [owner, restmycomments]);

  useEffect(() => {
    void dispatch(getMyComment(Number(id)));
  }, [owner]);

  return (
    <div className={style.container}>
      <RestorantInfo owner={owner} />

      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="gray.100" px="4" fontSize="xl" fontWeight="bold">
          Я владелец
        </AbsoluteCenter>
      </Box>
      <div className="flex justify-center gap-3 mt-4 mb-5 mx-0">
        {ownerBookings?.map((el) => <Bookings key={uuidv4()} booking={el} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3 mt-4 mb-5 mx-auto">
        {owner?.Restaurants?.map((el) => <OwnerCard key={uuidv4()} rest={el} />)}
      </div>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="gray.100" px="4" fontSize="xl" fontWeight="bold">
          Отзывы о моих ресторанах
        </AbsoluteCenter>
      </Box>
      <div className={style['comment-owner-container']}>
        
        {restmycomments?.map((comment) => <Reveal> <><Comment key={comment.id} comment={comment} />  </></Reveal>)}
      </div>
    </div>
  );
}
