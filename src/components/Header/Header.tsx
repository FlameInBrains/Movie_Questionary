import React, { useContext } from "react";
import './Header.scss';
import classNames from "classnames";
import { PageContext } from "../PageContext.tsx";
import { useNavigate } from "react-router";

export const Header: React.FC = () => {
  const {currentPage, setCurrentPage} = useContext(PageContext)
  console.log(currentPage);

  const navigate = useNavigate();

  const handleCLick = () => {
    if (currentPage === 3) {
      setCurrentPage(2);
      navigate('/page=2')
    }

    if (currentPage === 2) {
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
            <div className="icon icon--percent"> 10% </div>

            <div className="icon icon--menu">
            </div>
          </div>
        </div>

        <div className="header__progressBar"></div>
      </div>
    </div>
    </>
  );
};