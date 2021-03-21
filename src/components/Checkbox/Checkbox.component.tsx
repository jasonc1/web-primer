import React, { useState } from 'react';
import './Checkbox.style.scss';
import { ICheckboxProps } from './Checkbox.model';

export const Checkbox = ({ label, checked }: ICheckboxProps) => {
  const [value, setValue] = useState(checked);
  console.log('checkbox value: ' + value);

  const onClick = () => {
    const newValue = !value;
    setValue(newValue);
  };

  return (
    <div className="twelve cols">
      <label>
        <input type="checkbox" checked={value} onClick={onClick} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
