import siteAPI from "@/api/website";
import { SiteModel } from "@/model/siteModel";
import { useQuery } from "react-query";

export const useSiteList = (categoryId: number) => {
  return useQuery<SiteModel[], Error>(["sites", categoryId], () =>
    siteAPI.getSiteList(categoryId)
  );
};
