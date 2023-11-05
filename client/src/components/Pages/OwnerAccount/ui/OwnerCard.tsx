import {
  Text,
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
} from '@chakra-ui/react';
import React from 'react';
import Carousel from '../../../UI/RestaurantPageUI/Carousel';
import type { SubmitRestaurantType } from '../../../../types/lkTypes/lkTypes';

type OwnerCardProps = {
  rest: SubmitRestaurantType;
};

export default function OwnerCard({ rest }: OwnerCardProps): JSX.Element {
  return (
    
    <Card>
      <CardHeader textAlign="center">
        <Heading size="md">{rest.title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Carousel />
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
              Описание
            </Heading>
            <Text pt="2" fontSize="sm">
              {rest.description}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter display="flex" justifyContent="center" alignItems="center">
        <Box textAlign="center">
          <Heading size="xs" textTransform="uppercase">
            Состояние
          </Heading>
          <Text pt="2" fontSize="sm">
            {rest.status === 'Pending' ? (
              <div>Ожидает </div>
            ) : rest.status === 'Accepted' ? (
              <div>Одобрен</div>
            ) : (
              <div>Отклонен</div>
            )}
          </Text>
        </Box>
      </CardFooter>
    </Card>
  );
}
