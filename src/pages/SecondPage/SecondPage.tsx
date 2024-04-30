import React, { useContext, useEffect, useState } from "react";
import './SecondPage.scss';
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';
import { PageContext } from "../../components/PageContext.tsx";

export const SecondPage: React.FC = () => {
  const { setCurrentPage, setCurrentPercent } = useContext(PageContext);
  const [isError, setError] = useState(false);
  const [query, setQuery] = useState('');
  const symbols = ['@', '#', '$', '%', '^', '&', '*', '~'];

  const isDisabled = query ? false : true;

  const isValid = (query) => {
    if (query.split('').filter((char) => typeof(char) === 'string').length >= 2 
        && query.split('').filter((char) => parseInt(char) >= 0 && parseInt(char) <= 9).length <= 4 
        && query.split('').filter((char) => symbols.includes(char)).length <= 2
    ) {
        return true;
      }

      return false
  }

  const navigate = useNavigate();

  const goToNewRoute = () => {
    navigate('/thirdPage');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (query.trim().length === 0 || !isValid(query)) {
      setError(true);
      return;
    }

    goToNewRoute();
  }

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setError(false);
  }

  useEffect(() => {
    localStorage.setItem('currentPage', JSON.stringify('2'));
    localStorage.setItem('currentPercent', JSON.stringify('66'));
    setCurrentPercent('66');
    setCurrentPage(2);
  }, [])

  return (
    <>
      <form className="movie__get" onSubmit={handleSubmit}>
        <div className="choise__form">
          <h2 className="movie__get--text"> Enter movie title </h2>

          <div className="movie__get--field">

            <div className="control">
              <label className="label" htmlFor='movie_title'>
              </label>
              
              <input
                type="text"
                id='movie_title'
                className={classNames("form_input", {'form_input--error': isError})}
                placeholder='Movie title here'
                value={query}
                onChange={handleQueryChange}
              />
            </div>

            <p className={classNames("error_text", {'error_text--active' : isError})}> A correct movie title is required</p>
          </div>

          <div className="button">
            <button
              type="submit"
              className={classNames("button__text", { 'button__text--active': query })}
              onClick={(event) => {
                handleSubmit(event);
              }}
              disabled={isDisabled}
            >
              Continue
            </button>
        </div>
        </div>
      </form>
    </>
  );
};