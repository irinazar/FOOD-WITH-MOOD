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

import React from 'react';

function ModalNewRestorant({ isOpen, onClose, overlay }): JSX.Element {
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
            <Input placeholder="Телефон" />
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
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

export default React.memo(ModalNewRestorant);
