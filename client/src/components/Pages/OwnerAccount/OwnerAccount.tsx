import React from 'react';
import RestorantInfo from './ui/RestorantInfo';
import style from '../UserAccount/style.module.css';

export default function OwnerAccount(): JSX.Element {
  return (
    <div className={style.container}>
      <RestorantInfo />

      <div className={style['favorite-restaurants']}>Я владелец </div>

    </div>
  );
}
