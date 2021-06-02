import { useCallback, useEffect, useMemo, useState } from "react";

import siteAPI from "@api/website";
import categoryAPI from "@api/category";
import { SiteModel } from "@model/siteModel";

export const useSite = (categoryId: number) => {
  const [title, setTitle] = useState("");
  const [description, setDesrcription] = useState("");
  const [siteList, setSiteList] = useState([] as SiteModel[]);

  const getCategoryInfo = useCallback(async () => {
    const { name, description } = await categoryAPI.getCategory(categoryId);
    setTitle(name);
    setDesrcription(description);
  }, [categoryId]);
  const getSiteListByCategoryId = useCallback(async () => {
    const siteList = await siteAPI.getSiteList(categoryId);
    setSiteList(siteList);
  }, [categoryId]);

  useEffect(() => {
    getCategoryInfo();
    getSiteListByCategoryId();
  }, [categoryId]);

  return {
    title,
    description,
    siteList,
  };
};
