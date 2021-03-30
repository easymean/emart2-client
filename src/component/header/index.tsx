import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderContainer>
          <S.LogoContainer>
            <S.DesktopLink to="/">
              <S.EmartLogo
                src="/src/asset/images/emart_logo.png"
                alt="emart logo"
              ></S.EmartLogo>
            </S.DesktopLink>
          </S.LogoContainer>

          <S.MenuContainer>
            <S.MenuWrapper>
              <S.DesktopLink to={"/blossom"}>블라썸</S.DesktopLink>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <S.DesktopLink to="/xwiki">XWiki</S.DesktopLink>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <S.DesktopLink to="/jira">JIRA</S.DesktopLink>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <S.DesktopLink to="/confl">Confluence</S.DesktopLink>
            </S.MenuWrapper>
          </S.MenuContainer>
        </S.HeaderContainer>
      </S.Header>
    </>
  );
};

export default Header;
