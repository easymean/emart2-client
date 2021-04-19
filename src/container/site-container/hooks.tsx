import { useCallback, useEffect, useMemo, useState } from "react";

import siteAPI from "@api/website";
import categoryAPI from "@api/category";
import SiteModel from "@model/siteModel";
import StageModel from "@/model/stageModel";
import { SiteListType } from "./types";

export const useSite = (categoryId: number) => {
  const [title, setTitle] = useState("");
  const [description, setDesrcription] = useState("");
  const [stageList, setStageList] = useState([] as StageModel[]);
  const [siteList, setSiteList] = useState([] as SiteModel[]);

  const stageTable = useMemo(() => ({} as SiteListType), [siteList]);

  const getCategoryInfo = useCallback(async () => {
    const { name, description } = await categoryAPI.getCategory(categoryId);
    setTitle(name);
    setDesrcription(description);
  }, [categoryId]);

  const getStageList = useCallback(async () => {
    const stageList = await categoryAPI.getStageList();
    stageList.forEach((stage) => {
      stageTable;
    });
  }, []);

  const getSiteListByCategoryId = useCallback(async () => {
    const siteList = await siteAPI.getSiteList(categoryId);
    setSiteList(siteList);
  }, [categoryId]);

  const makeStageTable = useCallback(() => {
    console.log(stageList);
    stageList.forEach((stage) => {
      const arr = stageTable[stage.name];

      console.log(arr);
    });
  }, [siteList]);

  useEffect(() => {
    getCategoryInfo();
    getSiteListByCategoryId();
  }, [categoryId]);

  useEffect(() => {
    getStageList();
    makeStageTable();
  }, [siteList]);

  return {
    title,
    description,
    siteList,
    stageTable,
  };
};
