import React from "react";
import * as S from "./styles";

interface InputProps {
  placeholder: string;
  setData: (e: any) => void;
}

const InputBox = ({ placeholder, setData }: InputProps) => {
  return <S.InputBox placeholder={placeholder} onKeyUp={setData} />;
};

export default InputBox;
