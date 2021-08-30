import React from "react";
import * as S from "./styles";

import SearchContainer from "@/container/search-container";
import { CommonItemBox } from "@/component/item-box/styles";

const MainPage = () => {
  return (
    <S.MainContainer>
      <S.MainTitleArea>
        <S.Title>
          Emart <br />
          운영시스템 <br />
        </S.Title>
        대충 있어보이게 적자
        <SearchContainer />
      </S.MainTitleArea>
      <S.CardContainers>
        <CommonItemBox
          height={"20rem"}
          width={"15rem"}
          padding={"1rem 1rem"}
          margin={"2rem 2rem"}
        >
          <S.CardTitle> MMS쿠폰</S.CardTitle>
          <S.CardDescrption>MMS쿠폰발급</S.CardDescrption>
        </CommonItemBox>
        <CommonItemBox
          height={"20rem"}
          width={"15rem"}
          padding={"1rem 1rem"}
          margin={"2rem 2rem"}
        >
          <S.CardTitle> 세금계산서</S.CardTitle>
          <S.CardDescrption>세금계산서</S.CardDescrption>
        </CommonItemBox>
        <CommonItemBox
          height={"20rem"}
          width={"15rem"}
          padding={"1rem 1rem"}
          margin={"2rem 2rem"}
        >
          <S.CardTitle>광고제휴</S.CardTitle>
          <S.CardDescrption></S.CardDescrption>
        </CommonItemBox>
        <CommonItemBox
          height={"20rem"}
          width={"15rem"}
          padding={"1rem 1rem"}
          margin={"2rem 2rem"}
        >
          <S.CardTitle> CMS</S.CardTitle>
          <S.CardDescrption></S.CardDescrption>
        </CommonItemBox>

        <CommonItemBox
          height={"20rem"}
          width={"15rem"}
          padding={"1rem 1rem"}
          margin={"2rem 2rem"}
        >
          <S.CardTitle> ALM</S.CardTitle>
          <S.CardDescrption></S.CardDescrption>
        </CommonItemBox>
      </S.CardContainers>
    </S.MainContainer>
  );
};

export default MainPage;
