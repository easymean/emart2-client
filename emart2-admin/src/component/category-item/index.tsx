import React from "react";
import * as S from "./styles";

import { CategoryItemProps } from "./types";
import { CommonItemBox } from "@/component/item-box/styles";

const CategoryItem = ({ category }: CategoryItemProps) => {
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
      <S.Name>{category.name}</S.Name>
      <S.DetailWrapper>
        <S.Description>{category.description}</S.Description>
      </S.DetailWrapper>
    </CommonItemBox>
  );
};

export default CategoryItem;
