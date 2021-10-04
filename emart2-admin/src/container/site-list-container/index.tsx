import React from "react";
import * as S from "./styles";
import { useModal, useSite } from "./hooks";

import SiteItem from "@component/site-item";
import SiteModalContainer from "@/container/site-modal-container";

const SiteListContainer = () => {
  const { siteList } = useSite();
  const { show, showModal, closeModal, siteId } = useModal();

  return (
    <>
      <S.SiteListContainer>
        <S.SiteListWrapper>
          {siteList.length !== 0 ? (
            siteList.map((site, idx) => {
              return (
                <S.SiteItem onClick={() => showModal(site.id)} key={site.id}>
                  <SiteItem site={site} key={idx} />
                </S.SiteItem>
              );
            })
          ) : (
            <></>
          )}
        </S.SiteListWrapper>
      </S.SiteListContainer>
      {show && (
        <SiteModalContainer
          siteId={siteId}
          show={show}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default SiteListContainer;
