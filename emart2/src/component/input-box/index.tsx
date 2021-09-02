import React from "react";
import * as S from "./styles";

interface InputProps {
  name?: string;
  placeholder?: string;
  setData?: (e: any) => void;
  onKeyPress?: (e: any) => void;
}

const InputBox = ({ name, placeholder, setData, onKeyPress }: InputProps) => {
  return (
    <S.InputBox
      name={name}
      placeholder={placeholder}
      onKeyUp={setData}
      onKeyPress={onKeyPress}
    />
  );
};

export default InputBox;
