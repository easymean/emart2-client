import React from "react";
import * as S from "./styles";

import SearchContainer from "@/container/search-container";

const MainPage = () => {
  return (
    <S.MainContainer>
      <S.Title>이마트 2팀에 오신걸 환영합니다.</S.Title>
      <SearchContainer />
    </S.MainContainer>
  );
};

export default MainPage;
