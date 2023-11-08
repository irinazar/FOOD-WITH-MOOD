import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import style from './style.module.css';
import { signUpUserThunk } from '../../../features/redux/slices/user/UserThunks';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { signUpOwnerThunk } from '../../../features/redux/slices/authOwner/authOwnerThunks';

export default function AuthPage(): JSX.Element {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const toast = useToast();
  const [password, setPassword] = useState(''); // Состояние для хранения пароля

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as {
      name: string;
      email: string;
      password: string;
      radio: string;
    };
    if (formData.password.length < 8) {
      toast({
        title: 'Ошибка',
        description: 'Пароль должен быть длиной не менее 8 символов',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (formData.radio === 'user') {
      void dispatch(signUpUserThunk(formData));
    }
    if (formData.radio === 'owner') {
      void dispatch(signUpOwnerThunk(formData));
    }
    navigate('/code');
  };

  const isPasswordValid = password.length >= 8;
  const borderColor = isPasswordValid ? 'green.500' : 'red.500';

  return (
    <div className={style.divRegist}>
      <Box bg={useColorModeValue('', 'gray.900')} w="lg" p={8} borderRadius="md">
        <form className={style.formRegist} onSubmit={submitHandler}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Имя</FormLabel>
              <Input
                placeholder="Name"
                name="name"
                bg={useColorModeValue('gray.100', 'gray.900')}
                color={useColorModeValue('current', 'white')}
              />
            </FormControl>
            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Email</FormLabel>
              <Input
                placeholder="Email"
                type="email"
                name="email"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
            </FormControl>
            <FormControl isInvalid={!isPasswordValid}>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Пароль</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete=""
                bg={useColorModeValue('gray.100', 'gray.900')}
                borderColor={borderColor} // Изменяем цвет рамки поля
                onChange={(e) => setPassword(e.target.value)}
              />
              <Text mt={1} color={borderColor}>
                {isPasswordValid
                  ? 'Валидный пороль '
                  : 'Пароль должен быть длиной не менее 8 символов'}
              </Text>
            </FormControl>
            <RadioGroup name="radio" defaultValue="user">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="red" value="user">
                  Пользователь
                </Radio>
                <Radio colorScheme="green" value="owner">
                  Владелец ресторана
                </Radio>
              </Stack>
            </RadioGroup>
            <Button type="submit" colorScheme="messenger" variant="outline" w="full" mt={4}>
              Зарегистрироваться
            </Button>
          </VStack>
        </form>
      </Box>
    </div>
  );
}
