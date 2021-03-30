import React, { useState } from "react";
import * as S from "./styles";

import { SiteItemProps } from "./types";

const SiteItem = React.forwardRef(
  ({ site }: SiteItemProps, ref: React.Ref<HTMLDivElement>) => {
    const [url, setUrl] = useState(site.url);
    const onClick = (e) => {
      window.location.href = `https://${url}`;
      return;
    };
    return (
      <S.SiteItemWrapper onClick={onClick}>
        <S.CategoryName>{site.categoryName}</S.CategoryName>
        <S.ServiceName>{site.serviceName}</S.ServiceName>
        <S.Dev>{site.dev ? "개발" : "운영"}</S.Dev>
      </S.SiteItemWrapper>
    );
  }
);

export default SiteItem;
