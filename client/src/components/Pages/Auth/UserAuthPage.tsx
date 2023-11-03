import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import style from './style.module.css';
import { signUpUserThunk } from '../../../features/redux/slices/user/UserThuncks';
import type { UserSignUpType } from '../../../types/userTypes';
import { useAppDispatch } from '../../../hooks/reduxHooks';

export default function UserAuthPage(): JSX.Element {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const toast = useToast();

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    if (!formData.name || !formData.email || !formData.password) {
      toast({
        title: 'Error',
        description: 'Please fill all the fields',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const userSignUpData: UserSignUpType = {
      name: formData.name.toString(),
      email: formData.email.toString(),
      password: formData.password.toString(),
    };

    void dispatch(signUpUserThunk(userSignUpData));
    navigate('/code');
  };

  return (
    <div className={style.divRegist}>
      <Box bg={useColorModeValue('', 'gray.900')} w="lg" p={8} borderRadius="md">
        <form className={style.formRegist} onSubmit={submitHandler}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Name</FormLabel>
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
            <FormControl>
              <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Password</FormLabel>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                bg={useColorModeValue('gray.100', 'gray.900')}
              />
              <Text mt={1} color={useColorModeValue('gray.900', 'gray.100')}>
                At least 8 characters long
              </Text>
            </FormControl>
            <Button type="submit" colorScheme="messenger" variant="outline" w="full" mt={4}>
              Signup
            </Button>
          </VStack>
        </form>
      </Box>
    </div>
  );
}
