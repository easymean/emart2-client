import React, { useEffect, useMemo, useState } from "react";

import * as S from "./styles";
import CategoryContainerProps from "./types";
import { WebsiteModel } from "@/model/websiteModel";
import SiteItem from "@component/site-item";
import SideBarContainer from "@container/side-bar-container";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  const [title, setTitle] = useState("");

  const getSiteListByCategoryId = (): WebsiteModel[] => {
    return siteData.filter((el) => el.categoryId === categoryId);
  };
  const siteList = useMemo(() => getSiteListByCategoryId(), [siteData]);

  return (
    <S.SiteContainer>
      <S.SideBarWrapper>
        <SideBarContainer />
      </S.SideBarWrapper>
      <S.ContentWrapper>
        <S.CategoryTitle>광고제휴</S.CategoryTitle>
        <S.SiteListContainter>
          <S.Line />
          {siteList.length !== 0 ? (
            siteList.map((site) => {
              return <SiteItem key={`site${site.id}`} site={site}></SiteItem>;
            })
          ) : (
            <></>
          )}
        </S.SiteListContainter>
      </S.ContentWrapper>
    </S.SiteContainer>
  );
};

export default SiteContainer;
