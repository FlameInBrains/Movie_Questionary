import React from "react";
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <>
    <div className="header">
      <div className="header__content">
        <div className="header__content--icons">
          <div className="icon header__arrowButton"></div>

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