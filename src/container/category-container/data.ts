import { BoardModel } from "@module/model/boardModel";

export const data: BoardModel[] = [
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
];
