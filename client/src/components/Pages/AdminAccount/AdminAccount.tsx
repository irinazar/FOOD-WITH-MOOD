import React from 'react';
import { AbsoluteCenter, Box, Divider } from '@chakra-ui/react';
import PendingCard from '../../UI/AdminUI/PendingCard';
import { useAppSelector } from '../../../hooks/reduxHooks';

export default function AdminPage(): JSX.Element {
  const pendingRestaurants = useAppSelector((state) => state.admin.pendingRestaurants)
  
  return (
    <div className="flex flex-col w-full">
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter  bg='gray.100' px="4" fontSize="xl" fontWeight="bold">
          Заявки, ожидающие подтверждения
        </AbsoluteCenter>
      </Box>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3 mt-4 mb-5 mx-auto">
        {pendingRestaurants?.map((el) => (
          <PendingCard key={el.id} rest={el}/>
        ))}
      </div>
    </div>
  );
}
