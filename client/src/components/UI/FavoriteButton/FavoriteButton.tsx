import React, { useState } from 'react';
import style from './style.module.css';

export default function FavoriteButton(): JSX.Element {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className={style.container}>
      <button onClick={handleFavoriteClick} className={`${style.favorite} ${isFavorited ? style.favorited : ''}`} />
    </div>
  );
}
