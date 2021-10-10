import React from "react";
import * as S from "./styles";

interface InputProps {
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  onKeyPress?: (e: any) => void;
}

const InputBox = ({ value, placeholder, onChange, onKeyPress }: InputProps) => {
  return (
    <S.InputBox
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />
  );
};

export default InputBox;
