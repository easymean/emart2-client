import React from "react";
import * as S from "./styles";
import { useSaveButton } from "./hooks";

import RegisterSiteForm from "@/container/register-website-container";

const ManageSitePage = () => {
  const { showModal, onShowModal, onCloseModal } = useSaveButton();

  return (
    <S.ManageSiteContainer>
      <S.Title>사이트 관리 페이지</S.Title>
      <S.ButtonContainer>
        <S.CreateButton onClick={onShowModal}>시스템 추가하기</S.CreateButton>
      </S.ButtonContainer>
      <S.SiteListContainer></S.SiteListContainer>
      {showModal && (
        <RegisterSiteForm show={showModal} closeModal={onCloseModal} />
      )}
    </S.ManageSiteContainer>
  );
};

export default ManageSitePage;
