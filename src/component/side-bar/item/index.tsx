import React from "react";
import { useHistory } from "react-router";
import * as S from "./styles";
import { SideBarItemProps } from "./types";

const SideBarItem = ({ category }: SideBarItemProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/category/${category.id}`);
  };
  return <S.SideBarItem onClick={handleClick}>{category.name}</S.SideBarItem>;
};

export default SideBarItem;
