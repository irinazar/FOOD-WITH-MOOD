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

import { useParams } from 'react-router-dom';
import style from './style.module.css';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import type { BookingInputType } from '../../../types/oneRestaurantType/oneRestaurantTypes';
import { addBookingThunk } from '../../../features/redux/slices/oneRestaurantSlice/oneRestaurantThunk';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  overlay: JSX.Element;
};

function BookingModal({ isOpen, onClose, overlay }: BookingModalProps): JSX.Element {
  const [bookingData, setBookingData] = useState({
    bookerName: '',
    bookerPhone: '',
    date: '',
  });
  const { id } = useParams();
  const idParam = Number(id)
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBookingData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const bookingSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (bookingData) {
      const formData = Object.fromEntries(new FormData(e.currentTarget)) as BookingInputType;
      void dispatch(addBookingThunk({ id: idParam, formData }));
      setBookingData({
        bookerName: '',
        bookerPhone: '',
        date: '',
      });
    }
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader textAlign="center">Забронировать столик</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={bookingSubmitHandler}>
            <FormControl>
              <FormLabel textAlign="center">Имя для брони</FormLabel>
              <Input
                type="text"
                name="bookerName"
                value={bookingData.bookerName}
                onChange={handleChange}
                placeholder="Имя"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textAlign="center">Номер для связи</FormLabel>
              <Input
                type="tel"
                name="bookerPhone"
                value={bookingData.bookerPhone}
                onChange={handleChange}
                placeholder="+7(000)000-00-00"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textAlign="center">Время</FormLabel>
              <Input
                type="datetime-local"
                name="date"
                value={bookingData.date}
                onChange={handleChange}
                placeholder="Дата и и время"
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
