import siteAPI from "@/api/website";
import { SiteModel } from "@/model/siteModel";
import { useMutation, useQuery } from "react-query";

export const useSite = (siteId: number) => {
  return useQuery<SiteModel, Error>(["site", siteId], () =>
    siteAPI.getSite(siteId)
  );
};

export const makeSite = (site) => {
  return useMutation<SiteModel, Error>(() => siteAPI.createWebsite(site));
};
