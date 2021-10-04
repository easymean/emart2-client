import React from "react";
import * as S from "./styles";

import { SiteItemProps } from "./types";
import { CommonItemBox } from "@/component/item-box/styles";

const SiteItem = ({ site }: SiteItemProps) => {
  const onClick = () => {};

  return (
    <CommonItemBox
      height={"20rem"}
      width={"20rem"}
      padding={"1.5em 1.5rem"}
      margin={"2rem 2rem"}
      shadow={true}
      onClick={onClick}
    >
      <S.Name>{site.name}</S.Name>
      <S.DetailWrapper>
        <S.Url>{site.url}</S.Url>
        <S.Description>{site.description}</S.Description>
      </S.DetailWrapper>
      <S.Tags dev={site.dev}>{site.dev ? "개발" : "운영"}</S.Tags>
    </CommonItemBox>
  );
};

export default SiteItem;
