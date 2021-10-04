import { useCallback, useEffect, useRef, useState } from "react";

import siteAPI from "@api/website";
import categoryAPI from "@api/category";
import { SiteModel } from "@model/siteModel";
import { useScroll } from "@/component/common/hooks/scroll";
import { siteListData } from "./data";

export const useSite = (categoryId: number) => {
  const [title, setTitle] = useState("");
  const [description, setDesrcription] = useState("");
  const [devSiteList, setDevSiteList] = useState([] as SiteModel[]);
  const [realSiteList, setRealSiteList] = useState([] as SiteModel[]);

  const getCategoryInfo = useCallback(async () => {
    const { name, description } = await categoryAPI.getCategory(categoryId);
    setTitle(name);
    setDesrcription(description);
  }, [categoryId]);
  const getSiteListByCategoryId = useCallback(async () => {
    // const siteList = await siteAPI.getSiteList(categoryId);
    const siteList = siteListData;
    const tempDev = siteList.filter((el) => el.dev);
    const tempReal = siteList.filter((el) => !el.dev);
    setDevSiteList([...devSiteList.concat(tempDev)]);
    setRealSiteList([...realSiteList.concat(tempReal)]);
  }, [categoryId]);

  useEffect(() => {
    getCategoryInfo();
    getSiteListByCategoryId();
  }, [categoryId]);

  return {
    title,
    description,
    devSiteList,
    realSiteList,
  };
};

export const useButton = () => {
  const [isClick, setClick] = useState(true);
  const [buttonId, setButtonId] = useState("");
  const { scrollToRef } = useScroll();

  const refs = useRef([] as any);

  const HASH = {
    dev: 0,
    real: 1,
    server: 2,
  };

  const setButton = (e) => {
    setClick(true);
    setButtonId(e.target.id);
  };

  const onClick = (e) => {
    e.preventDefault();
    setButton(e);
    scrollToRef(refs.current[HASH[e.target.id]]);
  };

  return {
    isClick,
    buttonId,
    refs,
    onClick,
  };
};
