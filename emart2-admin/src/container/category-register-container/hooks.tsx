import { useHistory } from "react-router";
import { useState } from "react";

import categoryAPI from "@/api/category";
import { CategoryModel } from "@/model/cateoryModel";
import { MSG } from "@/asset/constant";

export const useForm = (name, description) => {
  const history = useHistory();
  const [isAlert, setAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const [isPopup, setPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [info, setInfo] = useState({} as CategoryModel);

  const checkValid = (input) => {
    for (let el in input) {
      if (input[el] === null || input[el] === "") {
        return false;
      }
    }
    return true;
  };

  const createCategory = async (input) => {
    try {
      await categoryAPI.createCategory(input);
    } catch (err) {
      setAlert(true);
      setAlertMsg(MSG.ERROR);
      return;
    }
    history.goBack();
  };

  const onSubmitHandler = (e) => {
    const info: CategoryModel = {
      order: 0,
      name: name,
      description: description,
    };
    e.preventDefault();
    setInfo(info);
    if (!checkValid(info)) {
      setPopup(true);
      setPopupMsg("필수 요소를 채워주세요");
      return;
    }

    createCategory(info);
    history.goBack();
  };

  const closePopup = () => {
    setPopup(false);
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
