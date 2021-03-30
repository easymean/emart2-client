import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";

import { data } from "./data";
import CategoryContainerProps from "./types";
import { SiteModel } from "@/module/model/siteModel";
import SiteItem from "@component/site-item";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  const [title, setTitle] = useState("");

  const getSiteListByCategoryId = (): SiteModel[] => {
    return data.filter((el) => el.categoryId === categoryId);
  };
  const siteList = useMemo(() => getSiteListByCategoryId(), [data]);
  console.log(siteList);

  return (
    <S.SiteContainer>
      <S.CategoryTitleWrapper>
        <S.CategoryTitle>광고제휴</S.CategoryTitle>
      </S.CategoryTitleWrapper>
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
    </S.SiteContainer>
  );
};

export default SiteContainer;
