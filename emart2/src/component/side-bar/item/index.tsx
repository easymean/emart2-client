import React from "react";
import { useHistory } from "react-router";
import * as S from "./styles";
import { SideBarItemProps } from "./types";

const SideBarItem = ({ item }: SideBarItemProps) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`${item.redirect}`);
  };
  return <S.SideBarItem onClick={handleClick}>{item.name}</S.SideBarItem>;
};

export default SideBarItem;
