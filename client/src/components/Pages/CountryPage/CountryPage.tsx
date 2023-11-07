import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.css';
import FavoriteButton from '../../UI/FavoriteButton/FavoriteButton';
import { Reveal } from '../../UI/Animations/Reveal';
import { OnTheLeft } from '../../UI/Animations/OnLeft';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { oneCountryActionThunk } from '../../../features/redux/slices/country/CountryThuncks';
import { STATIC_URL } from '../UserAccount/ui/UserInfo';
import Rating from '../../UI/RestaurantPageUI/Rating';

export default function CountryPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const oneCountry = useAppSelector((state) => state.countries.oneCountry);
  const user = useAppSelector((state) => state.user);
  // console.log('-------------',oneCountry?.Restaurants[0].Ratings[0].rating)
  const averageRating = useAppSelector((state)=> state.oneRestaurant.averageRating)

  console.log(averageRating)

  

  useEffect(() => {
    void dispatch(oneCountryActionThunk(Number(id)));
  }, []);


  const checkid = (): number | null => {
    if (user.status === 'logged') {
      return user.id;
    }
    return null;
  }
  return (
    <>
      <div className={style.cuisine}>
        <Reveal>
          <>
            <h1>{oneCountry?.name}</h1>
            <p style={{ fontSize: '25px' }}>{oneCountry?.description}</p>
          </>
        </Reveal>
      </div>

      {oneCountry?.Restaurants?.map((el, index) => (
        <div className={style.miniCardContainer}>
          <div className={style.miniCard}>
            <div className={style.imageText}>
              <Reveal>
                <h1 className={style.restName}> {el.title}</h1>
              </Reveal>

              <OnTheLeft>
                <p>{el.description}</p>
              </OnTheLeft>
              <br />
              <FavoriteButton
                restID={el.id}
                isLiked={el.Favourites.map((fav) => fav.userId).includes(checkid())}
              />
              <Rating averageRating={el.Ratings[0].rating} />
            </div>
            <Reveal>
              <div className={style.image}>
                <img src={`${STATIC_URL}/img/restaurants/${el.Images[0].image}`} alt="" />
              </div>
            </Reveal>
          </div>
        </div>
      ))}
    </>
  );
}
