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

function RestorantInfo({ owner }: RestorantInfoProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const { handlerOwnerSubmit, handlerRestaurantSubmit } = useLkHooks();
  return (
    <div className={style.usercardinfo}>
      <div className={style['profile-card__img']}>
        <img
          src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg"
          alt="profile card"
        />
      </div>
      <div className={style['profile-card__cnt']}>
        <div className={style['profile-card__name']}>{owner?.name}</div>
        <div className={style['profile-card__txt']}>
          <strong>{owner?.telephone}</strong>
        </div>

        <div className={style['profile-card-loc']}>
          <span className={style['profile-card-loc__txt']}>{owner?.email}</span>
        </div>
      </div>
      <div className={style['btn-container']}>
        <Button
          className={style['btn-rest']}
          onClick={() => {
            setOverlay(<OverlayTwo />);
            setSelectedModal('edit');
            onOpen();
          }}
          leftIcon={<MdBuild />}
          variant="outline"
          size={{ base: 'sm', md: 'md', lg: 'lg' }}
        >
          Редактировать
        </Button>
        <Button
          className={style['btn-rest']}
          onClick={() => {
            setOverlay(<OverlayTwo />);
            setSelectedModal('request');
            onOpen();
          }}
          fontSize="10px"
          variant="outline"
          size={{ base: 'sm', md: 'md', lg: 'lg' }}
        >
          Оставить заявку на ваше заведение
        </Button>
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
    </div>
  );
}

export default React.memo(RestorantInfo);
