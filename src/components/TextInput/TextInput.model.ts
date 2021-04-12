
export interface ITextInputProps {
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  value: string;
}

export interface ITextInputStyles {
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
}
