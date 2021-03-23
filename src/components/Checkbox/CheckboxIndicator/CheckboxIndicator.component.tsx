import React from 'react';
import { ICheckboxIndidcatorProps } from './CheckboxIndicator.model';
import classNames from 'classnames';
import './CheckboxIndicator.style.scss';

export const CheckboxIndicator = ({
  handleClick,
  value,
}: ICheckboxIndidcatorProps) => {
  const indicatorClassName = classNames(
    'checkbox__indicator',
    { 'checkbox__indicator--checked': value },
    { 'checkbox__indicator--unchecked': !value }
  );

  return (
    <>
      <input
        type="checkbox"
        defaultChecked={value}
        onClick={handleClick}
        className="checkbox--hide"
      />

      <div role="checkbox" aria-checked={value} className={indicatorClassName}>
        {value ? <span className="material-icons md-24">done</span> : undefined}
      </div>
    </>
  );
};

export default CheckboxIndicator;
