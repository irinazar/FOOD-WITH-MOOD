import React, { useState } from 'react';
import style from './style.module.css';

export default function FavoriteButton(): JSX.Element {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  // Используйте переменную isFavorited для управления классом в JSX
  return (
    <div className={style.container}>
      <button onClick={handleFavoriteClick} className={`${style.favorite} ${isFavorited ? style.favorited : ''}`} />
    </div>
  );
}
