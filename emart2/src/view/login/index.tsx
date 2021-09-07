import React from "react";
import * as S from "./styles";
import InputBox from "@/component/input-box";
import { useLogin, useLoginInput, useSignup } from "./hooks";

const LoginPage = () => {
  const { setData, empty, account } = useLoginInput();
  const { onKeyPress, onClickLogin } = useLogin(empty, account);
  const { onClickRedirect } = useSignup();
  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <InputBox
          name="username"
          placeholder="아이디"
          setData={setData}
          onKeyPress={onKeyPress}
        />
        <InputBox
          name="password"
          placeholder="비밀번호"
          setData={setData}
          onKeyPress={onKeyPress}
        />
        <S.LoginButton onClick={onClickLogin}>로그인</S.LoginButton>
        <S.LoginButton onClick={onClickRedirect}>회원가입</S.LoginButton>
      </S.LoginWrapper>
    </S.LoginContainer>
  );
};

export default LoginPage;
