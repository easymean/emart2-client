import React from "react";
import * as S from "./styles";

import { CategoryItemProps } from "./types";

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <S.CategoryItem to={`category/${category.id}`}>
      <S.CategoryTitle>{category.name}</S.CategoryTitle>
    </S.CategoryItem>
  );
};

export default CategoryItem;
