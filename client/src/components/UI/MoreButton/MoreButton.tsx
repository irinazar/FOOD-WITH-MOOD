import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

type RestIdType = {
  restID: number
}

export default function MoreButton({ restID }: RestIdType): JSX.Element {
  const handleLinkClick = ():void => {
    // При переходе по ссылке, прокручиваем страницу в начало
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.wrapper}>
      <Link onClick={handleLinkClick} className={style.moreA} to={`/restaurants/${restID}`}>
        <span className={style.moreSpan}>Узнать больше</span>
      </Link>
    </div>
  );
}
