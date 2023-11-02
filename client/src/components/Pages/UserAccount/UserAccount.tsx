import React from 'react';
import UserInfo from './ui/UserInfo';
import style from './style.module.css';

export default function UserAccount(): JSX.Element {
  return (
    <div className={style.container}>
      <UserInfo />

      <div className={style['favorite-restaurants']}>Любимые рестораны</div>

      <div className={style['favorite-restaurants']}>Ваша подборка</div>
    </div>
  );
}
