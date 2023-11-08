import React, { useEffect, useRef, useState } from 'react';
import { MdBuild } from 'react-icons/md';
import { Button, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import style from '../../UserAccount/style.module.css';
import ModalPageRestorant from './ModalPageRestorant';
import ModalNewRestorant from './ModalNewRestorant';
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import { getOwnerThunk } from '../../../../features/redux/slices/lk/lkThuncks';
import type { OwnerType } from '../../../../types/lkTypes/lkTypes';
import useLkHooks from '../../../../hooks/lkHooks/useLkHooks';

function OverlayTwo(): any {
  return <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;
}

type RestorantInfoProps = {
  owner: OwnerType;
};
export const BASE_URL = import.meta.env.VITE_BASE_URL as unknown as { VITE_BASE_URL: string };
export const STATIC_URL = import.meta.env.VITE_STATIC_URL as unknown as { VITE_STATIC_URL: string };

function RestorantInfo({ owner }: RestorantInfoProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const { handlerOwnerSubmit, handlerRestaurantSubmit } = useLkHooks();

  return (
    <div className={style.usercardinfo}>
      <div className={style['profile-card__img']}>
        <img
          src={
            owner?.avatar
              ? `${STATIC_URL}/img/users/${owner?.avatar}`
              : `${STATIC_URL}/img/users/nullavatar.png`
          }
          alt=""
        />
      </div>
      <div className={style['profile-card__cnt']}>
        <div className={style['profile-card__name']}>
          <strong> {owner?.name} </strong>
        </div>
        <div className={style['profile-card__txt']}>
          <strong>{owner?.telephone}</strong>
        </div>

        <div className={style['profile-card-loc']}>
          <span className={style['profile-card-loc__txt']}>{owner?.email}</span>
        </div>
      </div>
      <div className={style['btn-container']}>
        <button
          className={style.buttondel}
          style={{ padding: '5px -5px', marginTop: '10px', marginBottom: '10px' }}
          type="submit"
          onClick={() => {
            setOverlay(<OverlayTwo />);
            setSelectedModal('edit');
            onOpen();
          }}
        >
          Редактировать
        </button>
        <button
          className={style.buttondel}
          style={{ padding: '5px -5px', marginTop: '10px', marginBottom: '10px' }}
          type="submit"
          onClick={() => {
            setOverlay(<OverlayTwo />);
            setSelectedModal('request');
            onOpen();
          }}
        >
          Оставить заявку на заведение
        </button>
      </div>
      {selectedModal === 'edit' && (
        <ModalPageRestorant
          handlerOwnerSubmit={handlerOwnerSubmit}
          id={owner?.id}
          isOpen={isOpen}
          onClose={onClose}
          overlay={overlay}
        />
      )}
      {selectedModal === 'request' && (
        <ModalNewRestorant
          restOwnerId={owner?.id}
          handlerRestaurantSubmit={handlerRestaurantSubmit}
          isOpen={isOpen}
          onClose={onClose}
          overlay={overlay}
        />
      )}
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

export default React.memo(RestorantInfo);
