import React from "react";
import * as S from "./styles";

import CategoryModel from "@module/model/cateoryModel";

interface CategoryItemProps {
  category: CategoryModel;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <S.CategoryItem to={`category/${category.id}`}>
      <S.CategoryTitle>{category.name}</S.CategoryTitle>
    </S.CategoryItem>
  );
};

export default CategoryItem;
