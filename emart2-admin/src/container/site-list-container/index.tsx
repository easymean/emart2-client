import React from "react";
import * as S from "./styles";
import { useSite } from "./hooks";

import SiteItem from "@component/site-item";

const SiteListContainer = () => {
  const { siteList } = useSite();

  return (
    <S.SiteListContainer>
      <S.SiteListWrapper id="dev">
        {siteList.length !== 0 ? (
          siteList.map((site, idx) => {
            return <SiteItem site={site} key={idx} />;
          })
        ) : (
          <></>
        )}
      </S.SiteListWrapper>
    </S.SiteListContainer>
  );
};

export default SiteListContainer;
