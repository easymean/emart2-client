import React from "react";
import * as S from "./styles";

import SearchContainer from "@/container/search-container";
import { categoryList as data } from "./data";
import MainCard from "@/component/main-card";

const MainPage = () => {
  const cards = data;
  return (
    <S.MainContainer>
      <S.MainTitleArea>
        <S.Title>
          <S.English>
            <S.Yellow>e</S.Yellow>mart
            <br />
          </S.English>
          운영시스템 <br />
        </S.Title>
        <S.SubTitle>이마트2팀 운영시스템입니다.</S.SubTitle>
        <SearchContainer />
      </S.MainTitleArea>
      <S.CardContainers>
        {cards.length != 0 ? (
          cards.map((card, idx) => {
            return <MainCard cardInfo={card} key={idx} />;
          })
        ) : (
          <></>
        )}
      </S.CardContainers>
    </S.MainContainer>
  );
};

export default MainPage;
