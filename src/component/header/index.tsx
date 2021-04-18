import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "@asset/constant";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.DesktopLink to="/">
          <S.Logo src={STATIC_URL.LOGO} alt="emart logo"></S.Logo>
        </S.DesktopLink>

        <S.MenuContainer>
          <S.DesktopLink to="/blossom">
            <S.MenuWrapper>블라썸 </S.MenuWrapper>
          </S.DesktopLink>

          <S.DesktopLink to="/xwiki">
            <S.MenuWrapper>XWiki</S.MenuWrapper>
          </S.DesktopLink>

          <S.DesktopLink to="/jira">
            <S.MenuWrapper>JIRA</S.MenuWrapper>
          </S.DesktopLink>

          <S.DesktopLink to="/confl">
            <S.MenuWrapper>Confluence</S.MenuWrapper>
          </S.DesktopLink>
        </S.MenuContainer>
      </S.Header>
    </>
  );
};

export default Header;
