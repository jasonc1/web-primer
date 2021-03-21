import React from 'react';
import { IButtonProps } from './Button.model';
import classNames from 'classnames';
import './Button.style.scss';

export const Button = ({ handleClick, buttonText, variant }: IButtonProps) => {
  const buttonClass = classNames(
    'twleve cols button',
    { 'button__state--primary': variant == 'primary' },
    { 'button__state--secondary': variant == 'secondary' }
  );

  return (
    <button className={buttonClass} onClick={handleClick}>
      <div className="button__text">{buttonText}</div>
    </button>
  );
};

export default Button;
