import axios from "./axios";

import endpoints from "./endpoints";
import { SiteModel, SiteListModel } from "@model/siteModel";
import { HashtagModel, HashtagListModel } from "@/model/hashtagModel";

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

  getSiteListbyFreq: async (): Promise<HashtagModel[]> => {
    const { data } = await axios.get<HashtagListModel>(
      `${endpoints.SITE_API}/freq`
    );

    return data.websiteList;
  },

  increaseSiteFreq: async (siteId: number) => {
    await axios.put(`${endpoints.SITE_API}/freq/${siteId}`);
  },

  createWebsite: async (req: SiteModel): Promise<SiteModel> => {
    const { data } = await axios.post<SiteModel>(
      `${endpoints.MANAGE_SITE_API}`,
      req
    );
    return data;
  },
};

export default siteAPI;
