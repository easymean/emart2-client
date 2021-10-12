import categoryAPI from "@/api/category";
import { CategoryModel } from "@/model/cateoryModel";
import { useMutation, useQuery } from "react-query";

export const useCategory = (categoryId) => {
  return useQuery<CategoryModel, Error>(["category", categoryId], () =>
    categoryAPI.getCategory(categoryId)
  );
};

export const useCategoryList = () => {
  return useQuery<CategoryModel[], Error>("categories", () =>
    categoryAPI.getCategoryList()
  );
};

export const updateCategory = () => {
  return useMutation(categoryAPI.updateCategory);
};
