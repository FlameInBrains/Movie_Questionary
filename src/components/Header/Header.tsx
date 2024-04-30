import React, { useContext } from "react";
import './Header.scss';
import classNames from "classnames";
import { PageContext } from "../PageContext.tsx";
import { useNavigate } from "react-router";

export const Header: React.FC = () => {
  const { currentPercent, currentPage, setCurrentPage, setCurrentPercent } = useContext(PageContext);

  const navigate = useNavigate();

  const handleCLick = () => {
    if (currentPage === 3) {
      localStorage.setItem('currentPage', JSON.stringify('2'));
      localStorage.setItem('currentPercent', JSON.stringify('66'));
      setCurrentPercent('66');
      setCurrentPage(2);
      navigate('/secondPage')
    }

    if (currentPage === 2) {
      localStorage.setItem('currentPage', JSON.stringify('1'));
      localStorage.setItem('currentPercent', JSON.stringify('33'));
      setCurrentPercent('33');
      setCurrentPage(1);
      navigate('/')
    }
  }

  return (
    <>
    <div className="header">
      <div className="header__content">
        <div className="header__content--icons">
          <div onClick={handleCLick} className={classNames("icon header__arrowButton", {'header__arrowButton--active' : currentPage > 1})}></div>

          <div className="header__icons">
            <div className="icon icon--percent"> {currentPercent}% </div>

            <div className="icon icon--menu">
            </div>
          </div>
        </div>

        <div className={classNames("header__progressBar", {'header__progressBar--sixty' : currentPercent === '66', 'header__progressBar--full': currentPercent === '100'})}></div>
      </div>
    </div>
    </>
  );
};