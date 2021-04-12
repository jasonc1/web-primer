import { ITextInputProps, ITextInputStyles } from './TextInput.model';
import './TextInput.style.scss';


export const TextInput = ({
  handleChange,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  value
}: ITextInputProps) => {
  

  const textInputStyles: ITextInputStyles = {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  return (
    <div className="row textInput__wrapper">
      <input className="twelve cols textInput__input" style={textInputStyles} onChange={handleChange} value={value}/>
    </div>
  );
};

export default TextInput;
