import { useEffect, useState } from "react";
import categoryAPI from "@api/category";
import { CategoryModel } from "@model/cateoryModel";

export const useCategory = () => {
  const [categoryList, setCategoryList] = useState([] as CategoryModel[]);

  const getCategoryList = async () => {
    const categoryList = await categoryAPI.getCategoryList();

    setCategoryList(categoryList);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return {
    categoryList,
  };
};
