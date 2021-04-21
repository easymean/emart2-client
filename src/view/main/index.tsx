import React from "react";
import * as S from "./styles";

import SearchContainer from "@/container/search-container";
import CategoryContainer from "@/container/category-container";

const MainPage = () => {
  return (
    <S.MainContainer>
      <S.Title>이마트 2팀에 오신걸 환영합니다.</S.Title>
      <SearchContainer />
      <CategoryContainer />
    </S.MainContainer>
  );
};

export default MainPage;
