import React, { useState } from 'react';
import {  ModalOverlay, useDisclosure } from '@chakra-ui/react';
import style from '../style.module.css';

import ModalPage from './ModalPage';
import type { UserLkType } from '../../../../types/lkTypes/lkTypes';
import useLkHooks from '../../../../hooks/lkHooks/useLkHooks';

export const BASE_URL = import.meta.env.VITE_BASE_URL as unknown as { VITE_BASE_URL: string };
export const STATIC_URL = import.meta.env.VITE_STATIC_URL as unknown as { VITE_STATIC_URL: string };

function OverlayTwo(): any {
  return <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;
}

type UserInfoProps = {
  userlk: UserLkType;
};
function UserInfo({ userlk }: UserInfoProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);
  const { handlerSubmit } = useLkHooks();

  console.log(userlk);

  return (
    <div className={style.usercardinfo}>
      <div className={style['profile-card__img']}>
        <img
          src={
            userlk?.avatar
              ? `${STATIC_URL}/img/users/${userlk.avatar}`
              : `${STATIC_URL}/img/users/nullavatar.png`
          }
          alt=" "
        />
      </div>
      <div className={style['profile-card__cnt']}>
        <div className={style['profile-card__name']}>
          {' '}
          <strong>{userlk?.name} </strong>
        </div>
        <div className={style['profile-card__txt']}>
          <strong>{userlk?.telephone}</strong>
        </div>
        <div className={style['profile-card-loc']}>
          <span className={style['profile-card-loc__txt']}>{userlk?.email}</span>
        </div>
      </div>
      <button
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
        className={style.buttondel}
        style={{ padding: '5px -5px', marginTop: '10px', marginBottom: '10px' }}
        type="submit"
      >
        Редактировать
      </button>
      <ModalPage
        handlerSubmit={handlerSubmit}
        id={userlk?.id}
        isOpen={isOpen}
        onClose={onClose}
        overlay={overlay}
      />
      <div className={style.area}>
        <ul className={style.circles}>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
}

export default React.memo(UserInfo);
