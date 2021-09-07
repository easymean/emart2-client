import React from "react";
import { AlertProps } from "./type";
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { Modal } from "../common/modal/styles";

const Alert = ({ redirect, pop, message }: AlertProps) => {
  const history = useHistory();
  const onClick = () => {
    if (redirect) {
      window.location.href = redirect;
    } else if (pop) {
      history.goBack();
    }
  };
  return (
    <Modal>
      <S.ModalMessage>{message}</S.ModalMessage>
      <S.Button onClick={onClick}>확인</S.Button>
    </Modal>
  );
};
export default Alert;
