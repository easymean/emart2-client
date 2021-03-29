import React, { useEffect, useMemo, useState } from "react";
import * as S from "./styles";

import CategoryContainerProps from "./types";
import { SiteModel } from "@/module/model/siteModel";
import { data } from "./data";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  const [title, setTitle] = useState("");

  const getSiteListByCategoryId = (): SiteModel[] => {
    return data.filter((el) => el.categoryId === categoryId);
  };
  const siteList = useMemo(() => getSiteListByCategoryId(), [data]);
  console.log(siteList);

  return (
    <S.CategoryContainer>
      <S.CategoryTitle>광고제휴</S.CategoryTitle>
      <S.SiteListContainter>
        <S.Line />
        {siteList.length !== 0 ? siteList.map((site) => {}) : <></>}
      </S.SiteListContainter>
    </S.CategoryContainer>
  );
};

export default SiteContainer;
