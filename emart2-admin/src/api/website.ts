import axios from "./axios";

import endpoints from "./endpoints";
import { SiteModel, SiteListModel } from "@model/siteModel";

interface UpdateSiteProps {
  req: SiteModel;
  id: number;
}

const siteAPI = {
  getSiteList: async (): Promise<SiteModel[]> => {
    const { data: websiteList } = await axios.get<SiteModel[]>(
      `${endpoints.SITE_API}`
    );
    return websiteList;
  },

  getSite: async (id: number): Promise<SiteModel> => {
    const { data: site } = await axios.get<SiteModel>(
      `${endpoints.SITE_API}/${id}`
    );
    return site;
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

  updateSite: async ({ req, id }: UpdateSiteProps): Promise<SiteModel> => {
    const { data } = await axios.put<SiteModel>(
      `${endpoints.SITE_API}/${id}`,
      req
    );
    return data;
  },

  deleteSite: async (id: number) => {
    await axios.delete<SiteModel>(`${endpoints.SITE_API}/${id}`);
  },
};

export default siteAPI;
