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
  Wrap,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import style from '../style.module.css';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import useLkHooks from '../../../../hooks/lkHooks/useLkHooks';

type ModalPageProps = {
  isOpen: boolean;
  onClose: () => void;
  overlay: any;
  id: number;
  handlerSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    id: number,
    selectedCountryIds: string[],
  ) => void;
};

function ModalPage({ isOpen, onClose, overlay, id, handlerSubmit }: ModalPageProps): JSX.Element {
  const country = useAppSelector((state) => state.lkReducer.country);
  const pref = useAppSelector(
    (state) =>
      state.lkReducer.currentUserLk?.Preferences?.map((el) => el.countryId?.toString()) || [],
  );

  //= =================checkbox
  const [selectedCountryIds, setSelectedCountryIds] = useState<string[]>([]);
  const handleCountryChange = (countryId: string): void => {
    if (selectedCountryIds.includes(countryId)) {
      setSelectedCountryIds(selectedCountryIds.filter((el) => el !== countryId));
    } else {
      setSelectedCountryIds([...selectedCountryIds, countryId]);
    }
  };

  useEffect(() => {
    setSelectedCountryIds(pref);
  }, []);

  //= =================checkbox

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <form
          encType="multipart/form-data"
          onSubmit={(e) => handlerSubmit(e, id, selectedCountryIds)}
        >
          <ModalHeader>Редактировать профиль</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Изменить имя</FormLabel>
              <Input name="name" placeholder="Имя" />
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
              <FormLabel>Добавьте предпочтения кухни</FormLabel>
              <Wrap spacing={5}>
                {country.map((el) => (
                  <Checkbox
                    key={el.id}
                    isChecked={selectedCountryIds.includes(el.id?.toString())}
                    onChange={() => handleCountryChange(el.id?.toString())}
                    value={el.id}
                    colorScheme="green"
                    defaultChecked
                  >
                    {el?.name}
                  </Checkbox>
                ))}
              </Wrap>
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

export default React.memo(ModalPage);
