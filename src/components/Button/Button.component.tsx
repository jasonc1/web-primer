import React from 'react';
import { IButtonProps, IButtonStyles } from './Button.model';
import classNames from 'classnames';
import './Button.style.scss';

export const Button = ({
  handleClick,
  buttonText,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  variant = 'primary',
}: IButtonProps) => {
  const buttonClass = classNames(
    'row button',
    { 'button__state--primary': variant === 'primary' },
    { 'button__state--secondary': variant === 'secondary' }
  );

  const buttonStyles: IButtonStyles = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  return (
    <button className={buttonClass} style={buttonStyles} onClick={handleClick}>
      <div className="twelve cols button__text">{buttonText}</div>
    </button>
  );
};

export default Button;
