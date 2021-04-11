import React, { useState } from 'react';
import './Main.style.scss';
import Checkbox from '../../components/Checkbox/Checkbox.component';
import Button from '../../components/Button/Button.component';
import Select from '../../components/Select/Select.component';

export const Main = () => {
  const [number, setNumber] = useState(0);
  const [selectValue, setSelect] = useState("");
  console.log(selectValue);

  const handleButtonClick = () => {
    const num = number + 1;
    setNumber(num);
  };

  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLTextAreaElement;

    setSelect(target.value);
  };

  const options = [
    {
      option: 'banana',
      value: 'banana',
    },
    {
      option: 'dragon',
      value: 'dragon',
    },
    {
      option: 'motorcycle',
      value: 'motorcycle',
    },
  ];
  return (
    <div className="row container main">
      <div className="twelve cols main__title">Main app container</div>
      <div className="twelve cols">
        <div className="row">
          <div className="two cols main__number">{number}</div>
          <div className="two cols">
            <Button buttonText="click me" handleClick={handleButtonClick} />
          </div>

          <div className="two cols">
            <Select options={options} onChange={handleSelect} />
          </div>
        </div>
      </div>
      <div className="six cols">
        <Button
          buttonText="another action"
          variant="secondary"
          handleClick={handleButtonClick}
          marginTop={8}
        />
      </div>
      <div className="twelve cols">
        <Checkbox label="test checkbox" checked={false} marginTop={8} />
      </div>
      <div className="six cols">
        <Select options={options} onChange={handleSelect} marginTop={8} />
      </div>
    </div>
  );
};

export default Main;
