import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useSite } from "./hooks";
import { CategoryContainerProps } from "./types";

import SiteItem from "@component/site-item";
import { categoryData } from "./data";
import { useScroll } from "@/component/common/hooks/scroll";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  // const { title, description, siteList } = useSite(categoryId);
  const { title, description, devSiteList, realSiteList } = categoryData;
  const [buttonclick, setButtonClick] = useState(true);
  const [buttonId, setButtonId] = useState("");

  const { scrollY, scrollActive, offsetRef, onScroll, onClick } = useScroll();

  const onHandleClick = (e) => {
    //onClick();
    e.preventDefault();
    setButtonClick(true);
    setButtonId(e.target.id);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { capture: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);

  return (
    <S.SiteContainer>
      <S.CategoryHeader>
        <S.CategoryInfo ref={offsetRef}>
          <S.CategoryTitle>{title}</S.CategoryTitle>
          <S.CategoryDescription>{description}</S.CategoryDescription>
        </S.CategoryInfo>

        <S.TypeNav scroll={scrollActive}>
          <S.TypeButton onClick={onHandleClick}>
            <a href="#dev">개발</a>
          </S.TypeButton>
          <S.TypeButton onClick={onHandleClick}>
            <a href="#real">운영</a>
          </S.TypeButton>
          <S.TypeButton onClick={onHandleClick}>
            <a href="#server">서버</a>
          </S.TypeButton>
        </S.TypeNav>
      </S.CategoryHeader>

      <S.SiteListContainer>
        <S.SiteListWrapper id="dev">
          {devSiteList.length !== 0 ? (
            devSiteList.map((site, idx) => {
              return <SiteItem site={site} key={idx} />;
            })
          ) : (
            <></>
          )}
        </S.SiteListWrapper>
        <S.SiteListWrapper id="real">
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
