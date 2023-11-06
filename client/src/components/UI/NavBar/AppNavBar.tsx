import React from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import { Link, NavLink } from 'react-router-dom';
import style from './style.module.css';

import ThemeSwitch from '../ThemeSwitch';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { logoutUserThunk } from '../../../features/redux/slices/user/UserThunks';

import { logoutOwnerThunk } from '../../../features/redux/slices/authOwner/authOwnerThunks';
import { setRole } from '../../../features/redux/slices/role/RoleSlice';

type Props = {
  children: React.ReactNode;
};

const Links = ['Dashboard', 'Projects', 'Team'];

export default function MyNavBar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.role.status);

  const handleLogout = (): void => {
    if (role === 'user') {
      void dispatch(logoutUserThunk());
    }
    if (role === 'owner') {
      void dispatch(logoutOwnerThunk());
      void dispatch(setRole('user'));
    }
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mb={5}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box className="brand">
            <Link to="/" className={style.brand}>
              FOOD with MOOD
            </Link>
          </Box>

          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/countries/:id">Страны</NavLink>
            <NavLink to="/restaurants/:id">Ресторан</NavLink>
            <NavLink to="/admin">Админ</NavLink>
            <NavLink to="/user/:id">ЛК пользователя</NavLink>
            <NavLink to="/owner/:id">ЛК ресторана</NavLink>
            <NavLink to="/login">Вход / Регистрация</NavLink>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <ThemeSwitch />

          <Menu>
            <MenuButton as={Button} rounded="full" variant="link" cursor="pointer">
              <Avatar
                size="md"
                src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                borderColor="rgba(51, 51, 0, 0.7)"
                borderWidth={1}
                ml={10}
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Мой профиль</MenuItem>
              <MenuItem onClick={() => handleLogout()}>Выйти</MenuItem>
              <MenuDivider />
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <NavLink to="/restaurants" key={link}>
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
