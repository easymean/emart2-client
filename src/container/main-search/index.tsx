import React from "react";
import * as S from "./styles";

import { SearchBar } from "@component/search-bar/styles";

const MainSearch = () => {
  return (
    <S.SearchBarContainer>
      <SearchBar placeholder={"검색예시: 챗봇 API 개발"} />
    </S.SearchBarContainer>
  );
};

export default MainSearch;
