import React from "react";
import * as S from "./styles";
import { useSaveButton } from "./hooks";

import SiteListContainer from "@/container/site-list-container";
import SiteRegisterContainer from "@/container/site-register-container";

const ManageSitePage = () => {
  const { showModal, onShowModal, onCloseModal } = useSaveButton();

  return (
    <S.ManageSiteContainer>
      <S.ButtonContainer>
        <S.CreateButton onClick={onShowModal}>사이트 추가하기</S.CreateButton>
      </S.ButtonContainer>
      <S.ManageHeader>
        <S.ManageInfo>
          <S.Title>사이트관리 페이지</S.Title>
          <S.Description>사이트를 등록하고 수정할 수 있습니다.</S.Description>
        </S.ManageInfo>
      </S.ManageHeader>
      {showModal && (
        <SiteRegisterContainer show={showModal} closeModal={onCloseModal} />
      )}
      <SiteListContainer />
    </S.ManageSiteContainer>
  );
};

export default ManageSitePage;
