import React from "react";

import * as S from "./styles";
import CategoryItem from "@component/category-item";
import { useCategory } from "./hooks";

const CategoryContainer = () => {
  const { categoryList } = useCategory();
  return categoryList.length !== 0 ? (
    <S.CategoryListContainer>
      {categoryList.map((category, idx) => (
        <S.CategoryItemWrapper key={idx}>
          <CategoryItem category={category} />
        </S.CategoryItemWrapper>
      ))}
    </S.CategoryListContainer>
  ) : (
    <></>
  );
};

export default CategoryContainer;
