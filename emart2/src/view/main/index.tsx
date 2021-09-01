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
          Emart <br />
          운영시스템 <br />
        </S.Title>
        <S.SubTitle>대충 있어보이게 적자</S.SubTitle>
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
