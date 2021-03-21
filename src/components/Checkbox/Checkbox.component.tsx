import React, { useState } from 'react';
import './Checkbox.style.scss';
import { ICheckboxProps } from './Checkbox.model';
import CheckboxIndicator from './CheckboxIndicator/CheckboxIndicator.component';

export const Checkbox = ({ label, checked }: ICheckboxProps) => {
  const [value, setValue] = useState(checked);
  console.log('checkbox value: ' + value);

  const onClick = () => {
    const newValue = !value;
    setValue(newValue);
  };

  return (
    <label className="twelve cols checkbox">
      <CheckboxIndicator handleClick={onClick} value={value} />
      <div className="checkbox__label">{label}</div>
    </label>
  );
};

export default Checkbox;
