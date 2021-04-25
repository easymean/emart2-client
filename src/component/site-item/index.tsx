import React, { useCallback, useEffect, useState } from "react";
import siteAPI from "@api/website";
import * as S from "./styles";

import { SiteItemProps } from "./types";

const SiteItem = React.forwardRef(
  ({ site }: SiteItemProps, ref: React.Ref<HTMLDivElement>) => {
    const increaseFreq = useCallback(async () => {
      await siteAPI.increaseSiteFreq(site.id);
    }, [site.id]);

    const onClick = (e) => {
      window.open(site.url);
      increaseFreq();
      return;
    };

    return (
      <S.SiteItem onClick={onClick}>
        <S.CardContainer>
          {site.name}
          <S.Description>{site.dev ? "개발" : "운영"}</S.Description>
        </S.CardContainer>
      </S.SiteItem>
    );
  }
);

export default SiteItem;
