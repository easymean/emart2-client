import categoryAPI from "@/api/category";
import { CategoryModel } from "@/model/cateoryModel";
import { useCallback, useEffect } from "react";
import { useState } from "react";

export const useInput = () => {
  const [info, setInfo] = useState({} as CategoryModel);
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
  const createCategory = async () => {
    info.order = 0;
    const site = await categoryAPI.createCategory(info);
  };

  const onClickSave = () => {
    createCategory();
  };
  return {
    onClickSave,
  };
};
