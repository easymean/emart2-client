import React from "react";
import * as S from "./styles";
import { SideBarItemProps } from "./types";

const SideBarItem = ({ category }: SideBarItemProps) => {
  return (
    <S.SideBarItem to={`category/${category.id}`}>
      {category.name}
    </S.SideBarItem>
  );
};

export default SideBarItem;
