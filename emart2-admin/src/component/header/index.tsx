/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import * as S from "./styles";
import { STATIC_URL } from "@asset/constant";
import {
  DropdownContainer,
  DropdownItem,
  DropdownList,
  DropdownTitle,
} from "@component/dropdown/styles";
import { useUser } from "./hooks";

const Header = () => {
  const { user } = useUser();
  return (
    <S.Header>
      <S.DesktopLink to="/">
        <S.Logo src={STATIC_URL.LOGO} alt="emart logo"></S.Logo>
      </S.DesktopLink>
      <S.MenuContainer>
        <S.MenuButton>
          <a href="/system">
            <S.MenuTitle>시스템 관리</S.MenuTitle>
          </a>
        </S.MenuButton>
        <S.MenuButton>
          <a href="/site">
            <S.MenuTitle>사이트 관리</S.MenuTitle>
          </a>
        </S.MenuButton>
        <S.MenuButton>
          <a href="/user">
            <S.MenuTitle>유저 관리</S.MenuTitle>
          </a>
        </S.MenuButton>
      </S.MenuContainer>
      <S.MenuButton>
        <S.MenuTitle>
          {user ? <>{user.username}님</> : <a href="/login">로그인</a>}
        </S.MenuTitle>
        {user && (
          <S.MenuDropdown>
            <DropdownContainer>
              <DropdownList>
                <DropdownItem>
                  <a href="/my">
                    <DropdownTitle>마이페이지</DropdownTitle>
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <DropdownTitle>로그아웃</DropdownTitle>
                </DropdownItem>
              </DropdownList>
            </DropdownContainer>
          </S.MenuDropdown>
        )}
      </S.MenuButton>
    </S.Header>
  );
};

export default Header;
