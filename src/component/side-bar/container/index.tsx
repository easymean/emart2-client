import React from "react";

import * as S from "./styles";
import { useCategory } from "./hooks";
import SideBarItem from "@/component/side-bar/item";

const SideBarContainer = () => {
  const { categoryList } = useCategory();

  return categoryList.length !== 0 ? (
    <S.SideBarContainer>
      {categoryList.map((item) => (
        <S.SideBarItemWrapper key={item.id}>
          <SideBarItem category={item} />
        </S.SideBarItemWrapper>
      ))}
    </S.SideBarContainer>
  ) : (
    <S.SideBarContainer></S.SideBarContainer>
  );
};
export default SideBarContainer;
