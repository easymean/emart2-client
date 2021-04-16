import axios from "./axios";

import endpoints from "./endpoints";
import CategoryModel from "@model/cateoryModel";

const categoryAPI = {
  getCategoryList: async (): Promise<CategoryModel[]> => {
    const { data: categoryList } = await axios.get<CategoryModel[]>(
      endpoints.CATEGORY_API
    );

    return categoryList;
  },

  getCategoryInfo: async (categoryId: number): Promise<CategoryModel> => {
    const { data: categoryData } = await axios.get<CategoryModel>(
      `${endpoints.CATEGORY_API}/${categoryId}`
    );
    return categoryData;
  },
};

export default categoryAPI;
