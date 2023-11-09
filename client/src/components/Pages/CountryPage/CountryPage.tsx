import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.css';
import FavoriteButton from '../../UI/FavoriteButton/FavoriteButton';
import { Reveal } from '../../UI/Animations/Reveal';
import { OnTheLeft } from '../../UI/Animations/OnLeft';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { oneCountryActionThunk } from '../../../features/redux/slices/country/CountryThuncks';
import { STATIC_URL } from '../UserAccount/ui/UserInfo';
import { clearAllRestaurants } from '../../../features/redux/slices/country/CountrySlice';

import pizza from '../../../../public/img/pizzapng.png';

import MoreButton from '../../UI/MoreButton/MoreButton';

import Rating from '../../UI/RestaurantPageUI/Rating';

import { ParallaxUp } from '../../UI/Animations/Parallax';
import Hide from '../../UI/Animations/Hide';


export default function CountryPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const oneCountry = useAppSelector((state) => state.countries.oneCountry);
  const user = useAppSelector((state) => state.user);
  const restiks = oneCountry?.Restaurants;
  const ymapRef = useRef(null);
 

  useEffect(() => {
    void dispatch(oneCountryActionThunk(Number(id)));

    // return -> destroy map
    return () => {
      dispatch(clearAllRestaurants());
    };
  }, []);

  const checkid = (): number | null => {
    if (user.status === 'logged') {
      return user.id;
    }
    return null;
  };

  
  const loadMap = () => {
    if (ymaps) {
      ymaps.ready(() => {
        ymapRef.current = new ymaps.Map('map', {
          center: [55.751574, 37.573856],
          zoom: 10,
        });
        const myMap: ymaps.Map = ymapRef.current;
        if (!restiks?.length) return;
        restiks?.forEach((restik) => {
          const placemark = new ymaps.Placemark([restik.coordX, restik.coordY], {
            balloonContentHeader: `<a style="color: black" href ='post/house/${restik.id}'> ${restik.title}</a>`,

            balloonContentBody: restik.description,

            iconLayout: 'default#image',
            iconImageHref: '/img/geo.png',
            iconImageSize: [25, 25],
            iconImageOffset: [-5, -38],
            hintContent: restik.title,
          });

          // Добавляем метку на карту
          if (myMap) {
            myMap.geoObjects.add(placemark);
          }
        });
      });
    }
  };

  useEffect(() => {
    if (restiks?.length && !ymapRef.current) loadMap();
  }, [restiks]);

  return (
    <>

      <div className={style.pageContainer}>
        <div className={style.cuisine}>
          <Reveal>
            <>
              <h1>{oneCountry?.name}</h1>
              <p style={{ fontSize: '25px' }}>{oneCountry?.description}</p>
            </>
          </Reveal>

          <ParallaxUp>
          <Reveal>
            <img style={({ width: '400px' }, { paddingTop: '320px', paddingLeft:'18px'})} src={`${STATIC_URL}/miniImg/${oneCountry?.miniImg}`} alt="" />
            </Reveal>
          </ParallaxUp>
        </div>
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
              <MoreButton restID={el.id} />
              {/* <Rating averageRating={el.Ratings[0].rating} /> */}
            </div>
            <Reveal>
              <div className={style.image}>
                <img style={{ width: '700px'}} src={`${STATIC_URL}/img/restaurants/${el.Images[0].image}`} alt="" />
              </div>
            </Reveal>
          </div>
        </div>
      ))}
      <div className="map" id="map" style={{ width: '100%', height: '400px' }} />
    </>
  );
}
