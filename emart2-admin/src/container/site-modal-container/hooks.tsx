import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import siteAPI from "@/api/website";
import { RootState } from "@/module";
import { SiteModel } from "@/model/siteModel";
import { getCategoryListAsync } from "@module/category";
import { MSG } from "@/asset/constant";
import { useHistory } from "react-router";

export const useSelectBox = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.category
  );
  const getSystemList = () => {
    dispatch(getCategoryListAsync.request());
  };

  useEffect(() => {
    getSystemList();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export const useUpdate = (
  id,
  name,
  description,
  url,
  categoryId,
  dev,
  stage
) => {
  const history = useHistory();

  const [info, setInfo] = useState({
    id: id,
    name: name,
    description: description,
    url: url,
    categoryId: categoryId,
    dev: dev,
    stage: stage,
  } as SiteModel);
  const [isAlert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const updateSiteInfo = async () => {
    try {
      await siteAPI.createWebsite(info);
    } catch (error) {
      setAlert(true);
      setAlertMsg(MSG.ERROR);
      return;
    }
    history.goBack();
  };

  const onClickUpdate = () => {
    updateSiteInfo();
  };
  return {
    onClickUpdate,
    isAlert,
    alertMsg,
  };
};

export const useSite = (siteId: number) => {
  const [site, setSite] = useState({} as SiteModel);
  const getSiteById = async () => {
    try {
      const data = await siteAPI.getSite(siteId);
      setSite(data);
    } catch {
      alert(MSG.ERROR);
      return;
    }
  };

  useEffect(() => {
    getSiteById();
  }, [siteId]);

  return {
    site,
  };
};
