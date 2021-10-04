import React from "react";

import * as S from "./styles";
import { PopupProps } from "./type";

import Modal from "@component/common/modal";

const Popup = ({ message, onClose }: PopupProps) => {
  return (
    <Modal show={true} onClose={onClose}>
      <S.PopupContainer>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.Button onClick={onClose}>확인</S.Button>
      </S.PopupContainer>
    </Modal>
  );
};
export default Popup;
