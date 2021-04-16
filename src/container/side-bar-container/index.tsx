import React, { useEffect, useState } from "react";
import * as S from "./styles";

import SideBarItem from "@/component/side-bar-item";
import CategoryModel from "@/model/cateoryModel";
import categoryAPI from "@/api/category";

const SideBarContainer = () => {
  const [categoryList, setCategoryList] = useState([] as CategoryModel[]);

  const getCategoryList = async () => {
    const categoryList = await categoryAPI.getCategoryList();
    if (categoryList.length <= 0) {
      console.log("데이터 로드 실패");
      return;
    }
    setCategoryList(categoryList);
  };
  console.log(categoryList);

  useEffect(() => {
    getCategoryList();
  }, []);

  return categoryList.length !== 0 ? (
    <S.SideBarListContainer>
      {categoryList.map((item) => (
        <S.SideBarItemWrapper key={item.id}>
          <SideBarItem category={item} />
        </S.SideBarItemWrapper>
      ))}
    </S.SideBarListContainer>
  ) : (
    <S.SideBarListContainer></S.SideBarListContainer>
  );
};
export default SideBarContainer;
