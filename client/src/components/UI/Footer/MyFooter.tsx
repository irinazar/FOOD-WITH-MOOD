'useClient';

import React from 'react';
import style from './style.module.css';

export default function MyFooter(): JSX.Element {
  return (
    <footer className={style.siteFooter}>
      <div className={style.container}>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Food In Mood</h6>
            <p className={style.textJustify}>
              Это ваш личный путеводитель в мире национальных кухонь. Независимо от того, являетесь
              ли вы местным жителем или туристом, Food in Mood поможет вам найти лучшие рестораны,
              полностью погрузив вас в атмосферу и аутентичные блюда разных стран.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <ul className={style.footerLinks}>
              <li>
                <a href="http://scanfcode.com/about/">О нас</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Контакты</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">Сотрудничество</a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">Источники и правила</a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Обратная связь</a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <hr />
        <br />
      </div>
      <div className="container">
        <div className="row" >
          <div className="col-md- col-sm-6 col-xs-12">
            <p className={style.copyrightText}>
              Copyright &copy; Food In Mood, 2023 г. Все права защищены.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className={style.socialIcons}>
              <li>
                <a className={style.facebook} href="http://scanfcode.com/sitemap/">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a className={style.twitter} href="http://scanfcode.com/sitemap/">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a className={style.dribbble} href="http://scanfcode.com/sitemap/">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
              <li>
                <a className={style.linkedin} href="http://scanfcode.com/sitemap/">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
