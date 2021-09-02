import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import { DropDownItemProps } from "./types";
const DropDownItem = ({ title, redirect }: DropDownItemProps) => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push(redirect);
  };
  return (
    <S.DropdownItem onClick={handleRedirect}>
      <S.DropdownTitle>{title}</S.DropdownTitle>
    </S.DropdownItem>
  );
};

export default DropDownItem;
