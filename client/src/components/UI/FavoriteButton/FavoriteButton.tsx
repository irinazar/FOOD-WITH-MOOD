import React, { useState } from 'react';
import style from './style.module.css';
import { addFavoriteService } from '../../../services/FavoriteService/FavoriteService';

export default function FavoriteButton({ restID, isLiked }): JSX.Element {
  const [isFavorited, setIsFavorited] = useState<boolean>(isLiked);

  const handleFavoriteClick = async (id: number) => {
    try {
      setIsFavorited(!isFavorited);
      await addFavoriteService(id);
    } catch (error) {
      console.error('Произошла ошибка при добавлении в избранное:', error);
    }
  };

  return (
    <div className={style.container}>
      <button
        onClick={() => {
          handleFavoriteClick(restID);
        }}
        className={`${style.favorite} ${isFavorited ? style.favorited : ''}`}
      />
    </div>
  );
}
