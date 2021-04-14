import React, { useMemo } from "react";

import * as S from "./styles";
import { CategoryListType } from "./types";
import CategoryItem from "@/component/category-item";

const CateogoryContainer = () => {
  const categoryList = useMemo(() => ({} as CategoryListType), []);

  const getCategoryList;

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

export default CateogoryContainer;
