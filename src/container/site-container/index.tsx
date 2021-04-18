import React from "react";
import * as S from "./styles";

import { useSite } from "./hooks";
import CategoryContainerProps from "./types";
import SiteItem from "@component/site-item";
import SideBarContainer from "@container/side-bar-container";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  const { title, description, siteList } = useSite(categoryId);

  return (
    <S.SiteContainer>
      <S.SideBarWrapper>
        <SideBarContainer />
      </S.SideBarWrapper>
      <S.ContentWrapper>
        <S.CategoryInfoContainer>
          <S.CategoryTitle>{title}</S.CategoryTitle>
          <S.CategoryDescription>{description}</S.CategoryDescription>
        </S.CategoryInfoContainer>
        <S.SiteListContainter>
          {siteList.length !== 0 ? (
            siteList.map((site) => {
              return <SiteItem key={`site${site.id}`} site={site} />;
            })
          ) : (
            <> 사이트를 추가해주세요</>
          )}
        </S.SiteListContainter>
      </S.ContentWrapper>
    </S.SiteContainer>
  );
};

export default SiteContainer;
