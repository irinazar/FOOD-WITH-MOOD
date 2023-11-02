import React, { useState } from 'react';
import { MdBuild } from 'react-icons/md';
import { Button, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import style from '../../UserAccount/style.module.css';
import ModalPageRestorant from './ModalPageRestorant';
import ModalNewRestorant from './ModalNewRestorant';

function OverlayTwo(): any {
  return <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;
}
function RestorantInfo(): JSX.Element {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);
  const [selectedModal, setSelectedModal] = useState(null);

  return (
    <div className={style.usercardinfo}>
      <div className={style['profile-card__img']}>
        <img
          src="https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg"
          alt="profile card"
        />
      </div>
      <div className={style['profile-card__cnt']}>
        <div className={style['profile-card__name']}>Какая-то Компания</div>
        <div className={style['profile-card__txt']}>
          <strong>89106666666</strong>
        </div>

        <div className={style['profile-card-loc']}>
          <span className={style['profile-card-loc__txt']}>kompany@yandex.ru</span>
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
        <ModalPageRestorant isOpen={isOpen} onClose={onClose} overlay={overlay} />
      )}
      {selectedModal === 'request' && (
        <ModalNewRestorant isOpen={isOpen} onClose={onClose} overlay={overlay} />
      )}
    </div>
  );
}

export default React.memo(RestorantInfo);
