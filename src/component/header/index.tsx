import React from "react";
import * as S from "./styles";
import { CONSTANT_URL, STATIC_URL } from "@asset/constant";

const Header = () => {
  return (
    <S.Header>
      <S.MenuContainer>
        <S.MenuWrapper>
          <a href={CONSTANT_URL.BLOSSOM} target="_blank">
            블라썸
          </a>
        </S.MenuWrapper>

        <S.MenuWrapper>
          <a href={CONSTANT_URL.XWIKI} target="_blank">
            XWiki
          </a>
        </S.MenuWrapper>

        <S.MenuWrapper>
          <a href={CONSTANT_URL.JIRA} target="_blank">
            JIRA
          </a>
        </S.MenuWrapper>

        <S.MenuWrapper>
          <a href={CONSTANT_URL.CONFL} target="_blank">
            Confluence
          </a>
        </S.MenuWrapper>
      </S.MenuContainer>
    </S.Header>
  );
};

export default Header;
