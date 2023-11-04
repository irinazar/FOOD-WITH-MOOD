import React, { useState } from 'react';
import { MdBuild } from 'react-icons/md';
import { Button, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import style from '../style.module.css';
import ModalPage from './ModalPage';
import type { UserLkType } from '../../../../types/lkTypes/lkTypes';
import useLkHooks from '../../../../hooks/lkHooks/useLkHooks';

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


  return (
    <div className={style.usercardinfo}>
      <div className={style['profile-card__img']}>
        <img
          src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg"
          alt="profile card"
        />
      </div>
      <div className={style['profile-card__cnt']}>
        <div className={style['profile-card__name']}>{userlk?.name}</div>
        <div className={style['profile-card__txt']}>
          <strong>{userlk?.telephone}</strong>
        </div>
        <div className={style['profile-card-loc']}>
          <span className={style['profile-card-loc__txt']}>{userlk?.email}</span>
        </div>
      </div>
      <Button
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
        className={style['btn-rest']}
        leftIcon={<MdBuild />}
        variant="outline"
        size={{ base: 'sm', md: 'md', lg: 'lg' }}
      >
        Редактировать
      </Button>
      <ModalPage handlerSubmit={handlerSubmit} id={userlk?.id} isOpen={isOpen} onClose={onClose} overlay={overlay} />
    </div>
  );
}

export default React.memo(UserInfo);
