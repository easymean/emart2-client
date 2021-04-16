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
};

export default siteAPI;
