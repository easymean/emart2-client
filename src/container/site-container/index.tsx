import React, { useEffect, useMemo, useState } from "react";

import * as S from "./styles";
import siteAPI from "@/api/website";
import SiteModel from "@model/siteModel";
import SiteItem from "@component/site-item";
import CategoryContainerProps from "./types";
import SideBarContainer from "@container/side-bar-container";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  const [title, setTitle] = useState("");
  const [siteList, setSiteList] = useState([] as SiteModel[]);
  const getSiteListByCategoryId = async () => {
    const siteList = await siteAPI.getSiteList(categoryId);
    if (siteList.length <= 0) {
      console.log("no data");
      return;
    }
    setSiteList(siteList);
  };

  useEffect(() => {
    getSiteListByCategoryId();
    setTitle("");
    console.log(title);
  }, []);

  return (
    <S.SiteContainer>
      <S.SideBarWrapper>
        <SideBarContainer />
      </S.SideBarWrapper>
      <S.ContentWrapper>
        <S.CategoryTitle>{title}</S.CategoryTitle>
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
