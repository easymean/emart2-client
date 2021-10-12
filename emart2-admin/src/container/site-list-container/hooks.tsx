import { useState } from "react";

import { SiteModel } from "@model/siteModel";

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
