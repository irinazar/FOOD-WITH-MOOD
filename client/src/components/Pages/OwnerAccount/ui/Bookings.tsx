/* eslint-disable react/jsx-no-useless-fragment */
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import type { BookingType } from '../../../../types/oneRestaurantType/oneRestaurantTypes';
import style from './style.module.css';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { deleteBookingThunk } from '../../../../features/redux/slices/lk/lkThuncks';

type BookingProps = {
  booking: BookingType;
};

export default function Bookings({ booking }: BookingProps): JSX.Element {
  const [show, setShow] = useState(true);

  function getMonthName(month: string): string {
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    return months[parseInt(month, 10) - 1];
  }
  const data = booking.date;
  const parts = data.split('T');
  const dateParts = parts[0].split('-');
  const reversedDate = `${dateParts[2]} ${getMonthName(dateParts[1])} ${dateParts[0]}`;
  const time = parts[1];

  const dispatch = useAppDispatch();

  return(
    <>
    {show ? (
    <Card bg="gray.100" className="w-full md:w-1/3">
      <CardHeader>
        <Heading size="md" color="red.700" textAlign="center">
          Заявка {booking.id}
        </Heading>
      </CardHeader>

      <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase" textAlign="center">
              Ресторан
            </Heading>
            <Text pt="2" fontSize="sm" textAlign="center">
              {booking.Restaurant.title}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" textAlign="center">
              Бронь на имя:
            </Heading>
            <Text pt="2" fontSize="sm" textAlign="center">
              {booking.bookerName}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" textAlign="center">
              Номер для связи
            </Heading>
            <Text pt="2" fontSize="sm" textAlign="center">
              {booking.bookerPhone}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" textAlign="center">
              Дата брони
            </Heading>
            <Text pt="2" fontSize="sm" textAlign="center">
              {reversedDate}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" textAlign="center">
              Время брони
            </Heading>
            <Text pt="2" fontSize="sm" textAlign="center">
              {time}
            </Text>
          </Box>
        </Stack>
        <Button
          className={style.btn}
          colorScheme="blackAlpha"
          variant="outline"
          _hover={{ bg: 'rgba(196, 77, 86, 0.6)' }}
          onClick={() => {
            void dispatch(deleteBookingThunk(booking.id));
            setShow(false);
          }}
        >
          Обработано
        </Button>
      </CardBody>
    </Card>
  ) : null}
  </> 
  )

}
