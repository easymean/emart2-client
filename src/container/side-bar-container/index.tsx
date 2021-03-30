import React, { useState } from "react";
import * as S from "./styles";

import SideBarItem from "@/component/side-bar-item";
import { categoryData } from "../../module/data/categoryData";

const SideBarContainer = () => {
  const categoryList = categoryData;
  return (
    <S.SideBarListContainer>
      {categoryList.length !== 0 ? (
        categoryList.map((item) => {
          return <SideBarItem category={item} />;
        })
      ) : (
        <></>
      )}
    </S.SideBarListContainer>
  );
};
export default SideBarContainer;
