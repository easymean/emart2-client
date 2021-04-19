import axios from "./axios";

import endpoints from "./endpoints";
import CategoryModel from "@model/cateoryModel";
import StageModel from "@/model/stageModel";

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

  getStageList: async (): Promise<StageModel[]> => {
    const { data: stageList } = await axios.get<StageModel[]>(
      `${endpoints.CATEGORY_API}/stage`
    );
    return stageList;
  },
};

export default categoryAPI;
