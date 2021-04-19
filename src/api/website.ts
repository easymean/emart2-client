import axios from "./axios";

import endpoints from "./endpoints";
import SiteModel from "@model/siteModel";
import HashtagModel from "@/model/hashtagModel";

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
    return siteList;
  },

  getSiteListbyFreq: async (): Promise<HashtagModel[]> => {
    const { data: siteList } = await axios.get<HashtagModel[]>(
      `${endpoints.SITE_API}/freq`
    );
    return siteList;
  },

  incrementSiteFreq: async (siteId: number): Promise<HashtagModel> => {
    const { data: updatedSite } = await axios.put<HashtagModel>(
      `${endpoints.SITE_API}/freq/${siteId}`
    );
    return updatedSite;
  },
};

export default siteAPI;
