import axios from "./axios";

import endpoints from "./endpoints";
import { SiteModel, SiteListModel } from "@model/siteModel";

const siteAPI = {
  getSiteList: async (categoryId: number): Promise<SiteModel[]> => {
    const { data } = await axios.get<SiteListModel>(
      `${endpoints.SITE_API}?category=${categoryId}`
    );
    return data.websiteList;
  },

  searchSitebyKeyword: async (keyword: string): Promise<SiteModel[]> => {
    const { data } = await axios.get<SiteListModel>(
      `${endpoints.SITE_API}/search?keyword=${keyword}`
    );
    return data.websiteList;
  },

  createWebsite: async (req: SiteModel): Promise<SiteModel> => {
    const { data } = await axios.post<SiteModel>(`${endpoints.SITE_API}`, req);
    return data;
  },
};

export default siteAPI;
