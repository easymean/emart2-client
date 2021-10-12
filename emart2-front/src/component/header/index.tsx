/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import { CONSTANT_URL, STATIC_URL } from "@asset/constant";
import {
  DropdownContainer,
  DropdownItem,
  DropdownList,
  DropdownTitle,
} from "@component/dropdown/styles";
import { useCookie } from "./hooks";
import { useUser } from "@/query/user";
import { useCategoryList } from "@/query/category";

const Header = () => {
  const { data: categoryList } = useCategoryList();
  const history = useHistory();
  const handleRedirect = (id: number) => {
    history.push(`/category/${id}`);
  };

  useEffect(() => {
    //useCookie();
  });
  const { data: user } = useUser();
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
                    <DropdownTitle>블라썸</DropdownTitle>
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <a href={CONSTANT_URL.INC_JIRA} target="_blank">
                    <DropdownTitle>지라</DropdownTitle>
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
                {categoryList &&
                  categoryList.map((category, idx) => {
                    return (
                      // <DropDownItem
                      //   key={idx}
                      //   title={el.serviceName}
                      //   redirect={`category/${el.id}`}
                      // />
                      <DropdownItem key={idx}>
                        <a href={`/category/${category.id}`}>
                          <DropdownTitle>{category.name}</DropdownTitle>
                        </a>
                      </DropdownItem>
                    );
                  })}
              </DropdownList>
            </DropdownContainer>
          </S.MenuDropdown>
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
