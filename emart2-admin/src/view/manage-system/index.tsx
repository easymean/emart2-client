import React from "react";
import * as S from "./styles";

import { useSaveButton } from "@/view/manage-system/hooks";
import CategoryRegisterContainer from "@/container/category-register-container";

const ManageSystemPage = () => {
  const { showModal, onShowModal, onCloseModal } = useSaveButton();
  return (
    <S.ManageSystemContainer>
      <S.ButtonContainer>
        <S.CreateButton onClick={onShowModal}>사이트 추가하기</S.CreateButton>
      </S.ButtonContainer>
      <S.ManageHeader>
        <S.ManageInfo>
          <S.Title>시스템 관리 페이지</S.Title>
          <S.Description>시스템을 등록하고 수정할 수 있습니다.</S.Description>
        </S.ManageInfo>
      </S.ManageHeader>
      {showModal && (
        <CategoryRegisterContainer show={showModal} closeModal={onCloseModal} />
      )}
    </S.ManageSystemContainer>
  );
};

export default ManageSystemPage;
