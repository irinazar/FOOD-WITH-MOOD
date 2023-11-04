import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Carousel from '../../UI/RestaurantPageUI/Carousel';
import RestaurantCard from '../../UI/RestaurantPageUI/RestaurantCard';
import CommentSection from '../../UI/RestaurantPageUI/CommentSection';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getOneRestaurantThunk } from '../../../features/redux/slices/oneRestaurantSlice/oneRestaurantThunk';

export default function RestaurantPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const { oneRestaurant } = useAppSelector((state) => state.oneRestaurant);

  useEffect(() => {
    void dispatch(getOneRestaurantThunk(Number(id)))
  }, [])
  return (
    <Box w="100%" p={4} color="black">
    {oneRestaurant && (
      <>
        <Carousel oneRestaurant={oneRestaurant} />
        <RestaurantCard oneRestaurant={oneRestaurant} />
        <CommentSection  />
      </>
    )}
  </Box>
  )
}
