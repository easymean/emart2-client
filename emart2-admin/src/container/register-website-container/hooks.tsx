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

export const useInput = () => {
  const [info, setInfo] = useState({} as SiteModel);
  const [disabled, setDisabled] = useState(false);
  const onChangeHandler = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInfo({
        ...info,
        [name]: value,
      });
    },
    [info]
  );

  const checkValid = () => {
    for (let el in info) {
      if (el == null || el == "") {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (checkValid()) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [info]);
  return {
    info,
    onChangeHandler,
    disabled,
  };
};

export const useSaveButton = (info) => {
  const history = useHistory();
  const [isAlert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const createSiteInfo = async () => {
    info.order = 0;
    try {
      await siteAPI.createWebsite(info);
    } catch (error) {
      setAlert(true);
      setAlertMsg(MSG.ERROR);
      return;
    }
    history.goBack();
  };

  const onClickSave = () => {
    createSiteInfo();
  };
  return {
    onClickSave,
    isAlert,
    alertMsg,
  };
};
