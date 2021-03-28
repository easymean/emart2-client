import React, { useEffect, useState } from "react";
import * as S from "./styles";

import { data } from "./data";
import CategoryModel from "@module/model/cateoryModel";
import CategoryBox from "@component/category-box";

const MainCateogory = () => {
  const [categories, setCategory] = useState([] as CategoryModel[]);

  useEffect(() => {
    setCategory(data);
  }, categories);

  return (
    <S.CategoryContainer>
      {categories &&
        categories.map((category) => {
          return <CategoryBox category={category} />;
        })}
    </S.CategoryContainer>
  );
};

export default MainCateogory;
