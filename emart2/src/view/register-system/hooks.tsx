import categoryAPI from "@/api/category";
import { CategoryModel } from "@/model/cateoryModel";
import { useEffect } from "react";
import { useState } from "react";

export const useSelectBox = () => {
  const [systemList, setSystemList] = useState([] as CategoryModel[]);

  const getSystemList = async () => {
    await categoryAPI
      .getCategoryList()
      .then((res) => setSystemList(res))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSystemList();
  });

  return {
    systemList,
  };
};
