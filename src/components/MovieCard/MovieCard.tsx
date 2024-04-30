import React from "react";
import './MovieCard.scss';

type Props = {
  title: string,
  year: string,
  poster: string,
}

export const MovieCard: React.FC<Props> = ({ title, year, poster }) => {
  return (
    <div className='movie-card'>
      <div className='movie-card__image-container'>
        <img
          src={poster}
          alt="movie"
          className='movie-card__image'
        />
      </div>

      <div className="movie-card__title">
        <h3 className="card-title">
          {title}
        </h3>
      </div>
      
      <div className="movie-card__year">
        <p className="card-year">{year}</p>
      </div>
    </div>
  );
}