import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import style from './style.module.css';
import Rating from './Rating';
import BookingModal from './BookingModal';
import type { OneRestaurantType } from '../../../types/oneRestaurantType/oneRestaurantTypes';
import { useAppSelector } from '../../../hooks/reduxHooks';

function OverlayTwo(): any {
  return <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;
}

type RestaurantCardProps = {
  oneRestaurant: OneRestaurantType;
};

 function RestaurantCard({ oneRestaurant }: RestaurantCardProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  const averageRating = useAppSelector((state) => state.oneRestaurant.averageRating);
  return (
    <Center>
      <Card className={style.restCard}>
        <CardBody>
          <Stack mt="1" spacing="3">
            <Heading size="md" className={style.restName}>
              {oneRestaurant.title}
            </Heading>

            <Rating averageRating={averageRating} />
            <Text fontSize="m" className={style.textGray}>
              {oneRestaurant.adress}
            </Text>
            <Text fontSize="m" className={style.textGray}>
              Контакты : {oneRestaurant.phone}
            </Text>
            <Text>{oneRestaurant.description}</Text>
          </Stack>
        </CardBody>
        <Button
          className={style.btn}
          colorScheme="blackAlpha"
          variant="outline"
          _hover={{ bg: 'rgba(196, 77, 86, 0.6)' }}
          onClick={() => {
            setOverlay(<OverlayTwo />);
            onOpen();
          }}
        >
          Забронировать
        </Button>
        <BookingModal isOpen={isOpen} onClose={onClose} overlay={overlay} />
      </Card>
    </Center>
  );
}

export default React.memo(RestaurantCard);