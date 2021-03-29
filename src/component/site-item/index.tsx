import React from "react";
import * as S from "./styles";

const SiteItem = () => {
  const onClick = async (e) => {};
  return (
    <S.SiteWrapper onClick={onClick}>
      <S.CategoryName></S.CategoryName>
      <S.ServiceName></S.ServiceName>
      <S.Dev></S.Dev>
    </S.SiteWrapper>
  );
};

export default SiteItem;
