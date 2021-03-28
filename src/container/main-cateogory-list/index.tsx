import React, { useMemo } from "react";
import * as S from "./styles";

import { data } from "./data";
import CategoryItem from "@/component/category-item";

const MainCateogoryList = () => {
  // const [categoryList, setCategory] = useState([] as CategoryModel[]);

  // useEffect(() => {
  //   setCategory(data);
  // }, [categoryList]);

  const categoryList = useMemo(() => {
    return data;
  }, [data]);

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

export default MainCateogoryList;
