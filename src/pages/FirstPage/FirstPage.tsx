import React from "react";
import './FirstPage.scss';
import { ChoiseBox } from "../../components/ChoiseBoxes/ChoiseBox.tsx";
import dramaLogo from '../../images/drama.png';
import comedyLogo from '../../images/comedy.png';
import actionLogo from '../../images/action.png';
import thrillerLogo from '../../images/thriller.png';
import scienceLogo from '../../images/science.png'

export const FirstPage: React.FC = () => {
  return (
    <div className="firstPage">
      <div className="firstPage__content">
        <h1 className="title">Your favourire movie genre?</h1>

        <ChoiseBox url={dramaLogo} text={'Drama'}/>
        <ChoiseBox url={comedyLogo} text={'Comedy'}/>
        <ChoiseBox url={actionLogo} text={'Action'}/>
        <ChoiseBox url={thrillerLogo} text={'Thriller'}/>
        <ChoiseBox url={scienceLogo} text={'Science fiction'}/>
      </div>
    </div>
  );
};