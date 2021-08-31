import React, { useState } from "react";
import * as S from "./styles";
import InputBox from "@/component/input-box";
import { useCallback } from "react";

const LoginPage = () => {
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  const setData = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = () => {
    setAccount({
      id: "",
      password: "",
    });
  };

  const onClick = () => {
    console.log(account);
    if (isEmpty(account.id) || isEmpty(account.password)) {
      alert("아이디 혹은 비밀번호를 입력해주세요");
    }
    //login ajax
    onReset();
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClick();
    }
  };

  const isEmpty = (text) => {
    if (text == null || (text != null && text == "")) {
      return true;
    }
    return false;
  };

  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <InputBox
          name="id"
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
        <S.LoginButton onClick={onClick}>로그인</S.LoginButton>
      </S.LoginWrapper>
    </S.LoginContainer>
  );
};

export default LoginPage;
