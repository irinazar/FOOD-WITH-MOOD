import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.css';
import FavoriteButton from '../../UI/FavoriteButton/FavoriteButton';
import Rating from '../../UI/RestaurantPageUI/Rating';
import { Reveal } from '../../UI/Animations/Reveal';
import { OnTheLeft } from '../../UI/Animations/OnLeft';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { oneCountryActionThunk } from '../../../features/redux/slices/country/CountryThuncks';
import { STATIC_URL } from '../UserAccount/ui/UserInfo';

export default function CountryPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const oneCountry = useAppSelector((state) => state.countries.oneCountry);
  
  console.log('----------------------',oneCountry?.Restaurants)
  useEffect(() => {

    void dispatch(oneCountryActionThunk(Number(id)));
  }, []);

  return (
    < >
      <div className={style.cuisine}>
        <Reveal>
          <>
            <h1>{oneCountry?.name}</h1>
            <p style={{fontSize:'25px'}}>{oneCountry?.description}</p>
          </>
        </Reveal>
      </div>

      {
  oneCountry?.Restaurants?.map((el) => (
    <div className={style.miniCardContainer} key={el.id}>
      <div className={style.miniCard}>
        <div className={style.imageText}>
          <Reveal>
            <h1 className={style.restName}>{el.title}</h1>
          </Reveal>

          <OnTheLeft>
            <p>{el.description}</p>
          </OnTheLeft>
          <br />
          <FavoriteButton />
          {el.Ratings ? ( 
            <Rating
              averageRating={
                el.Ratings.map((rating) => rating.rating).reduce((a, b) => a + b, 0) /
                el.Ratings.length
              }
            />
          ) : (
            <p>No ratings available</p>
          )}
        </div>
        <Reveal>
          <div className={style.image}>
            <img
              src={`${STATIC_URL}/img/restaurants/${el.Images[0].image}`}
              alt=""
            />
          </div>
        </Reveal>
      </div>
    </div>
  ))
}
    </>
  );
}
