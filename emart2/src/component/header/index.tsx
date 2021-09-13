/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import * as S from "./styles";
import { CONSTANT_URL, STATIC_URL } from "@asset/constant";
import {
  DropdownContainer,
  DropdownItem,
  DropdownList,
  DropdownTitle,
} from "@component/dropdown/styles";
import { categoryList as data } from "@view/main/data";
import { useUser } from "./hooks";
import { useHistory } from "react-router-dom";

const Header = () => {
  const categoryList = data;
  const history = useHistory();
  const handleRedirect = (id: number) => {
    history.push(`/category/${id}`);
  };
  const { user } = useUser();
  console.log(user);
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
                {categoryList.length != 0 ? (
                  categoryList.map((el, idx) => {
                    return (
                      // <DropDownItem
                      //   key={idx}
                      //   title={el.serviceName}
                      //   redirect={`category/${el.id}`}
                      // />
                      <DropdownItem key={idx}>
                        <a href={`/category/${el.id}`}>
                          <DropdownTitle>{el.serviceName}</DropdownTitle>
                        </a>
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
          {user ? (
            <>{user.username}님 안녕하세요</>
          ) : (
            <a href="/login">로그인</a>
          )}
        </S.MenuTitle>
        {user && (
          <S.MenuDropdown>
            <DropdownContainer>
              <DropdownList>
                <DropdownItem>
                  <a href="">
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
