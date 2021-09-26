import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useSite } from "./hooks";
import { CategoryContainerProps } from "./types";

import SiteItem from "@component/site-item";
import { categoryData } from "./data";
import { useScroll } from "@/component/common/hooks/scroll";

const SiteContainer = ({ categoryId }: CategoryContainerProps) => {
  // const { title, description, siteList } = useSite(categoryId);
  const { title, description, devSiteList, realSiteList } = categoryData;
  const [isClick, setClick] = useState(true);
  const [buttonId, setButtonId] = useState("");

  const { scrollY, scrollActive, offsetRef, targetRef, onScroll, scrollToRef } =
    useScroll();

  const setButton = (e) => {
    setClick(true);
    console.log(e.target.id);
    setButtonId(e.target.id);
  };

  const onClick = (e) => {
    e.preventDefault();
    setButton(e);
    scrollToRef();
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
        <S.SiteListWrapper id="dev">
          {devSiteList.length !== 0 ? (
            devSiteList.map((site, idx) => {
              return <SiteItem site={site} key={idx} />;
            })
          ) : (
            <></>
          )}
        </S.SiteListWrapper>
        <S.SiteListWrapper id="real" ref={targetRef}>
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
