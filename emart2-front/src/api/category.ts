import axios from "./axios";

import endpoints from "./endpoints";
import { CategoryModel } from "@model/cateoryModel";
import { EnumValueListModel, EnumValueModel } from "@/model/enumModel";

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

  getStageList: async (): Promise<EnumValueModel[]> => {
    const { data } = await axios.get<EnumValueListModel>(
      `${endpoints.CATEGORY_API}/stage`
    );
    return data.enumValueList;
  },
};

export default categoryAPI;
