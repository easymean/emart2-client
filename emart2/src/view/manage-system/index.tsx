import React, { useState } from "react";
import * as S from "./styles";

import RegisterCategoryForm from "@container/register-category-container";
import { useSaveButton } from "@view/manage-system/hooks";

const ManageSystemPage = () => {
  const { showModal, onShowModal } = useSaveButton();
  return (
    <S.ManageSystemContainer>
      <S.Title>시스템 관리 페이지</S.Title>
      <S.ButtonContainer>
        <S.CreateButton onClick={onShowModal}>시스템 추가하기</S.CreateButton>
      </S.ButtonContainer>
      <S.SystemListContainer></S.SystemListContainer>
      <RegisterCategoryForm show={showModal} />
    </S.ManageSystemContainer>
  );
};

export default ManageSystemPage;
