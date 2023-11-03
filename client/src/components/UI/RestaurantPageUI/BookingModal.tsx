import React, { useState } from 'react';
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
import style from './style.module.css';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  overlay: JSX.Element;
};

function BookingModal({ isOpen, onClose, overlay }: BookingModalProps): JSX.Element {
  const [bookingData, setBookingData] = useState({
    name: '',
    phoneNumber: '',
    dateTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (): void => {
    // Здесь вы можете отправить bookingData на ваш бэкенд
    console.log(bookingData);
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader textAlign="center">Забронировать столик</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel textAlign="center">Имя для брони</FormLabel>
              <Input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleChange}
                placeholder="Имя"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textAlign="center">Номер для связи</FormLabel>
              <Input
                type="tel"
                name="phone"
                value={bookingData.phoneNumber}
                onChange={handleChange}
                placeholder="Телефон"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textAlign="center">Время</FormLabel>
              <Input
                type="datetime-local"
                name="datetime"
                value={bookingData.dateTime}
                onChange={handleChange}
                placeholder="Select Date and Time"
              />
            </FormControl>
            <ModalFooter>
              <Button
                type="submit"
                className={style.btn}
                colorScheme="blackAlpha"
                variant="outline"
              >
                Забронировать
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default React.memo(BookingModal);
