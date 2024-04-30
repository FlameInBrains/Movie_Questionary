import React from "react";
import './ChoiseBox.scss';
import classNames from "classnames";

type Props = {
  id: number,
  url: string,
  text: string,
  checkedId: number | null,
  handleChecked: React.Dispatch<React.SetStateAction<number | null>>
}

export const ChoiseBox: React.FC<Props> = ({ id, url, text, checkedId, handleChecked }) => {
  return (
    <div className={classNames('choiseBox', { 'choiseBox--active': id === checkedId })}>
      <div className="choiseBox__content">
        <div className="choiseBox__icons">
          <div className="choiseBox__logo">
            <img src={url} alt='choiseLogo'></img>
          </div>

          <div className="choiseBox__text"> {text} </div>
        </div>

        <div className="choiseBox__radio">
          <input
            id={text}
            type="radio"
            name="choise"
            className="realRadio"
            checked={id === checkedId}
            onChange={() => {
              handleChecked(id);
            }}
          />
          <label htmlFor={text} className="radio-custom"></label>
        </div>
      </div>
    </div>
  );
};