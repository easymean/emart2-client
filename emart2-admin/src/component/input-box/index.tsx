import React from "react";
import * as S from "./styles";

interface InputProps {
  value?: string;
  placeholder?: string;
  setData?: (e: any) => void;
  onKeyPress?: (e: any) => void;
}

const InputBox = ({ value, placeholder, setData, onKeyPress }: InputProps) => {
  return (
    <S.InputBox
      placeholder={placeholder}
      onChange={setData}
      onKeyPress={onKeyPress}
      value={value}
    />
  );
};

export default InputBox;
