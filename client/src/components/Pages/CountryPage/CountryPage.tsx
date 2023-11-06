import React from 'react';
import style from './style.module.css';
import FavoriteButton from '../../UI/FavoriteButton/FavoriteButton';
import Rating from '../../UI/RestaurantPageUI/Rating';
import { Reveal } from '../../UI/Animations/Reveal';
import { OnTheLeft } from '../../UI/Animations/OnLeft';

export default function CountryPage(): JSX.Element {
  return (
    <>
      <div className={style.cuisine}>
        <Reveal>
          <h1>Итальянская кухня</h1>
        </Reveal>
      </div>
      <div className={style.miniCardContainer}>
        <div className={style.miniCard}>
          <div className={style.imageText}>
            <Reveal>
              <h1 className={style.restName}> Some interesting text</h1>
            </Reveal>

            <OnTheLeft>
              <p> some interesting text</p>
            </OnTheLeft>
            <br />
            <FavoriteButton />
            {/* <Rating /> */}
          </div>
          <Reveal>
            <div className={style.image}>
              <img
                src="https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_Seine_Tour_Eiffel_2.jpg"
                alt=""
              />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
