import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import React, { useState, useCallback } from 'react';
import Carousel from '../RestaurantPageUI/Carousel';
import type { OneRestaurantType } from '../../../types/oneRestaurantType/oneRestaurantTypes';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import {
  acceptRestaurantThunk,
  declineRestaurantThunk,
} from '../../../features/redux/slices/adminSlice/adminThunk';

type PendingCardProps = {
  rest: OneRestaurantType;
};

function PendingCard({ rest }: PendingCardProps): JSX.Element {
  const [show, setShow] = useState(true);
  const { Images } = rest;
  const dispatch = useAppDispatch();
  
  const acceptHandler = useCallback((): void => {
    void dispatch(acceptRestaurantThunk(rest.id));
    setShow(false);
  }, [dispatch, rest.id]);

  const declineHandler = useCallback((): void => {
    void dispatch(declineRestaurantThunk(rest.id));
    setShow(false);
  }, [dispatch, rest.id]);

  return (
  show ? (
    <Card>
      <CardHeader textAlign="center">
        <Heading size="md">{rest.title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Carousel pictures={Images} />
          <Box textAlign="center">
            <Heading size="xs" textTransform="uppercase">
              Адрес
            </Heading>
            <Text pt="2" fontSize="sm">
              {rest.adress}
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading size="xs" textTransform="uppercase">
              Контакты
            </Heading>
            <Text pt="2" fontSize="sm">
              {rest.phone}
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading size="xs" textTransform="uppercase">
              Описание
            </Heading>
            <Text pt="2" fontSize="sm">
              {rest.description}
            </Text>
          </Box>
        </Stack>
      </CardBody>

      <CardFooter display="flex" justifyContent="center" alignItems="center">
        <ButtonGroup variant="outline" spacing="6">
          <Button colorScheme="green" onClick={acceptHandler}>
            Одобрить
          </Button>
          <Button colorScheme="orange" onClick={declineHandler}>
            Отклонить
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ) : <> </>
  )
}

export default React.memo(PendingCard);