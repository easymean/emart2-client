import React from "react";
import * as S from "./styles";
import { useSite } from "./hooks";
import { CategoryContainerProps } from "./types";

import SiteItem from "@component/site-item";
import { Col, Grid, Row } from "@/component/grid/styles";
import { CommonTitle, CommonDescription } from "@/component/common/font-styles";
import { categoryData } from "./data";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  // const { title, description, siteList } = useSite(categoryId);
  const { title, description, siteList } = categoryData;
  return (
    <S.SiteContainer>
      <S.CategoryHeader>
        <S.CategoryInfo>
          <S.CategoryTitle>{title}</S.CategoryTitle>
          <S.CategoryDescription>{description}</S.CategoryDescription>
        </S.CategoryInfo>

        <S.TypeContainer>
          <S.TypeName>개발</S.TypeName>
          <S.TypeName>운영</S.TypeName>
          <S.TypeName>서버</S.TypeName>
        </S.TypeContainer>
      </S.CategoryHeader>

      <S.SiteListContainer>
        {siteList.length !== 0 ? (
          siteList.map((site, idx) => {
            return <SiteItem site={site} key={idx} />;
          })
        ) : (
          <></>
        )}
      </S.SiteListContainer>
    </S.SiteContainer>
  );
};

export default SiteContainer;
