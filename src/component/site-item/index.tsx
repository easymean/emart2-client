import React, { useCallback, useEffect, useState } from "react";
import siteAPI from "@api/website";
import * as S from "./styles";

import { SiteItemProps } from "./types";
import { CommonItemBox } from "@component/common/item-box-styles";

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
      <CommonItemBox onClick={onClick}>
        {site.name}
        <S.Description>{site.dev ? "개발" : "운영"}</S.Description>
      </CommonItemBox>
    );
  }
);

export default SiteItem;
