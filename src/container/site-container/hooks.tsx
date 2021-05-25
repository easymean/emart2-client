import { useCallback, useEffect, useMemo, useState } from "react";

import siteAPI from "@api/website";
import categoryAPI from "@api/category";
import { SiteModel } from "@model/siteModel";
import { SiteListType } from "./types";
import { EnumValueModel } from "@/model/enumModel";

export const useSite = (categoryId: number) => {
  const [title, setTitle] = useState("");
  const [description, setDesrcription] = useState("");
  const [stageList, setStageList] = useState([] as EnumValueModel[]);
  const [siteList, setSiteList] = useState([] as SiteModel[]);

  const stageTable = useMemo(() => ({} as SiteListType), [siteList]);

  const getCategoryInfo = useCallback(async () => {
    const { name, description } = await categoryAPI.getCategory(categoryId);
    setTitle(name);
    setDesrcription(description);
  }, [categoryId]);

  const getStageList = useCallback(async () => {
    const stageList = await categoryAPI.getStageList();
    setStageList(stageList);
  }, [categoryId]);

  const getSiteListByCategoryId = useCallback(async () => {
    const siteList = await siteAPI.getSiteList(categoryId);
    setSiteList(siteList);
  }, [categoryId]);

  const makeTable = useCallback(
    (stages: EnumValueModel[], sites: SiteModel[], table: SiteListType) => {
      stages.forEach((stage, idx) => {
        const arr = sites.filter((site) => {
          return site.stage === stage.code;
        });
        table[idx] = arr;
      });
      return table;
    },
    [categoryId]
  );

  useEffect(() => {
    getCategoryInfo();
    getStageList();
    getSiteListByCategoryId();
  }, [categoryId]);

  return {
    title,
    description,
    siteList,
    stageList,
    stageTable,
    makeTable,
  };
};
