import React from "react";
import * as S from "./styles";
import { CommonTitle } from "@/component/common/font-styles";
import InputBox from "@/component/input-box";
import { useId, useInputBox, useSignupButton } from "./hooks";
import Alert from "@/component/common/alert";
import Toast from "@/component/common/toast";

const SignUpPage = () => {
  const { empty, pwdValid, handleChange, info } = useInputBox();
  const { onCheckId, idValid, toast, setToast, toastMsg } = useId(info);
  const { disabled, onKeyPress, onClickSignup, msg, redirect, alert } =
    useSignupButton(empty, pwdValid, idValid, info);
  return (
    <S.SignUpContainer>
      <Alert show={alert} redirect={redirect} message={msg} />
      <Toast message={toastMsg} show={toast} setShow={setToast} />
      <CommonTitle> 회원가입</CommonTitle>

      <S.SignUpWrapper>
        <S.InputBoxWrapper>
          <InputBox
            name="id"
            placeholder="아이디"
            onChange={handleChange}
            onKeyPress={onKeyPress}
          />
          <S.CheckIdButton onClick={onCheckId}>중복 확인</S.CheckIdButton>
        </S.InputBoxWrapper>
        <InputBox
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
        <InputBox
          name="password2"
          placeholder="비밀번호 확인"
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
        <S.PwdCaution valid={pwdValid}>
          비밀번호가 일치하지 않습니다.
        </S.PwdCaution>
        <S.InputBoxWrapper>
          <InputBox
            name="email"
            placeholder="이메일"
            onChange={handleChange}
            onKeyPress={onKeyPress}
          />
          <S.CheckEmailButton>이메일인증</S.CheckEmailButton>
        </S.InputBoxWrapper>
        <S.SignUpButton onClick={onClickSignup} disabled={disabled}>
          회원가입
        </S.SignUpButton>
      </S.SignUpWrapper>
    </S.SignUpContainer>
  );
};

export default SignUpPage;
