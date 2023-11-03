import React from 'react'
import style from './style.module.css';
import type { CountryType } from '../../../../types/categoryType/categoryTypes';

type GitCartProps = {
  country: CountryType;
};

export default function OneCategory({country}: GitCartProps):JSX.Element {
  return (
    <a className={style.card} href="#">
        <div className={style.cardBackground} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}/>
        <div className={style.cardContent}>
          <p className={style.cardCategory}>{country.name}</p>
          <h3 className={style.cardHeading}>{country.description}</h3>
        </div>
      </a>
  )
}
