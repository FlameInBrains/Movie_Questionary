import React, { useContext, useEffect, useState } from "react";
import './ThirdPage.scss';
import { MovieCard } from "../../components/MovieCard/MovieCard.tsx";
import { fetchMovies } from "../../api/fetch.ts"
import { PageContext } from "../../components/PageContext.tsx";
import { useNavigate } from "react-router";
import ErrorImage from "../../images/Error.png";


//const movies = [{ title: 'Batman', year: '1989', poster: 'https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg' }]

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
}

export const ThirdPage: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const { setCurrentPage, setCurrentPercent } = useContext(PageContext);
  const localQuery = JSON.parse(localStorage.getItem('query') as string).query;
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    localStorage.setItem('currentPage', JSON.stringify('3'));
    localStorage.setItem('currentPercent', JSON.stringify('100'));
    setCurrentPercent('100');
    setCurrentPage(3);

    fetchMovies({
      query: localQuery
    }).then(data => {
      setMovies(data.Search);
    }).catch(() => setError(true)).finally(() => setLoading(false));
  }, [localQuery])

  const navigate = useNavigate();

  const goToNewRoute = () => {
    navigate('/');
  };

  return (
    <>
      <div className="movie__list">
        {isLoading ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {error ? (
              <div className="error__container">
                <div className="notFound__container">
                  <div className="container--img">
                    <img
                      src={ErrorImage}
                      alt="error"
                      className='error__image'
                    />
                  </div>
                  <div className="error__text">
                    <p className="error__text--oops"> Oops, no movie found</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {movies.map((movie, index) => (
                  <MovieCard
                    key={index}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                  />
                ))}

                <div className="button button__last">
                  <button
                    type="button"
                    className="button__text--complete"
                    onClick={() => {
                      goToNewRoute();
                      localStorage.setItem('selectedItem', JSON.stringify(''))
                    }}
                  >
                    Complete
                  </button>
                </div>
              </>
            )}
          </>
        )}

      </div>
    </>
  );
};