import React, { useState } from 'react';
import './Checkbox.style.scss';
import { ICheckboxProps, ICheckboxStyle } from './Checkbox.model';
import CheckboxIndicator from './CheckboxIndicator/CheckboxIndicator.component';

export const Checkbox = ({
  label,
  checked,
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

  const handleClick = () => {
    // state should be handled outside of the component, too lazy to update this.
    const newValue = !value;
    setValue(newValue);
  };

  return (
    <label className="twelve cols checkbox" style={checkboxStyle}>
      <CheckboxIndicator handleClick={handleClick} value={value} />
      <div className="checkbox__label">{label}</div>
    </label>
  );
};

export default Checkbox;
