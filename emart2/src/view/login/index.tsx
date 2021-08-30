import React from "react";
import * as S from "./styles";

const LoginPage = () => {
  return (
    <S.LoginContainer>
      <S.LoginInput type="text" placeholder="아이디" />
      <S.LoginInput type="text" placeholder="비밀번호" />
    </S.LoginContainer>
  );
};

export default LoginPage;
