import React from "react";
import * as S from "./styles";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.DesktopLink to="/">
          <S.EmartLogo
          src="/src/asset/images/emart_logo.png"
          alt="emart logo">
          </S.EmartLogo>
        </S.DesktopLink>

        <S.LinkContainer>
          <S.DesktopLink to={"/blossom"}>
           블라썸
          </S.DesktopLink>
          <S.DesktopLink to="/xwiki">
            XWiki
          </S.DesktopLink>

          <S.DesktopLink to="/jira">
            JIRA
          </S.DesktopLink>

          <S.DesktopLink to="/confl">
            Confluence
          </S.DesktopLink>
        </S.LinkContainer>
      </S.Header>
    </>
  );
};

export default Header;
