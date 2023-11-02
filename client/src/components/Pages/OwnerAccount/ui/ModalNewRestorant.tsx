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
  Text,
  Textarea,
} from '@chakra-ui/react';

import React, { useEffect, useRef, useState } from 'react';
import type ymaps from 'yandex-maps';
import style from '../../UserAccount/style.module.css';

type ModalPageProps = {
  isOpen: boolean;
  onClose: () => void;
  overlay: any;
};
type Coordinates = {
  lat: number;
  lng: number;
};

function ModalNewRestorant({ isOpen, onClose, overlay }: ModalPageProps): JSX.Element {
  const [mapCoordinates, setMapCoordinates] = useState<Coordinates>({
    lat: 55.751574,
    lng: 37.573856,
  });
  const ymapRef = useRef<ymaps.Map | null>(null);

  const handleMapClick = (e: any): void => {
    const coords: number[] = e.get('coords');
    setMapCoordinates({ lat: coords[0], lng: coords[1] });
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
      });
    }
  };

  useEffect(() => {
    loadMap();
  }, []);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader>Заполните данные о вашем заведении</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Название Заведения</FormLabel>
            <Input placeholder="Название" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Адрес Заведения</FormLabel>
            <Input placeholder="Адрес" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Выберите точку на карте</FormLabel>
            <div id="mapadd" style={{ width: '400px', height: '400px' }} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Выберите категорию</FormLabel>
            <Select placeholder="Кухня">
              <option value="option1">Азиатская</option>
              <option value="option2">Славянская</option>
              <option value="option3">Мексиканская</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Расскажите о вашем Заведении</FormLabel>
            <Textarea placeholder="Описание" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Загрузите фото</FormLabel>
            <Input type="file" placeholder="Email" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" className={style.btn} colorScheme="blackAlpha" variant="outline">
            Отправить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default React.memo(ModalNewRestorant);
