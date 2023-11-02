import React from 'react';
import RestorantInfo from './ui/RestorantInfo';
import style from '../UserAccount/style.module.css';
import Comment from './ui/Comment';

export default function OwnerAccount(): JSX.Element {
  return (
    <div className={style.container}>
      <RestorantInfo />

      <div className={style['favorite-restaurants']}>Я владелец </div>
      <div className={style['favorite-restaurants']}> Отзывы о моих ресторанах </div>
      <div className={style['comment-owner-container']}>
        <Comment />
      </div>
    </div>
  );
}
