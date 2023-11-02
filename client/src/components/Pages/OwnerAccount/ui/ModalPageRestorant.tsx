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
  Text,
} from '@chakra-ui/react';

import React from 'react';
import style from '../../UserAccount/style.module.css';

type ModalPageProps = {
  isOpen: boolean;
  onClose: () => void;
  overlay: any;
};

function ModalPageRestorant({ isOpen, onClose, overlay }: ModalPageProps): JSX.Element {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader>Редактировать профиль</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Изменить Название Компании</FormLabel>
            <Input placeholder="Название Компании" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Изменить номер</FormLabel>
            <Input placeholder="Телефон" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Изменить почту</FormLabel>
            <Input placeholder="Email" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Загрузить фото</FormLabel>
            <Input type="file" placeholder="Email" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" className={style.btn} colorScheme="blackAlpha" variant="outline">
            Сохранить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default React.memo(ModalPageRestorant);
