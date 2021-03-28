import React from "react";
import * as S from "./styles";

import MainSearch from "@/container/main-search";
import MainCateogoryList from "@/container/main-cateogory-list";

const MainPage = () => {
  return (
    <S.MainContainer>
      <S.Title>이마트 2팀에 오신걸 환영합니다.</S.Title>
      <MainSearch />
      <MainCateogoryList />
    </S.MainContainer>
  );
};

export default MainPage;
