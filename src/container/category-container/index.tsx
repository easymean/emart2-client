import React, { useEffect, useState } from "react";
import * as S from "./styles";

import CategoryContainerProps from "./types";
import SiteList from "@/container/site-list";
import { SiteModel } from "@/module/model/siteModel";
import { data } from "./data";
import { data as categoryData } from "@container/main-cateogory-list/data";

const CategoryContainer = ({ categoryId }: CategoryContainerProps) => {
  const [contents, setContent] = useState([] as SiteModel[]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setContent(
      data.filter((el) => {
        return el.categoryId === categoryId;
      })
    );

    const categoryTitle = categoryData[categoryId - 1].name;
    setTitle(categoryTitle);
  }, [contents]);

  return contents.length !== 0 ? (
    <S.CategoryContainer>
      <S.CategoryTitle>{title}</S.CategoryTitle>
      <SiteList />
    </S.CategoryContainer>
  ) : (
    <></>
  );
};

export default CategoryContainer;
