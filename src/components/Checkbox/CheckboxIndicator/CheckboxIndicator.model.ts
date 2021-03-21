import { MouseEvent } from 'react';

export interface ICheckboxIndidcatorProps {
  handleClick: (e: MouseEvent) => void;
  value: boolean;
}
