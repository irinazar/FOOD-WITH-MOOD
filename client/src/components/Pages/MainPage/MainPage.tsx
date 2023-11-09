import React from 'react';

import style from './style.module.css';

import Categories from '../Categories/Categories';
import Description from '../MainPageDescription.tsx/Description';
import { STATIC_URL } from '../UserAccount/ui/UserInfo';


export default function MainPage(): JSX.Element {
  return (
    <>
      <div className={style.videoContainer}>
        <video className={style.videoBackground} autoPlay muted loop>
          <source src={`${STATIC_URL}/video/Food.mp4`} type="video/mp4" />
        </video>
        <div className={style.content}>
          <div className={style.backgroundShadow}>
            <h1 className={style.brandname}>FOOD with MOOD</h1>
          </div>
        </div>
      </div>
      <div className={style.shadow}>sdv</div>

      <Description />

      <Categories />
    </>
  );
}
