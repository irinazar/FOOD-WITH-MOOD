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
import { Link } from 'react-router-dom';
import Carousel from '../../../UI/RestaurantPageUI/Carousel';
import type { SubmitRestaurantType } from '../../../../types/lkTypes/lkTypes';
import useLkHooks from '../../../../hooks/lkHooks/useLkHooks';
import style from '../../UserAccount/style.module.css';

type OwnerCardProps = {
  rest: SubmitRestaurantType;
};

function OwnerCard({ rest }: OwnerCardProps): JSX.Element {
  const { deleteHandler } = useLkHooks();
  return (
    <Card>
      <CardHeader textAlign="center">
        <Heading size="md">
          <Link
            className={style.restName}
            style={{ textDecoration: 'underline' }}
            to={`/restaurants/${rest?.id}`}
          >
            <strong>{rest.title}</strong>
          </Link>
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Carousel pictures={rest.Images} />
          <Box textAlign="center">
            <Heading size="xs" textTransform="uppercase">
              Адрес
            </Heading>
            <Text pt="2" fontSize="sm">
              {rest.adress}
            </Text>
            <Heading marginTop="10px" size="xs" textTransform="uppercase">
              Телефон
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
        <ButtonGroup
          style={{ flexWrap: 'wrap', justifyContent: 'center' }}
          variant="outline"
          spacing={4}
        >
          {rest.status === 'Pending' && (
            <Button colorScheme="blue" isDisabled>
              Ожидает подтверждения
            </Button>
          )}
          {rest.status === 'Accepted' && (
            <Button colorScheme="yellow" isDisabled>
              Одобрена
            </Button>
          )}
          {rest.status === 'Declined' && (
            <Button colorScheme="red" isDisabled>
              Отклонена
            </Button>
          )}

          <button
            className={style.buttondel}
            type="submit"
            onClick={(e) => deleteHandler(e, Number(rest.id))}
          >
            Удалить заявку
          </button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default React.memo(OwnerCard);
