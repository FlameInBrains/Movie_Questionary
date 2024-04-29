import React, { useState } from "react";
import './ChoiseBox.scss';
import classNames from "classnames";

type Props = {
  url: string,
  text: string
}

export const ChoiseBox: React.FC<Props> = ({ url, text }) => {
  const [isChecked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!isChecked);
  };

  return (
    <div className={classNames('choiseBox', {'ChoiseBox--isActive': isChecked})}>
      <div className="choiseBox__content">
        <div className="choiseBox__icons">
          <div className="choiseBox__logo">
            <img src={url} alt='choiseLogo'></img>
          </div>

          <div className="choiseBox__text"> {text} </div>
        </div>

        <div className="choiseBox__checkBox">
          <input 
            type="checkbox" 
            className="realCheckbox" 
            checked={isChecked}
            onChange={handleChecked}
          />
          <span className="checkbox-custom"></span>
        </div>
      </div>
    </div>
  );
};