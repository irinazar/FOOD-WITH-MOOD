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
} from '@chakra-ui/react';

import React from 'react';
import style from '../../UserAccount/style.module.css';

type ModalPageProps = {
  isOpen: boolean;
  onClose: () => void;
  overlay: any;
  handlerOwnerSubmit: (e: React.FormEvent<HTMLFormElement>, id: number) => void;
  id: number;
};

function ModalPageRestorant({
  id,
  handlerOwnerSubmit,
  isOpen,
  onClose,
  overlay,
}: ModalPageProps): JSX.Element {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <form onSubmit={(e) => handlerOwnerSubmit(e, id)}>
          <ModalHeader>Редактировать профиль</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Изменить Название Компании</FormLabel>
              <Input name="name" placeholder="Название Компании" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Изменить номер</FormLabel>
              <Input name="telephone" placeholder="Телефон" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Изменить почту</FormLabel>
              <Input name="email" placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Загрузить фото</FormLabel>
              <Input type="file" name="file" />
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
              Сохранить
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}

export default React.memo(ModalPageRestorant);
