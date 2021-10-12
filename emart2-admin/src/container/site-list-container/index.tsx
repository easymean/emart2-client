import React, { useState } from "react";
import * as S from "./styles";
import { useModal } from "./hooks";

import SiteItem from "@component/site-item";
import SiteModalContainer from "@/container/site-modal-container";
import Alert from "@/component/common/alert";
import { useSiteList } from "@/query/site";
import { useMutation, useQueryClient } from "react-query";
import siteAPI from "@/api/website";

const SiteListContainer = () => {
  const { data: siteList } = useSiteList();
  const { show, showModal, closeModal, siteId, site } = useModal();

  const [alert, setAlert] = useState(false);
  const [deleted, setDeleted] = useState(0);

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(siteAPI.deleteSite, {
    onSuccess: () => {
      queryClient.invalidateQueries("sites");
    },
  });

  const handleClick = () => {
    mutate(deleted);
    window.location.href = "/site";
  };

  return (
    <>
      <Alert
        show={alert}
        message="삭제하시겠습니까?"
        handleClick={handleClick}
      />
      <S.SiteListContainer>
        <S.SiteListWrapper>
          {siteList &&
            siteList.map((site, idx) => {
              return (
                <S.SiteItem
                  onClick={() => showModal(site.id, site)}
                  key={site.id}
                >
                  <SiteItem
                    site={site}
                    setAlert={setAlert}
                    setDeleted={setDeleted}
                    key={idx}
                  />
                </S.SiteItem>
              );
            })}
        </S.SiteListWrapper>
      </S.SiteListContainer>
      {show && !alert && (
        <SiteModalContainer
          siteId={siteId}
          show={show}
          closeModal={closeModal}
          site={site}
        />
      )}
    </>
  );
};

export default SiteListContainer;
