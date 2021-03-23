import React from 'react';
import { ISelectProps, ISelectStyle, selectOption } from './Select.model';
import './Select.style.scss';

export const Select = ({
  options,
  onChange,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  defaultValue = 'DEFAULT',
}: ISelectProps) => {
  const selectStyle: ISelectStyle = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };
  return (
    <div className="select__wrapper" style={selectStyle}>
      <select
        className="twelve cols select"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <option value="DEFAULT" disabled hidden>
          Choose option
        </option>
        {(options as selectOption[]).map((obj: selectOption, index: number) => (
          <option value={obj.value} key={index}>
            {obj.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
