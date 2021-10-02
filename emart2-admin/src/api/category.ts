import axios from "./axios";

import endpoints from "./endpoints";
import { CategoryModel, CategoryListModel } from "@model/cateoryModel";

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
};

export default categoryAPI;
