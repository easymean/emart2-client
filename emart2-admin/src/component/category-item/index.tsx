import React from "react";
import * as S from "./styles";

import { CategoryItemProps } from "./types";
import { CommonItemBox } from "@/component/item-box/styles";

const CategoryItem = ({
  category,
  setAlert,
  setDeleted,
}: CategoryItemProps) => {
  const handleClick = () => {
    if (category.id) {
      setAlert(true);
      setDeleted(category.id);
    }
  };

  return (
    <CommonItemBox
      height={"20rem"}
      width={"20rem"}
      padding={"1.5rem 1.5rem"}
      margin={"1.5rem 1.5rem"}
      shadow={true}
    >
      <S.ButtonWrapper>
        <S.DeleteButton onClick={handleClick}>X</S.DeleteButton>
      </S.ButtonWrapper>
      <S.Name>{category.name}</S.Name>
      <S.DetailWrapper>
        <S.Description>{category.description}</S.Description>
      </S.DetailWrapper>
    </CommonItemBox>
  );
};

export default CategoryItem;
