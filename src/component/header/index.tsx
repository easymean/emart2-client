import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.DesktopLink to="/">
          <S.EmartLogo>이마트</S.EmartLogo>
        </S.DesktopLink>

        <S.LinkContainer>
          <S.DesktopLink to={"/blossom"}>
            <S.LinkText>블라썸</S.LinkText>
          </S.DesktopLink>
          <S.DesktopLink to="/xwiki">
            <S.LinkText>XWiki</S.LinkText>
          </S.DesktopLink>

          <S.DesktopLink to="/jira">
            <S.LinkText>JIRA</S.LinkText>
          </S.DesktopLink>

          <S.DesktopLink to="/confl">
            <S.LinkText>Confluence</S.LinkText>
          </S.DesktopLink>
        </S.LinkContainer>
      </S.Header>
    </>
  );
};

export default Header;
