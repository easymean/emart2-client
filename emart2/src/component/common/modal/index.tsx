import React from "react";
import { createPortal } from "react-dom";

import * as S from "./styles";
import { ModalProps } from "./types";

const $modalRoot = document.getElementById("modal-root");
const Modal = ({ className, children, show, setShow }: ModalProps) => {
  const onCloseModal = () => {
    //setShow();
  };
  const modalElement = (
    <>
      {show && (
        <S.ModalContainer className={className}>
          <S.Dimmed onClick={onCloseModal}></S.Dimmed>
          <S.Content>{children}</S.Content>
        </S.ModalContainer>
      )}
    </>
  );
  if (!$modalRoot) return null;
  return createPortal(modalElement, $modalRoot);
};
export default Modal;
