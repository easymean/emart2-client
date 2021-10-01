import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import siteAPI from "@/api/website";
import { RootState } from "@/module";
import { SiteModel } from "@/model/siteModel";
import { getCategoryListAsync } from "@module/category";

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
  const [isAlert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const createSiteInfo = async () => {
    info.order = 0;
    try {
      await siteAPI.createWebsite(info);
    } catch (error) {
      setAlert(true);
      setAlertMsg("에러가 발생했습니다 잠시 후 다시 시도해주세요");
      return;
    }
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
