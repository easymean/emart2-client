import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import * as S from "./styles";
import { useModal } from "./hooks";

import siteAPI from "@/api/website";
import { useSiteList } from "@/query/site";
import SiteItem from "@component/site-item";
import SiteModalContainer from "@/container/site-modal-container";
import Confirm from "@/component/common/confirm";

const SiteListContainer = () => {
  const { data: siteList } = useSiteList();
  const { show, showModal, closeModal, siteId, site } = useModal();

  const [confirm, setConfirm] = useState(false);
  const [deleted, setDeleted] = useState(0);

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(siteAPI.deleteSite, {
    onSuccess: () => {
      queryClient.invalidateQueries("sites");
    },
  });

  const handleClick = () => {
    mutate(deleted);
    setConfirm(false);
    closeModal();
  };

  const handleCancel = () => {
    setConfirm(false);
    closeModal();
  };
  return (
    <>
      <Confirm
        show={confirm}
        message="삭제하시겠습니까?"
        handleClick={handleClick}
        handleCancel={handleCancel}
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
                    setAlert={setConfirm}
                    setDeleted={setDeleted}
                    key={idx}
                  />
                </S.SiteItem>
              );
            })}
        </S.SiteListWrapper>
      </S.SiteListContainer>
      {show && !confirm && (
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
