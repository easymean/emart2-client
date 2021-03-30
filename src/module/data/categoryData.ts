import CategoryModel from "@module/model/cateoryModel";

export const getCategoryData = (): Promise<CategoryModel[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(categoryData);
    }, 1000);
  });
};

export const categoryData: CategoryModel[] = [
  {
    id: 1,
    name: "광고제휴",
  },
  {
    id: 2,
    name: "MMS쿠폰",
  },
  {
    id: 3,
    name: "세금계산서",
  },
  {
    id: 4,
    name: "챗봇 API",
  },
];
