import React, { useEffect, useState } from "react";
import * as S from "./styles";

import { SiteItemProps } from "./types";

const SiteItem = React.forwardRef(
  ({ site }: SiteItemProps, ref: React.Ref<HTMLDivElement>) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
      setUrl(site.url);
    }, [url]);

    const onClick = (e) => {
      window.open(url);
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
