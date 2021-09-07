import categoryAPI from "@/api/category";
import siteAPI from "@/api/website";
import { CategoryModel } from "@/model/cateoryModel";
import { SiteModel } from "@/model/siteModel";
import { useCallback, useEffect } from "react";
import { useState } from "react";

export const useSelectBox = () => {
  const [systemList, setSystemList] = useState([] as CategoryModel[]);
  const getSystemList = async () => {
    const categoryList = await categoryAPI.getCategoryList();
    setSystemList(categoryList);
  };

  useEffect(() => {
    getSystemList();
  }, []);

  return {
    systemList,
  };
};

export const useInput = () => {
  const [info, setInfo] = useState({} as SiteModel);
  const [disabled, setDisabled] = useState(false);
  const onChangeHandler = useCallback(
    (e) => {
      const { name, value } = e.target;
      console.log(name);
      console.log(value);
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
  const createSiteInfo = async () => {
    info.order = 0;
    const site = await siteAPI.createWebsite(info);
  };

  const onClickSave = () => {
    createSiteInfo();
  };
  return {
    onClickSave,
  };
};
