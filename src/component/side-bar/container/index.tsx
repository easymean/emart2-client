import React from "react";

import * as S from "./styles";
import { useCategory } from "./hooks";
import SideBarItem from "@/component/side-bar/item";
import { STATIC_URL } from "@/asset/constant";

const SideBarContainer = () => {
  const { categoryList } = useCategory();

  return categoryList.length !== 0 ? (
    <S.SideBarContainer>
      <S.DesktopLink to="/">
        <S.Logo src={STATIC_URL.LOGO} alt="emart logo"></S.Logo>
      </S.DesktopLink>

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
