import { SiteModel } from "@/module/model/siteModel";

export const data: SiteModel[] = [
  {
    id: 1,
    categoryId: 1,
    categoryName: "광고제휴",
    serviceName: "FRONT",
    dev: true,
    url: "devad.emart.com:9080",
  },
  {
    id: 2,
    categoryId: 1,
    categoryName: "광고제휴",
    serviceName: "FRONT",
    dev: false,
    url: "ad.emart.com",
  },
  {
    id: 3,
    categoryId: 2,
    categoryName: "MMS쿠폰",
    serviceName: "FRONT",
    dev: false,
    url: "ad.emart.com",
  },
];
