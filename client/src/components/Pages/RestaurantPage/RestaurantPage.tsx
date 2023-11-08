import React, { useEffect, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Carousel from '../../UI/RestaurantPageUI/Carousel';
import RestaurantCard from '../../UI/RestaurantPageUI/RestaurantCard';
import CommentSection from '../../UI/RestaurantPageUI/CommentSection';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getOneRestaurantThunk } from '../../../features/redux/slices/oneRestaurantSlice/oneRestaurantThunk';

export default function RestaurantPage(): JSX.Element {
  const { id } = useParams();
  const restaurantId = useMemo(() => Number(id), [id]);
  const dispatch = useAppDispatch();
  const oneRestaurant = useAppSelector((state) => state.oneRestaurant.oneRestaurant);
  const comments = useAppSelector((state) => state.oneRestaurant.comments);
  const pictures = useAppSelector((state) => state.oneRestaurant.pictures);

  useEffect(() => {
    void dispatch(getOneRestaurantThunk(restaurantId));
  }, [restaurantId]);

  return (
    <Box w="100%" p={4} color="black" style={{ padding: '0' }}>
      {oneRestaurant && (
        <>
          <Carousel pictures={pictures} />
          <br />
          <RestaurantCard oneRestaurant={oneRestaurant} />
          <br />
          <CommentSection comments={comments} />
        </>
      )}
    </Box>
  );
}
