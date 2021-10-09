import siteAPI from "@/api/website";
import { SiteModel } from "@/model/siteModel";
import { useQuery } from "react-query";

export const useSite = (siteId: number) => {
  return useQuery<SiteModel, Error>(["site", siteId], () =>
    siteAPI.getSite(siteId)
  );
};
