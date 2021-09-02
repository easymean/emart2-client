import React from "react";
import * as S from "./styles";
import { useSite } from "./hooks";
import { CategoryContainerProps } from "./types";

import SiteItem from "@component/site-item";
import { categoryData } from "./data";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  // const { title, description, siteList } = useSite(categoryId);
  const { title, description, devSiteList, realSiteList } = categoryData;

  return (
    <S.SiteContainer>
      <S.CategoryHeader>
        <S.CategoryInfo>
          <S.CategoryTitle>{title}</S.CategoryTitle>
          <S.CategoryDescription>{description}</S.CategoryDescription>
        </S.CategoryInfo>

        <S.TypeNav>
          <S.TypeButton>개발</S.TypeButton>
          <S.TypeButton>운영</S.TypeButton>
          <S.TypeButton>서버</S.TypeButton>
        </S.TypeNav>
      </S.CategoryHeader>

      <S.SiteListContainer>
        <S.DevList>
          {devSiteList.length !== 0 ? (
            devSiteList.map((site, idx) => {
              return <SiteItem site={site} key={idx} />;
            })
          ) : (
            <></>
          )}
        </S.DevList>
        <S.RealList>
          {realSiteList.length !== 0 ? (
            realSiteList.map((site, idx) => {
              return <SiteItem site={site} key={idx} />;
            })
          ) : (
            <></>
          )}
        </S.RealList>
      </S.SiteListContainer>
    </S.SiteContainer>
  );
};

export default SiteContainer;
