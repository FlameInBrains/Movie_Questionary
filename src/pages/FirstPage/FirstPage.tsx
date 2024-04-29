import React, { useEffect, useState } from "react";
import './FirstPage.scss';
import { ChoiseBox } from "../../components/ChoiseBoxes/ChoiseBox.tsx";
import dramaLogo from '../../images/drama.png';
import comedyLogo from '../../images/comedy.png';
import actionLogo from '../../images/action.png';
import thrillerLogo from '../../images/thriller.png';
import scienceLogo from '../../images/science.png';
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const boxes = [
  {
    url: dramaLogo,
    text: 'Drama',
  },

  {
    url: comedyLogo,
    text: 'Comedy',
  },

  {
    url: actionLogo,
    text: 'Action',
  },

  {
    url: thrillerLogo,
    text: 'Thriller',
  },

  {
    url: scienceLogo,
    text: 'Science',
  }
]

export const FirstPage: React.FC = () => {
  const [checkedId, setCheckedId] = useState<number | null>(null);
  const isDisabled = checkedId === null ? true : false;

  const isChosen = () => {
    if (checkedId) {
      return boxes.find((box, index) => index === checkedId)?.text
    }
  }

  return (
    <div className="firstPage">
      <div className="firstPage__content">
        <h1 className="title">Your favourire movie genre?</h1>

        {boxes.map((box, index) => 
          <ChoiseBox 
            key={index}
            id={index}
            url={box.url} 
            text={box.text} 
            checkedId={checkedId}
            handleChecked={setCheckedId}
          />
        )}
      </div>

      <div className="button">
        <NavLink to="/second_page" className="button__link">
          <button 
            type="button" 
            className={classNames("button__text", {'button__text--active': !isDisabled})}
            disabled={isDisabled}
            onClick={() => {
              localStorage.setItem('selectedItem', JSON.stringify(isChosen()))
            }}
          >
            Continue
          </button>
        </NavLink>
      </div>
    </div>
  );
};