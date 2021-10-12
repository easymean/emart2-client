import axios from "./axios";

import endpoints from "./endpoints";
import { CategoryModel } from "@model/cateoryModel";

interface UpdateCategoryProps {
  id: number;
  category: CategoryModel;
}

const categoryAPI = {
  getCategoryList: async (): Promise<CategoryModel[]> => {
    const { data: categoryList } = await axios.get<CategoryModel[]>(
      endpoints.CATEGORY_API
    );
    return categoryList;
  },

  getCategory: async (categoryId: number): Promise<CategoryModel> => {
    const { data: categoryData } = await axios.get<CategoryModel>(
      `${endpoints.CATEGORY_API}/${categoryId}`
    );
    return categoryData;
  },

  createCategory: async (category: CategoryModel): Promise<CategoryModel> => {
    const { data: categoryData } = await axios.post<CategoryModel>(
      `${endpoints.CATEGORY_API}`,
      category
    );
    return categoryData;
  },

  updateCategory: async ({
    id,
    category,
  }: UpdateCategoryProps): Promise<CategoryModel> => {
    const { data: categoryData } = await axios.put<CategoryModel>(
      `${endpoints.CATEGORY_API}/${id}`,
      category
    );
    return categoryData;
  },
  deleteCategory: async (id: number) => {
    await axios.delete(`${endpoints.CATEGORY_API}/${id}`);
  },
};

export default categoryAPI;
