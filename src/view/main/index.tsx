import React from "react";
import * as S from "./styles";

import Search from "@container/search";
import Menu from "@container/menu";

const MainPage = () => {
  console.log("hello");
  return (
    <>
      <S.Title>이마트 2팀에 오신걸 환영합니다.</S.Title>
      <Search />
      <Menu />
    </>
  );
};

export default MainPage;
