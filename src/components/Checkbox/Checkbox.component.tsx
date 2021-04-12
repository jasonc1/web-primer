import React, { useState } from 'react';
import './Checkbox.style.scss';
import { ICheckboxProps, ICheckboxStyle } from './Checkbox.model';
import CheckboxIndicator from './CheckboxIndicator/CheckboxIndicator.component';

export const Checkbox = ({
  label,
  checked,
  handleClick,
  id,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: ICheckboxProps) => {
  const checkboxStyle: ICheckboxStyle = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };
  const [value, setValue] = useState(checked);

  const defaultHandler = () => {
    if(handleClick) {handleClick(id)};
    setValue(!value);
  };

  return (
    <label className="twelve cols checkbox" style={checkboxStyle}>
      <CheckboxIndicator handleClick={defaultHandler} value={value} />
      <div className="checkbox__label">{label}</div>
    </label>
  );
};

export default Checkbox;
