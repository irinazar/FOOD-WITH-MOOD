import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

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
import { loginUserThunk } from '../../../features/redux/slices/user/UserThunks';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { loginOwnerThunk } from '../../../features/redux/slices/authOwner/authOwnerThunks';

export default function LoginPage(): JSX.Element {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as {
      email: string;
      password: string;
      radio: string;
    };

    if (!formData.email || !formData.password) {
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
      void dispatch(loginUserThunk(formData));
    }
    if (formData.radio === 'owner') {
      void dispatch(loginOwnerThunk(formData));
    }
    // navigate('/');
  };

  return (
    <div className={style.divRegistLogin}>
      <Box bg={useColorModeValue('', 'gray.900')} w="lg" p={8} borderRadius="md">
        <form className={style.formRegist} onSubmit={submitHandler}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Email</FormLabel>
              <Input
                placeholder="Email"
                type="email"
                name="email"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
            </FormControl>
            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Пароль</FormLabel>
              <Input
                type="password"
                name="password"
                autoComplete=""
                placeholder="Password"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
              {/* <Text mt={1} color={useColorModeValue('gray.900', 'gray.100')}>
                At least 8 characters long
              </Text> */}
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
              Войти
            </Button>
          </VStack>
        </form>
        <span>
          Впервые на сайте?{' '}
          <NavLink className={style.registrLink} to="/signup">
            Регистрация
          </NavLink>
        </span>
      </Box>
    </div>
  );
}
