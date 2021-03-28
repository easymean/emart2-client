import React from "react";
import CategoryModel from "../../module/model/cateoryModel";
import * as S from "./styles";

interface CategoryBoxProps {
  category: CategoryModel;
}

const CategoryBox = ({ category }: CategoryBoxProps) => {
  return (
    <>
      <S.CategoryBox>{category.name}</S.CategoryBox>
    </>
  );
};

export default CategoryBox;
