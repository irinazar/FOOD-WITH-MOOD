import React from 'react'
import style from './style.module.css';
import type { CountryType } from '../../../../types/categoryType/categoryTypes';
import { STATIC_URL } from '../../UserAccount/ui/UserInfo';

type GitCartProps = {
  country: CountryType;
};

export default function OneCategory({country}: GitCartProps):JSX.Element {
  console.log('-----------',country.img)
  console.log(`${STATIC_URL}/img/countries/${country.img}`)
  return (

<a className={style.card} href={`/countries/${country.id}`}>
        {/* <div className={style.cardBackground} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}/> */}
        <div className={style.cardBackground} style={{ backgroundImage: `url(${STATIC_URL}/img/countries/${country.img})` }} />

        <div className={style.cardContent}>
          <p className={style.cardCategory}>Категория</p>
          <h3 className={style.cardHeading}>{country.name}</h3>
        </div>
      </a>
  )
}
