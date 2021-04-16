import React, { useCallback, useEffect, useMemo, useState } from "react";

import * as S from "./styles";
import categoryAPI from "@api/category";
import CategoryItem from "@component/category-item";
import CategoryModel from "@model/cateoryModel";

const CateogoryContainer = () => {
  const [categoryList, setCategoryList] = useState([] as CategoryModel[]);
  const getCategoryList = async () => {
    const categoryList = await categoryAPI.getCategoryList();
    if (categoryList.length <= 0) {
      console.log("데이터 로드 실패");
      return;
    }
    setCategoryList(categoryList);
  };

  useEffect(() => {
    getCategoryList();
  }, []);
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
