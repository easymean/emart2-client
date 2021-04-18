import axios from "./axios";

import endpoints from "./endpoints";
import SiteModel from "@model/siteModel";

const siteAPI = {
  getSiteList: async (categoryId: number): Promise<SiteModel[]> => {
    const { data: siteList } = await axios.get<SiteModel[]>(
      `${endpoints.SITE_API}?categoryId=${categoryId}`
    );
    return siteList;
  },

  searchSitebyKeyword: async (keyword: string): Promise<SiteModel[]> => {
    const { data: siteList } = await axios.get<SiteModel[]>(
      `${endpoints.SITE_API}/search?keyword=${keyword}`
    );
    console.log(siteList);
    return siteList;
  },

  getSiteListbyFreq: async (): Promise<SiteModel[]> => {
    const { data: siteList } = await axios.get<SiteModel[]>(
      `${endpoints.SITE_API}/freq`
    );
    return siteList;
  },
};

export default siteAPI;
