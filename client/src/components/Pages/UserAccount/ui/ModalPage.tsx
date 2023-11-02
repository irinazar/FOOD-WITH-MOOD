import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';

type ModalPageProps = {
  isOpen: boolean;
  onClose: () => void;
  overlay: any;
};

function ModalPage({ isOpen, onClose, overlay }: ModalPageProps): JSX.Element {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader>Редактировать профиль</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Изменить имя</FormLabel>
            <Input placeholder="Имя" />
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
            <FormLabel>Добавьте предпочтения кухни</FormLabel>
            <Wrap spacing={5}>
              <Checkbox colorScheme="green" defaultChecked>
                Азитская
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Checkbox
              </Checkbox>
              <Checkbox colorScheme="green" defaultChecked>
                Checkbox
              </Checkbox>
            </Wrap>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Загрузить фото</FormLabel>
            <Input type="file" placeholder="Email" />
          </FormControl>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

export default React.memo(ModalPage);
