import axios from "axios";

import endpoints from "./endpoints";
import CategoryModel from "@model/cateoryModel";

const categoryAPI = {
  getCategoryList: async (): Promise<CategoryModel[]> => {
    const { data: categoryList } = await axios.get<CategoryModel[]>(
      `${endpoints.CATEGORY_API}`
    );

    return categoryList;
  },
};

export default categoryAPI;
