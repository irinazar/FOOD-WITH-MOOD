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

function OverlayTwo(): any {
  return <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;
}

type RestaurantCardProps = {
  oneRestaurant: OneRestaurantType;
};

export default function RestaurantCard({ oneRestaurant }: RestaurantCardProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  return (
    <Center>
      <Card className={style.restCard}>
        <CardBody>
          <Stack mt="1" spacing="3">
            <Heading size="md" className={style.restName}>
              {oneRestaurant.title}
            </Heading>

            <Rating oneRestaurant={oneRestaurant} />
            <Text fontSize="m" className={style.textGray}>
              {oneRestaurant.adress}
            </Text>
            {/* <Text fontSize="m" className={style.textGray}>
            Контакты : +7 (495) 930-23-65
          </Text> */}
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
