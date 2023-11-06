import React from 'react';
import style from './style.module.css';

export default function NewNavBar(): JSX.Element {
  return (
    <div className={style.menuContainer}>
      <ul className={style.menu}>
        <li className={style.menuEl}>
          <a className={style.menuLink} href="#">
            home
          </a>
        </li>
        <li className={style.menuEl}>
          <a className={style.menuLink} href="#">
            archives
          </a>
        </li>
        <li className={style.menuEl}>
          <a className={style.menuLink} href="#">
            tags
          </a>
        </li>
        <li className={style.menuEl}>
          <a className={style.menuLink} href="#">
            categories
          </a>
        </li>
        <li className={style.menuEl}>
          <a className={style.menuLink} href="#">
            about
          </a>
        </li>
      </ul>
    </div>
  );
}
