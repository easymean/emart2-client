import React from "react";
import * as S from "./styles";
import { useSite } from "./hooks";
import { CategoryContainerProps } from "./types";

import SiteItem from "@component/site-item";
import { Col, Grid, Row } from "@/component/grid/styles";
import { CommonTitle, CommonDescription } from "@/component/common/font-styles";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  const { title, description, siteList } = useSite(categoryId);

  return (
    <S.SiteContainer>
      <S.CategoryInfo>
        <CommonTitle>{title}</CommonTitle>
        <CommonDescription>{description}</CommonDescription>
      </S.CategoryInfo>

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
