import React from "react";
import { useParams } from "react-router";

import CategoryContainer from "@/container/category-container/index";

interface CategoryId {
  categoryId: string;
}

const CategoryPage = () => {
  const { categoryId } = useParams<CategoryId>();
  if (!parseInt(categoryId)) throw new Error("잘못된 url 입니다.");
  return (
    <>
      <CategoryContainer categoryId={parseInt(categoryId)} />
    </>
  );
};

export default CategoryPage;
