import { useState } from "react";

import siteAPI from "@/api/website";
import { SiteModel } from "@/model/siteModel";
import { MSG } from "@/asset/constant";
import { useHistory } from "react-router";

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
