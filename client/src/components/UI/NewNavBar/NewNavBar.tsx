import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import style from './style.module.css';
import ThemeSwitch from '../ThemeSwitch';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { logoutUserThunk } from '../../../features/redux/slices/user/UserThunks';

import { logoutOwnerThunk } from '../../../features/redux/slices/authOwner/authOwnerThunks';

export default function NewNavBar(): JSX.Element {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user) as {
    id: number;
    status: string;
    isAdmin: boolean;
  };



  const owner = useAppSelector((state) => state.authOwner) as {
    id: number;
    status: string;
    isAdmin: boolean;
    isOwner: boolean;
  };

  const handleLogout = (): void => {
    void dispatch(logoutUserThunk());
    void dispatch(logoutOwnerThunk());
    // void dispatch(setRole('user'));
  };
  return (
    <div className={style.menuContainer}>
      <Box className={style.brand}>
        <NavLink to="/" className={style.brand}>
          FOOD with MOOD
        </NavLink>
      </Box>
      <ul className={style.menu}>
        <li className={style.menuEl}>
          <NavLink className={style.menuLink} to="/">
            Главная
          </NavLink>
        </li>
        <li className={style.menuEl}>
          {user.status === 'logged' && user.isAdmin && (
            <NavLink className={style.menuLink} to="/admin">
              Админ
            </NavLink>
          )}
        </li>
        <li className={style.menuEl}>
          {user.status === 'logged' && !user.isAdmin && (
            <NavLink className={style.menuLink} to={`/user/${user?.id}`}>
              ЛК пользователя
            </NavLink>
          )}
        </li>
        <li className={style.menuEl}>
          {owner.status === 'logged' && !user.isAdmin && (
            <NavLink className={style.menuLink} to={`/owner/${owner?.id}`}>
              ЛК ресторана
            </NavLink>
          )}
        </li>
        <li className={style.menuEl}>
          {user.status === 'guest' && owner.status === 'guest' && (
            <NavLink className={style.menuLink} to="/login">
              Вход / Регистрация
            </NavLink>
          )}
        </li>
        <li className={style.menuEl}>
          {(user.status === 'logged' || owner.status === 'logged') && (
            <NavLink className={style.menuLink} to="/login" onClick={() => handleLogout()}>
              Выйти
            </NavLink>
          )}
        </li>
      </ul>
      <Flex alignItems="center">
        <ThemeSwitch />
      </Flex>
    </div>
  );
}
