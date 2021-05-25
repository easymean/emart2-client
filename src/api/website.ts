import axios from "./axios";

import endpoints from "./endpoints";
import { SiteModel, SiteListModel } from "@model/siteModel";
import { HashtagModel, HashtagListModel } from "@/model/hashtagModel";
import CommonType from "@/model/commonType";

const siteAPI = {
  getSiteList: async (categoryId: number): Promise<SiteModel[]> => {
    const { data: res } = await axios.get<CommonType<SiteListModel>>(
      `${endpoints.SITE_API}?category=${categoryId}`
    );
    const { data } = res;
    return data.websiteList;
  },

  searchSitebyKeyword: async (keyword: string): Promise<SiteModel[]> => {
    const { data: res } = await axios.get<CommonType<SiteListModel>>(
      `${endpoints.SITE_API}/search?keyword=${keyword}`
    );
    const { data } = res;
    console.log(data);
    return data.websiteList;
  },

  getSiteListbyFreq: async (): Promise<SiteModel[]> => {
    const { data: res } = await axios.get<CommonType<SiteListModel>>(
      `${endpoints.SITE_API}/freq`
    );
    const { data } = res;
    return data.websiteList;
  },

  increaseSiteFreq: async (siteId: number) => {
    await axios.put(`${endpoints.SITE_API}/freq/${siteId}`);
  },
};

export default siteAPI;
