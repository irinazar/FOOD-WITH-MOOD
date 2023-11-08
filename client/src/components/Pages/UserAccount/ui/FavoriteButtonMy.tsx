import React from 'react';
import { useParams } from 'react-router-dom';
import style from '../../../UI/FavoriteButton/style.module.css';
import type { FavoriteType } from '../../../../types/lkTypes/lkTypes';

type FavoriteButtonProps = {
  rest: FavoriteType;
  idUser: number;
  idRest: number;
  handleFavoriteClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    idUser: number,
    idRest: number,
  ) => void;
};

function FavoriteButtonMy({
  rest,
  idUser,
  idRest,
  handleFavoriteClick,
}: FavoriteButtonProps): JSX.Element {
  const { id } = useParams();

  return (
    <div className={style.container}>
      <button
        type="button"
        onClick={(e) => handleFavoriteClick(e, idUser, idRest)}
        className={`
        ${style.favorite}
        ${
          rest.Favourites.find((el) => el.userId === Number(id)) ? style.favorited : style.favorite
        }`}
      />
    </div>
  );
}

export default React.memo(FavoriteButtonMy);
