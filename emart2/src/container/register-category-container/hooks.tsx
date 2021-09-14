import { useHistory } from "react-router";
import { useCallback, useEffect, useState } from "react";

import categoryAPI from "@/api/category";
import { CategoryModel } from "@/model/cateoryModel";

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
  const history = useHistory();
  const [isAlert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const createCategory = async () => {
    info.order = 0;
    try {
      await categoryAPI.createCategory(info);
    } catch (err) {
      setAlert(true);
      setAlertMsg("에러가 발생했습니다 잠시 후 다시 시도해주세요");
      return;
    }
    history.goBack();
  };

  const onClickSave = () => {
    createCategory();
  };
  return {
    onClickSave,
    isAlert,
    alertMsg,
  };
};
