import axios from "axios";

import endpoints from "./endpoints";
import CategoryModel from "@/model/cateoryModel";
import { WebsiteModel } from "@/model/websiteModel";

const categoryAPI = {
  getCategoryList: async (categoryId: number): Promise<CategoryModel[]> => {
    const { data: categoryList } = await axios.get<CategoryModel[]>(
      `${endpoints.CATEGORY_API}/${categoryId}`
    );

    return categoryList;
  },
};

const websiteAPI = {
  getWebsiteList: async (categoryId: number): Promise<WebsiteModel[]> => {
    const { data: siteList } = await axios.get<WebsiteModel[]>(
      `${endpoints.WEBSITE_API}?categoryId=${categoryId}`
    );
    return siteList;
  },
};
