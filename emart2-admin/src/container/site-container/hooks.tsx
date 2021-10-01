import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import siteAPI from "@api/website";
import categoryAPI from "@api/category";
import { SiteModel } from "@model/siteModel";
import { useScroll } from "@/component/common/hooks/scroll";

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
    const siteList = await siteAPI.getSiteList(categoryId);

    siteList.map((el) => {
      if (el.dev) {
        setDevSiteList(devSiteList.concat(el));
      } else {
        setRealSiteList(realSiteList.concat(el));
      }
    });
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

  const refs = useRef([] as any);

  const HASH = {
    dev: 0,
    real: 1,
    server: 2,
  };

  const { scrollToRef } = useScroll();

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
