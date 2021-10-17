import React from "react";

import * as S from "./styles";
import { ConfirmProps } from "./type";

const Confirm = ({
  message,
  show,
  handleClick,
  handleCancel,
}: ConfirmProps) => {
  const onClick = () => {
    if (handleClick) {
      handleClick();
    }
  };

  const onCancel = () => {
    if (handleCancel) {
      handleCancel();
    }
  };

  return (
    <>
      {show ? (
        <S.ConfirmContainer show={show}>
          <S.Message>{message}</S.Message>
          <S.ButtonWrapper>
            <S.OkButton onClick={onClick}>확인</S.OkButton>
            <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
          </S.ButtonWrapper>
        </S.ConfirmContainer>
      ) : (
        <></>
      )}
    </>
  );
};
export default Confirm;
