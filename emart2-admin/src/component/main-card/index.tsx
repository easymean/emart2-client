import React from "react";
import * as S from "./styles";
import { useHistory } from "react-router";
import { CommonItemBox } from "@component/item-box/styles";

import { MainCardProps } from "./types";

const MainCard = React.forwardRef(
  ({ cardInfo }: MainCardProps, ref: React.Ref<HTMLDivElement>) => {
    const history = useHistory();
    const handleRedirect = () => {
      history.push(`/category/${cardInfo.id}`);
    };
    return (
      <CommonItemBox
        height={"25rem"}
        width={"25%"}
        padding={"1rem 2.5rem"}
        margin={"2rem 2rem"}
        shadow={true}
        onClick={handleRedirect}
      >
        <S.ImageContainer>
          <S.CardImage src={cardInfo.image} alt="card img"></S.CardImage>
        </S.ImageContainer>
        <S.CardTitle> {cardInfo.serviceName}</S.CardTitle>
        <S.CardDescrption>{cardInfo.description}</S.CardDescrption>
      </CommonItemBox>
    );
  }
);

export default MainCard;
