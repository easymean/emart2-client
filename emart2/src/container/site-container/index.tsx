import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useButton, useSite } from "./hooks";
import { CategoryContainerProps } from "./types";

import SiteItem from "@component/site-item";
import { categoryData } from "./data";
import { useScroll } from "@/component/common/hooks/scroll";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  // const { title, description, siteList } = useSite(categoryId);
  const { title, description, devSiteList, realSiteList } = categoryData;
  const { isClick, buttonId, refs, onClick } = useButton();

  const { scrollActive, offsetRef } = useScroll();

  return (
    <S.SiteContainer>
      <S.CategoryHeader>
        <S.CategoryInfo ref={offsetRef}>
          <S.CategoryTitle>{title}</S.CategoryTitle>
          <S.CategoryDescription>{description}</S.CategoryDescription>
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
