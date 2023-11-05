import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  Textarea,
} from '@chakra-ui/react';

import React, { useEffect, useRef, useState } from 'react';
import type ymaps from 'yandex-maps';
import style from '../../UserAccount/style.module.css';
import useLkHooks from '../../../../hooks/lkHooks/useLkHooks';
import { useAppSelector } from '../../../../hooks/reduxHooks';

type ModalPageProps = {
  isOpen: boolean;
  onClose: () => void;
  overlay: any;
  handlerRestaurantSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
    mapCoordinates: Coordinates,
  ) => void;
  restOwnerId: number;
};
type Coordinates = {
  lat: number;
  lng: number;
};
//= ============================= map

function ModalNewRestorant({
  isOpen,
  onClose,
  overlay,
  handlerRestaurantSubmit,
  restOwnerId,
}: ModalPageProps): JSX.Element {
  const [mapCoordinates, setMapCoordinates] = useState<Coordinates>({
    lat: 55.751574,
    lng: 37.573856,
  });
  const ymapRef = useRef<ymaps.Map | null>(null);

  const handleMapClick = (e: any): void => {
    const coords: number[] = e.get('coords');
    const newCoordinates = { lat: coords[0], lng: coords[1] };
    setMapCoordinates(newCoordinates);
    console.log(newCoordinates);
  };

  const loadMap = (): void => {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        ymapRef.current = new window.ymaps.Map('mapadd', {
          center: [mapCoordinates.lat, mapCoordinates.lng],
          zoom: 8,
        });
        const myMap = ymapRef.current;
        myMap.events.add('click', handleMapClick);
        myMap.events.add('submit', handleMapClick);
      });
    }
  };

  useEffect(() => {
    loadMap();
  }, []);
  // ============================ map

  useLkHooks();

  const country = useAppSelector((state) => state.lkReducer.country);
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <form onSubmit={(e) => handlerRestaurantSubmit(e, restOwnerId, mapCoordinates)}>
          <ModalHeader>Заполните данные о вашем заведении</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Название Заведения</FormLabel>
              <Input name="title" placeholder="Название" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Адрес Заведения</FormLabel>
              <Input name="adress" placeholder="Адрес" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Выберите точку на карте</FormLabel>
              <div id="mapadd" style={{ width: '400px', height: '400px' }} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Выберите категорию</FormLabel>
              <Select name="countryId" placeholder="Кухня">
                {country.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Расскажите о вашем Заведении</FormLabel>
              <Textarea name="description" placeholder="Описание" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Загрузите фото</FormLabel>
              <Input type="file" id="file-upload" name="file" accept="image/*" multiple />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              onClick={onClose}
              className={style.btn}
              colorScheme="blackAlpha"
              variant="outline"
            >
              Отправить
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default React.memo(ModalNewRestorant);
