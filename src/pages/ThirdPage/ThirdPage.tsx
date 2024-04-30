import React, { useState } from "react";
import './ThirdPage.scss';
import { MovieCard } from "../../components/MovieCard/MovieCard.tsx";
import { fetchMovies } from "../../api/fetch.ts"

const movies = [{ title: 'Batman', year: '1989', poster: 'https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg' }]

export const ThirdPage: React.FC = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <>
      <div className="movie__list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              year={movie.year}
              poster={movie.poster}
            />
          ))
        )}
      </div>

      <div className="button">
        <button
          type="button"
          className="button__text--complete"
        >
          Complete
        </button>
      </div>
    </>
  );
};