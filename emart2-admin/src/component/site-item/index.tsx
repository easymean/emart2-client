import React from "react";
import * as S from "./styles";

import { SiteItemProps } from "./types";
import { CommonItemBox } from "@/component/item-box/styles";

const SiteItem = React.forwardRef(
  ({ site }: SiteItemProps, ref: React.Ref<HTMLDivElement>) => {
    const onClick = () => {
      window.open(site.url, "_blank");
      return;
    };

    return (
      <CommonItemBox
        height={"15rem"}
        width={"20rem"}
        padding={"1rem 1rem"}
        margin={"2rem 2rem"}
        onClick={onClick}
      >
        {site.name}
        <S.Description dev={site.dev}>
          {site.dev ? "개발" : "운영"}
        </S.Description>
      </CommonItemBox>
    );
  }
);

export default SiteItem;
