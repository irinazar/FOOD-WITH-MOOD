import React from 'react'
import style from './style.module.css';


export default function Categories(): JSX.Element {
  return (
    <div className={style.heroSection}>
    <div className={style.cardGrid}>
      <a className={style.card} href="#">
        <div className={style.cardBackground} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}/>
        <div className={style.cardContent}>
          <p className={style.cardCategory}>Category</p>
          <h3 className={style.cardHeading}>Example Card Heading</h3>
        </div>
      </a>
      <a className={style.card} href="#">
        <div className={style.cardBackground} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}/>
        <div className={style.cardContent}>
          <p className={style.cardCategory}>Category</p>
          <h3 className={style.cardHeading}>Example Card Heading</h3>
        </div>
      </a>
      <a className={style.card} href="#">
        <div className={style.cardBackground} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}/>
        <div className={style.cardContent}>
          <p className={style.cardCategory}>Category</p>
          <h3 className={style.cardHeading}>Example Card Heading</h3>
        </div>
      </a>
      <a className={style.card} href="#">
        <div className={style.cardBackground} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}/>
        <div className={style.cardContent}>
          <p className={style.cardCategory}>Category</p>
          <h3 className={style.cardHeading}>Example Card Heading</h3>
        </div>
      </a>
    </div>
  </div>
  )
}
