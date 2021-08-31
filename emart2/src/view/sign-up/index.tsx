import React, { useCallback, useState } from "react";
import * as S from "./styles";
import { CommonTitle } from "@/component/common/font-styles";
import InputBox from "@/component/input-box";

const SignUpPage = () => {
  const [info, setInfo] = useState({
    id: "",
    password: "",
    password2: "",
    email: "",
  });
  const [disabled, setDisable] = useState(true);
  const [pwdValid, setPwdValid] = useState(false);

  const isEmpty = (data) => {
    for (let el in data) {
      let val = data[el];
      if (val == null || (val != null && val == "")) {
        return true;
      }
    }
    return false;
  };
  const handleConfirmPassword = () => {
    if (
      info.password != "" &&
      info.password2 != "" &&
      info.password === info.password2
    ) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
    }
  };

  const setData = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInfo({
        ...info,
        [name]: value,
      });
      console.log(info);
      handleConfirmPassword();

      if (!isEmpty(info)) {
        setDisable(false);
      }
    },
    [info, disabled]
  );

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClickSignup(e);
      //추후 개발 예정
    }
  };

  const onClickSignup = (e) => {
    if (isEmpty(info)) {
      alert("모두 입력해주세요");
    }
    setDisable(false);
  };
  return (
    <S.SignUpContainer>
      <CommonTitle> 회원가입</CommonTitle>

      <S.SignUpWrapper>
        <S.InputBoxWrapper>
          <InputBox
            name="id"
            placeholder="아이디"
            setData={setData}
            onKeyPress={onKeyPress}
          />
          <S.CheckIdButton>중복 확인</S.CheckIdButton>
        </S.InputBoxWrapper>
        <S.InputBoxWrapper>
          <InputBox
            name="password"
            placeholder="비밀번호"
            setData={setData}
            onKeyPress={onKeyPress}
          />
        </S.InputBoxWrapper>
        <S.InputBoxWrapper>
          <InputBox
            name="password2"
            placeholder="비밀번호 확인"
            setData={setData}
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
            setData={setData}
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
