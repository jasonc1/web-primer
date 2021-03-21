import { MouseEvent } from 'react';

export interface IButtonProps {
  buttonText: string;
  handleClick: (e: MouseEvent) => void;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  variant?: 'primary' | 'secondary';
}

export interface IButtonStyles {
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
}
