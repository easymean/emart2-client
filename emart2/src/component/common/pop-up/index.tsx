import React, { useState } from "react";

import * as S from "./styles";
import { PopupProps } from "./type";

import Modal from "@component/common/modal";

const Popup = ({ message }: PopupProps) => {
  const [showPopup, setShow] = useState(true);

  const onCloseAlert = () => {
    setShow(false);
  };
  return (
    <Modal show={showPopup} onClose={onCloseAlert}>
      <S.PopupContainer>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.Button onClick={onCloseAlert}>확인</S.Button>
      </S.PopupContainer>
    </Modal>
  );
};
export default Popup;
