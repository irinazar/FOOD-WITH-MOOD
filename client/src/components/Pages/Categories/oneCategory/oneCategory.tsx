import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import type { CountryType } from '../../../../types/categoryType/categoryTypes';
import { STATIC_URL } from '../../UserAccount/ui/UserInfo';

type GitCartProps = {
  country: CountryType;
};

export default function OneCategory({ country }: GitCartProps): JSX.Element {
  const handleLinkClick = ():void => {
    // При переходе по ссылке, прокручиваем страницу в начало
    window.scrollTo(0, 0);
  };

  return (
    <Link to={`/countries/${country.id}`} className={style.card} onClick={handleLinkClick}>
      <div className={style.cardBackground} style={{ backgroundImage: `url(${STATIC_URL}/img/countries/${country.img})` }} />
      <div className={style.cardContent}>
        <p className={style.cardCategory}>Категория</p>
        <h3 className={style.cardHeading}>{country.name}</h3>
      </div>
    </Link>
  );
}

