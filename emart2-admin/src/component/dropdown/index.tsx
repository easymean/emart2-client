import React from "react";
import * as S from "./styles";
import { DropDownItemProps } from "./types";
const DropDownItem = ({ title, redirect }: DropDownItemProps) => {
  const handleRedirect = () => {
    window.location.href = `http://localhost:3000/${redirect}`;
  };
  return (
    <S.DropdownItem onClick={handleRedirect}>
      <S.DropdownTitle>{title}</S.DropdownTitle>
    </S.DropdownItem>
  );
};

export default DropDownItem;
