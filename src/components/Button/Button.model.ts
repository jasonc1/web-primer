import { MouseEvent } from 'react';

export interface IButtonProps {
  buttonText: string;
  handleClick: (e: MouseEvent) => void;
  variant: 'primary' | 'secondary';
}

export interface IButtonStyles {
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRigt: number;
}
