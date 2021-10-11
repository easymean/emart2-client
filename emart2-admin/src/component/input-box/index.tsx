import React from "react";
import * as S from "./styles";

interface InputProps {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  onKeyPress?: (e: any) => void;
}

const InputBox = ({
  name,
  value,
  placeholder,
  onChange,
  onKeyPress,
}: InputProps) => {
  return (
    <S.InputBox
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
      name={name}
    />
  );
};

export default InputBox;
