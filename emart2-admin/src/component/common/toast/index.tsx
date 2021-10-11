import React, { useEffect } from "react";

import * as S from "./styles";
import { ToastProps } from "./type";

const Toast: React.FC<ToastProps> = ({ message, show, setShow }) => {
  useEffect(() => {
    setTimeout(() => {
      if (show === true) {
        setShow(false);
      }
    }, 3000);
  });

  return (
    <>
      {show ? (
        <S.ToastContainer show={true}>
          <S.ToastMessage>{message}</S.ToastMessage>
        </S.ToastContainer>
      ) : (
        <S.ToastContainer show={false} />
      )}
    </>
  );
};
export default Toast;
