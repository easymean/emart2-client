import { useEffect, useMemo, useState } from "react";
import siteAPI from "@api/website";
import categoryAPI from "@api/category";
import SiteModel from "@model/siteModel";

export const useSite = (categoryId: number) => {
  const [title, setTitle] = useState("");
  const [description, setDesrcription] = useState("");
  const [siteList, setSiteList] = useState([] as SiteModel[]);
  const getSiteListByCategoryId = async () => {
    const siteList = await siteAPI.getSiteList(categoryId);
    setSiteList(siteList);
  };

  const getCategory = async () => {
    const { name, description } = await categoryAPI.getCategory(categoryId);
    setTitle(name);
    setDesrcription(description);
  };

  useEffect(() => {
    getCategory();
    getSiteListByCategoryId();
  }, [categoryId]);

  return {
    title,
    description,
    siteList,
  };
};
