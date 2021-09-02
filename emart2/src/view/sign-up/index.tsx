import React, { useCallback, useState } from "react";
import * as S from "./styles";
import { CommonTitle } from "@/component/common/font-styles";
import InputBox from "@/component/input-box";
import { useEffect } from "react";

const SignUpPage = () => {
  const [info, setInfo] = useState({
    id: "",
    password: "",
    password2: "",
    email: "",
  });
  const [disabled, setDisable] = useState(true);
  const [pwdValid, setPwdValid] = useState(true);
  const [empty, setEmpty] = useState(true);

  const checkEmpty = () => {
    for (let el in info) {
      let val = info[el];
      if (val == null || (val != null && val == "")) {
        setEmpty(true);
        return;
      }
    }
    setEmpty(false);
  };

  const checkPassword = () => {
    const { password, password2 } = info;
    if (password == null || password.length < 1) {
      setPwdValid(false);
      return;
    }
    if (password2 == null || password2.length < 1) {
      setPwdValid(false);
      return;
    }
    if (password === password2) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
    }
  };

  useEffect(() => {
    checkPassword();
  }, [info.password, info.password2]); //비밀번호 일치 여부 판별

  useEffect(() => {
    checkEmpty();
  }, [info.id, info.email]); //빈칸 여부 판별

  useEffect(() => {
    if (!empty && pwdValid) {
      setDisable(false);
    }
  }, [empty, pwdValid]);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInfo({
        ...info,
        [name]: value,
      });
    },
    [info]
  );

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClickSignup();
      //추후 개발 예정
    }
  };

  const onClickSignup = () => {
    if (disabled) {
      return;
    }
    alert("회원가입짜라잔");
  };
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
