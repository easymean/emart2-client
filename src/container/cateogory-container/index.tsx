import React, { useMemo } from "react";
import * as S from "./styles";

import { categoryData } from "../../module/data/categoryData";
import CategoryItem from "@/component/category-item";

const CateogoryContainer = () => {
  const categoryList = useMemo(() => {
    return categoryData;
  }, [categoryData]);

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
