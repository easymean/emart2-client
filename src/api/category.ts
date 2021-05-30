import axios from "./axios";

import endpoints from "./endpoints";
import { CategoryModel, CategoryListModel } from "@model/cateoryModel";
import { EnumValueListModel, EnumValueModel } from "@/model/enumModel";

const categoryAPI = {
  getCategoryList: async (): Promise<CategoryModel[]> => {
    const { data } = await axios.get<CategoryListModel>(endpoints.CATEGORY_API);
    return data.categoryList;
  },

  getCategory: async (categoryId: number): Promise<CategoryModel> => {
    const { data: categoryData } = await axios.get<CategoryModel>(
      `${endpoints.CATEGORY_API}/${categoryId}`
    );
    console.log(categoryData);
    return categoryData;
  },

  getStageList: async (): Promise<EnumValueModel[]> => {
    const { data } = await axios.get<EnumValueListModel>(
      `${endpoints.CATEGORY_API}/stage`
    );
    return data.enumValueList;
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
