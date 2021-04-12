export interface ICheckboxProps {
  label: string;
  checked: boolean;
  handleClick?: (id: string) => void;
  id: string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
}

export interface ICheckboxStyle {
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
}
