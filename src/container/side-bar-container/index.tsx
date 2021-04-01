import React, { useState } from "react";
import * as S from "./styles";

import SideBarItem from "@/component/side-bar-item";
import { categoryData } from "../../module/data/categoryData";

const SideBarContainer = () => {
  const categoryList = categoryData;

  return categoryList.length !== 0 ? (
    <S.SideBarListContainer>
      {categoryList.map((item) => (
        <S.SideBarItemWrapper key={item.id}>
          <SideBarItem category={item} />
        </S.SideBarItemWrapper>
      ))}
    </S.SideBarListContainer>
  ) : (
    <S.SideBarListContainer></S.SideBarListContainer>
  );
};
export default SideBarContainer;
