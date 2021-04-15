import axios from "axios";

import endpoints from "./endpoints";
import WebsiteModel from "@model/websiteModel";

const websiteAPI = {
  getWebsiteList: async (categoryId: number): Promise<WebsiteModel[]> => {
    const { data: siteList } = await axios.get<WebsiteModel[]>(
      `${endpoints.WEBSITE_API}?categoryId=${categoryId}`
    );
    return siteList;
  },
};
