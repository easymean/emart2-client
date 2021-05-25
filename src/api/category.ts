import axios from "./axios";

import endpoints from "./endpoints";
import CommonType from "@/model/commonType";
import { CategoryModel, CategoryListModel } from "@model/cateoryModel";
import { EnumValueListModel, EnumValueModel } from "@/model/enumModel";

const categoryAPI = {
  getCategoryList: async (): Promise<CategoryModel[]> => {
    const { data: res } = await axios.get<CommonType<CategoryListModel>>(
      endpoints.CATEGORY_API
    );
    const { data } = res;
    return data.categoryList;
  },

  getCategory: async (categoryId: number): Promise<CategoryModel> => {
    const { data: categoryData } = await axios.get<CategoryModel>(
      `${endpoints.CATEGORY_API}/${categoryId}`
    );
    return categoryData;
  },

  getStageList: async (): Promise<EnumValueModel[]> => {
    const { data: res } = await axios.get<CommonType<EnumValueListModel>>(
      `${endpoints.CATEGORY_API}/stage`
    );
    const { data } = res;
    return data.enumValueList;
  },
};

export default categoryAPI;
