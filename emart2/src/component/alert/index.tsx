import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import { AlertProps } from "./type";

import Modal from "@component/common/modal";

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
    <Modal show={true}>
      <S.AlertContainer>
        <S.ModalMessage>{message}</S.ModalMessage>
        <S.Button onClick={onClick}>확인</S.Button>
      </S.AlertContainer>
    </Modal>
  );
};
export default Alert;
