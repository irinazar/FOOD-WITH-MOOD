import React, { useEffect } from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';
import PendingCard from '../../UI/AdminUI/PendingCard';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { getPendingRestaurantThunk } from '../../../features/redux/slices/adminSlice/adminThunk';

export default function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch()
  const pendingRestaurants = useAppSelector((state) => state.admin.pendingRestaurants)
  
  useEffect(() => {
    void dispatch(getPendingRestaurantThunk())
  }, [pendingRestaurants])
  
  return (
    <div className="flex flex-col w-full">
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter  bg='gray.100' px="4" fontSize="xl" fontWeight="bold">
          Заявки, ожидающие подтверждения
        </AbsoluteCenter>
      </Box>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3 mx-7 mx-auto">
        {pendingRestaurants?.map((el) => (
          <PendingCard key={el.id} rest={el}/>
        ))}
      </div>
    </div>
  );
}
