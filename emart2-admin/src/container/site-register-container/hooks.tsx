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

export const useForm = (name, description, url, categoryId, dev, stage) => {
  const history = useHistory();
  const [isAlert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const [isPopup, setPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [info, setInfo] = useState({} as SiteModel);

  const createSiteInfo = async (input) => {
    try {
      await siteAPI.createWebsite(input);
    } catch (error) {
      setAlert(true);
      setAlertMsg(MSG.ERROR);
      return;
    }
  };

  const checkValid = (input) => {
    for (let el in input) {
      if (input[el] === null || input[el] === "") {
        return false;
      }
    }
    return true;
  };

  const closePopup = () => {
    setPopup(false);
  };

  const onSubmitHandler = (e) => {
    const info: SiteModel = {
      order: 0,
      name: name,
      description: description,
      url: url,
      dev: dev,
      stage: stage,
      categoryId: categoryId,
    };
    e.preventDefault();

    setInfo(info);
    if (!checkValid(info)) {
      setPopup(true);
      setPopupMsg("필수 요소를 채워주세요");
      return;
    }

    createSiteInfo(info);
    history.goBack();
    //window.location.href = "/site";
  };

  return {
    onSubmitHandler,
    isAlert,
    alertMsg,
    isPopup,
    popupMsg,
    closePopup,
  };
};

export const useSite = (siteId) => {
  const [site, setSite] = useState<SiteModel>();
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
