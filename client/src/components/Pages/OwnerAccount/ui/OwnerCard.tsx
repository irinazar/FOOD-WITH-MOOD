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
import useLkHooks from '../../../../hooks/lkHooks/useLkHooks';

type OwnerCardProps = {
  rest: SubmitRestaurantType;
};

function OwnerCard({ rest }: OwnerCardProps): JSX.Element {
  const { deleteHandler } = useLkHooks();
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
        <ButtonGroup variant="outline" spacing={4}>
          {rest.status === 'Pending' && (
            <Button colorScheme="blue" isDisabled>
              Ожидает
            </Button>
          )}
          {rest.status === 'Accepted' && (
            <Button colorScheme="green" isDisabled>
              Одобрен
            </Button>
          )}
          {rest.status === 'Declined' && (
            <Button colorScheme="red" isDisabled>
              Отклонен
            </Button>
          )}
          <Button onClick={(e) => deleteHandler(e, Number(rest.id))} colorScheme="red">
            Удалить заявку
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default React.memo(OwnerCard);
