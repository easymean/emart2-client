import React from "react";
import * as S from "./styles";

import { SiteItemProps } from "./types";
import { CommonItemBox } from "@/component/item-box/styles";

const SiteItem = ({ site, setAlert, setDeleted }: SiteItemProps) => {
  const handleClick = () => {
    if (site.id) {
      setAlert(true);
      setDeleted(site.id);
    }
  };

  return (
    <CommonItemBox
      height={"20rem"}
      width={"20rem"}
      padding={"1.5rem 1.5rem"}
      margin={"1.5rem 2rem"}
      shadow={true}
    >
      <S.ButtonWrapper>
        <S.DeleteButton onClick={handleClick}>X</S.DeleteButton>
      </S.ButtonWrapper>
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
