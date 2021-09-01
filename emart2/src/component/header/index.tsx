import React from "react";
import * as S from "./styles";
import { CONSTANT_URL, STATIC_URL } from "@asset/constant";
import {
  DropdownContainer,
  DropdownItem,
  DropdownList,
} from "@component/dropdown/styles";
import { categoryList as data } from "@view/main/data";
import { useHeader } from "./hooks";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { showMenu, showMenu2, toggleMenu, toggleMenu2 } = useHeader();
  const categoryList = data;
  const history = useHistory();
  const handleRedirect = (id: number) => {
    history.push(`/category/${id}`);
  };
  return (
    <S.Header>
      <S.DesktopLink to="/">
        <S.Logo src={STATIC_URL.LOGO} alt="emart logo"></S.Logo>
      </S.DesktopLink>
      <S.MenuContainer>
        <S.MenuButton>
          <S.MenuTitle>아이앤씨</S.MenuTitle>
          <S.MenuDropdown>
            <DropdownContainer>
              <DropdownList>
                <DropdownItem>
                  <a href={CONSTANT_URL.BLOSSOM} target="_blank">
                    <S.SmallMenuText>블라썸</S.SmallMenuText>
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a href={CONSTANT_URL.INC_JIRA} target="_blank">
                    <S.SmallMenuText>지라</S.SmallMenuText>
                  </a>
                </DropdownItem>
              </DropdownList>
            </DropdownContainer>
          </S.MenuDropdown>
        </S.MenuButton>
        <S.MenuButton>
          <S.MenuTitle>운영시스템</S.MenuTitle>
          <S.MenuDropdown>
            <DropdownContainer>
              <DropdownList>
                {categoryList.length != 0 ? (
                  categoryList.map((el, idx) => {
                    return (
                      <DropdownItem key={idx}>
                        <S.SmallMenuText>{el.serviceName}</S.SmallMenuText>
                      </DropdownItem>
                    );
                  })
                ) : (
                  <></>
                )}
              </DropdownList>
            </DropdownContainer>
          </S.MenuDropdown>
        </S.MenuButton>
      </S.MenuContainer>
      <S.MenuButton>
        <S.MenuTitle>
          <a href="/login">로그인</a>
        </S.MenuTitle>
      </S.MenuButton>
    </S.Header>
  );
};

export default Header;
