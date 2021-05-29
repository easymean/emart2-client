import React from "react";
import * as S from "./styles";
import { CONSTANT_URL, STATIC_URL } from "@asset/constant";
import {
  DropdownContainer,
  DropdownItem,
  DropdownList,
} from "@component/dropdown/styles";
import { useHeader } from "./hooks";

const Header = () => {
  const { showMenu, showMenu2, toggleMenu, toggleMenu2 } = useHeader();

  return (
    <S.Header>
      <S.DesktopLink to="/">
        <S.Logo src={STATIC_URL.LOGO} alt="emart logo"></S.Logo>
      </S.DesktopLink>
      <S.MenuContainer>
        <S.MenuButton>
          <a href={CONSTANT_URL.BLOSSOM} target="_blank">
            블라썸
          </a>
        </S.MenuButton>
        <S.MenuDropdown>
          <S.MenuButton onClick={toggleMenu}>JIRA</S.MenuButton>
          <DropdownContainer>
            <DropdownList visible={showMenu}>
              <DropdownItem>
                <a href={CONSTANT_URL.INC_JIRA} target="_blank">
                  <S.SmallMenuText>아이앤씨</S.SmallMenuText>
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href={CONSTANT_URL.EMART_JIRA} target="_blank">
                  <S.SmallMenuText>이마트</S.SmallMenuText>
                </a>
              </DropdownItem>
            </DropdownList>
          </DropdownContainer>
        </S.MenuDropdown>
        <S.MenuDropdown>
          <S.MenuButton onClick={toggleMenu2}>Confl/Wiki</S.MenuButton>
          <DropdownContainer>
            <DropdownList visible={showMenu2}>
              <DropdownItem>
                <a href={CONSTANT_URL.INC_CONFL} target="_blank">
                  <S.SmallMenuText>아이앤씨</S.SmallMenuText>
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href={CONSTANT_URL.EMART_WIKI} target="_blank">
                  <S.SmallMenuText>이마트Wiki</S.SmallMenuText>
                </a>
              </DropdownItem>
            </DropdownList>
          </DropdownContainer>
        </S.MenuDropdown>
        <S.MenuButton>
          <a href="/account">계정</a>
        </S.MenuButton>
      </S.MenuContainer>
    </S.Header>
  );
};

export default Header;
