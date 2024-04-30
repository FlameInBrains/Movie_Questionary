import React, { useContext } from "react";
import './Header.scss';
import classNames from "classnames";
import { PageContext } from "../PageContext.tsx";

export const Header: React.FC = () => {
  const {currentPage} = useContext(PageContext)
  console.log(currentPage);

  return (
    <>
    <div className="header">
      <div className="header__content">
        <div className="header__content--icons">
          <div className={classNames("icon header__arrowButton", {'header__arrowButton--active' : currentPage > 1})}></div>

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