import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useAppDispatch} from '../../../hooks/reduxHooks';
import type { AuthType, CreateConfirmType } from '../../../types/authType/authTypes';
import { setOwner } from '../../../features/redux/slices/authOwner/authOwnerSlice';
import { setUser } from '../../../features/redux/slices/user/UserSlice';
import style from './style.module.css';

export default function UserCodePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { VITE_BASE_URL } = import.meta.env as unknown as { VITE_BASE_URL: string };

  const submitCodeHandler: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget)) as CreateConfirmType;

    axios
      .post<AuthType>(`${VITE_BASE_URL}/validate`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.isOwner) {
          void dispatch(setOwner(response.data));
        } else {
          void dispatch(setUser(response.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={style.code}>
      <Box bg={useColorModeValue('', 'gray.900')} w="lg" p={8} borderRadius="md">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          align="center"
          mb={4}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
          Мы отправили вам письмо на электронную почту!
          <h1>Введите код</h1>
        </Text>
        <form onSubmit={submitCodeHandler}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Код</FormLabel>
              <Input
                name="randomString"
                type="text"
                placeholder="code"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" w="full" mt={4}>
              Отправить
            </Button>
          </VStack>
        </form>
      </Box>
    </div>
  );
}
