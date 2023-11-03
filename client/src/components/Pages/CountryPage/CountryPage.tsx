import React from 'react';
import style from './style.module.css';
import FavoriteButton from '../../UI/FavoriteButton/FavoriteButton';
import Rating from '../../UI/RestaurantPageUI/Rating';

export default function CountryPage(): JSX.Element {
  return (
    <>
    
      <div className={style.cuisine}>
        <h1>Итальянская кухня</h1>
      </div>
    <div className={style.miniCardContainer}>

      <div className={style.miniCard}>
       
        <div className={style.imageText}>
       <h1 className={style.restName}> Some interesting text</h1>
       <p> some interesting text</p>
       <br />
          <FavoriteButton/>
          <Rating/>

       </div>
        <div className={style.image}>
          <img
            src="https://toohotel.com/wp-content/uploads/2022/09/TOO_restaurant_Panoramique_vue_Paris_Seine_Tour_Eiffel_2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    </>
    
  );
}
