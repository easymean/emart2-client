import { useCallback, useEffect, useState } from "react";

import siteAPI from "@api/website";
import { SiteModel } from "@model/siteModel";

export const useSite = () => {
  const [siteList, setSiteList] = useState([] as SiteModel[]);

  const getSiteListByCategoryId = useCallback(async () => {
    const siteList = await siteAPI.getSiteList();
    setSiteList(siteList);
  }, []);

  useEffect(() => {
    getSiteListByCategoryId();
  }, []);

  return {
    siteList,
  };
};

export const useModal = () => {
  const [show, setShow] = useState<boolean>(false);
  const [siteId, setSiteId] = useState<number>(0);
  const [site, setSite] = useState<SiteModel>({} as SiteModel);
  const showModal = (id, site) => {
    setShow(true);
    setSiteId(id);
    setSite(site);
  };
  const closeModal = () => {
    setShow(false);
  };

  return { show, siteId, showModal, closeModal, site };
};
