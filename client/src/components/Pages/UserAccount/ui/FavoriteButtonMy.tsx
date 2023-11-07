import React, { useState } from 'react';
import style from '../../../UI/FavoriteButton/style.module.css';

type FavoriteButtonProps = {
  idUser: number;
  idRest: number;
  handleFavoriteClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    idUser: number,
    idRest: number,
  ) => void;
  isFavorited: boolean;
};

function FavoriteButtonMy({
  rest,
  idUser,
  idRest,
  handleFavoriteClick,
}: FavoriteButtonProps): JSX.Element {
  return (
    <div className={style.container}>
      <button
        onClick={(e) => handleFavoriteClick(e, idUser, idRest)}
        className={`${style.favorite} ${
          rest.Favourites.length > 0 ? style.favorited : style.favorite
        }`}
      />
    </div>
  );
}

export default React.memo(FavoriteButtonMy);
