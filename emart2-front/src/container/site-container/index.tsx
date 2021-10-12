import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { useButton } from "./hooks";
import { CategoryContainerProps } from "./types";

import SiteItem from "@component/site-item";
import { useScroll } from "@/component/common/hooks/scroll";
import { useSiteList } from "@/query/site";
import { SiteModel } from "@/model/siteModel";
import { useCategory } from "@/query/category";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  const { isClick, buttonId, refs, onClick } = useButton();

  const { data: category } = useCategory(categoryId);
  const { data: siteList, status } = useSiteList(categoryId);
  const [devSiteList, setDevSiteList] = useState([] as SiteModel[]);
  const [realSiteList, setRealSiteList] = useState([] as SiteModel[]);
  useCallback(() => {
    if (status === "success" && siteList) {
      const tempDev = siteList.filter((el) => el.dev);
      const tempReal = siteList.filter((el) => !el.dev);
      setDevSiteList([...devSiteList.concat(tempDev)]);
      setRealSiteList([...realSiteList.concat(tempReal)]);
    }
  }, [status]);

  const { scrollActive, offsetRef } = useScroll();

  return (
    <S.SiteContainer>
      <S.CategoryHeader>
        <S.CategoryInfo ref={offsetRef}>
          <S.CategoryName>{category?.name}</S.CategoryName>
          <S.CategoryDescription>{category?.description}</S.CategoryDescription>
        </S.CategoryInfo>

        <S.TypeNav scroll={scrollActive}>
          <S.TypeButton
            id="dev"
            onClick={onClick}
            clicked={isClick && buttonId === "dev"}
          >
            개발
          </S.TypeButton>
          <S.TypeButton
            id="real"
            onClick={onClick}
            clicked={isClick && buttonId === "real"}
          >
            운영
          </S.TypeButton>
          <S.TypeButton
            id="server"
            onClick={onClick}
            clicked={isClick && buttonId === "server"}
          >
            서버
          </S.TypeButton>
        </S.TypeNav>
      </S.CategoryHeader>

      <S.SiteListContainer>
        <S.SiteListWrapper id="dev" ref={(el) => (refs.current[0] = el)}>
          {devSiteList.length !== 0 ? (
            devSiteList.map((site, idx) => {
              return <SiteItem site={site} key={idx} />;
            })
          ) : (
            <></>
          )}
        </S.SiteListWrapper>
        <S.SiteListWrapper id="real" ref={(el) => (refs.current[1] = el)}>
          {realSiteList.length !== 0 ? (
            realSiteList.map((site, idx) => {
              return <SiteItem site={site} key={idx} />;
            })
          ) : (
            <></>
          )}
        </S.SiteListWrapper>
      </S.SiteListContainer>
    </S.SiteContainer>
  );
};

export default SiteContainer;
