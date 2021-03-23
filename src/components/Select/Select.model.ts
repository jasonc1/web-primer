import { MouseEvent } from 'react';

export type selectOption = {
  option: string;
  value: string;
};

export interface ISelectProps {
  options: selectOption[];
  onChange?: (e: MouseEvent) => void;
  defaultValue?: string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
}

export interface ISelectStyle {
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
}
