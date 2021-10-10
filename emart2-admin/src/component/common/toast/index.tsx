import React from "react";

import * as S from "./styles";
import { ToastProps } from "./type";

import Modal from "@component/common/modal";

const Toast = ({ message, onClose }: ToastProps) => {
  return (
    <Modal show={true} onClose={onClose}>
      <S.ToastContainer>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.Button onClick={onClose}>확인</S.Button>
      </S.ToastContainer>
    </Modal>
  );
};
export default Toast;
