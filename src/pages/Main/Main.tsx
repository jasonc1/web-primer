import React, { useState } from 'react';
import './Main.style.scss';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import Button from '../../components/Button/Button.component';

export const Main = () => {
  const [number, setNumber] = useState(0);
  const handleButtonClick = () => {
    const num = number + 1;
    setNumber(num);
  };

  return (
    <div className="row container main">
      <div className="twelve cols main__title">Main app container</div>
      <div className="twelve cols">
        <div className="row">
          <div className="two cols main__number">{number}</div>
          <div className="two cols">
            <Button buttonText="click me" handleClick={handleButtonClick} />
          </div>
        </div>
      </div>
      <div className="twelve cols">
        <Button
          buttonText="click me"
          variant="secondary"
          handleClick={handleButtonClick}
          marginTop={8}
        />
      </div>
      <div className="twelve cols">
        <Checkbox label="test checkbox" checked={true} />
      </div>
    </div>
  );
};

export default Main;
