import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

export default function MoreButton({ restID }): JSX.Element {
  return (
    <div className={style.wrapper}>
      <Link className={style.moreA} to={`/restaurants/${restID}`}>
        <span className={style.moreSpan}>Узнать больше</span>
      </Link>
    </div>
  );
}
