import React from "react";
import * as S from "./styles";
import { CommonTitle } from "@/component/common/font-styles";
import InputBox from "@/component/input-box";
import { useInputBox, useSignupButton } from "./hooks";

const SignUpPage = () => {
  const { empty, pwdValid, handleChange, info } = useInputBox();
  const { disabled, onKeyPress, onClickSignup } = useSignupButton(
    empty,
    pwdValid,
    info
  );
  return (
    <S.SignUpContainer>
      <CommonTitle> 회원가입</CommonTitle>

      <S.SignUpWrapper>
        <S.InputBoxWrapper>
          <InputBox
            name="id"
            placeholder="아이디"
            setData={handleChange}
            onKeyPress={onKeyPress}
          />
          <S.CheckIdButton>중복 확인</S.CheckIdButton>
        </S.InputBoxWrapper>
        <S.InputBoxWrapper>
          <InputBox
            name="password"
            placeholder="비밀번호"
            setData={handleChange}
            onKeyPress={onKeyPress}
          />
        </S.InputBoxWrapper>
        <S.InputBoxWrapper>
          <InputBox
            name="password2"
            placeholder="비밀번호 확인"
            setData={handleChange}
            onKeyPress={onKeyPress}
          />
        </S.InputBoxWrapper>
        <S.PwdCaution>
          {pwdValid ? "" : "비밀번호가 일치하지 않습니다."}
        </S.PwdCaution>

        <S.InputBoxWrapper>
          <InputBox
            name="email"
            placeholder="이메일"
            setData={handleChange}
            onKeyPress={onKeyPress}
          />
        </S.InputBoxWrapper>
        {/* <S.SignUpButton>이메일인증</S.SignUpButton> */}
        <S.InputBoxWrapper>
          <S.SignUpButton onClick={onClickSignup} disabled={disabled}>
            회원가입
          </S.SignUpButton>
        </S.InputBoxWrapper>
      </S.SignUpWrapper>
    </S.SignUpContainer>
  );
};

export default SignUpPage;
