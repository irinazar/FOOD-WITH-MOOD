import React, { useEffect } from 'react'
import style from './style.module.css';
import OneCategory from './oneCategory/oneCategory';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { allCountriesActionThunk } from '../../../features/redux/slices/country/CountryThuncks';


export default function Categories(): JSX.Element {

  const dispatch = useAppDispatch()
  const countries = useAppSelector((state)=> state.countries.countries)

  useEffect(()=> {
    void dispatch(allCountriesActionThunk())
  }, [])

  return (
    <div className={style.heroSection}>
    <div className={style.cardGrid}>
   {countries.map((el)=> <OneCategory key={el.id} country={el}/> )} 
    </div>
  </div>
  )
}
