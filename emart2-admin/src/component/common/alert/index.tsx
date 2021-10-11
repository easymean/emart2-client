import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";
import { AlertProps } from "./type";

const Alert = ({ redirect, pop, message, show }: AlertProps) => {
  const history = useHistory();
  const onClick = () => {
    if (redirect) {
      window.location.href = redirect;
    } else if (pop) {
      history.goBack();
    }
  };

  return (
    <S.AlertContainer show={show}>
      <S.ModalMessage>{message}</S.ModalMessage>
      <S.Button onClick={onClick}>확인</S.Button>
    </S.AlertContainer>
  );
};
export default Alert;
