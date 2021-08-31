import React, { useState } from "react";
import * as S from "./styles";
import InputBox from "@/component/input-box";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onReset = () => {
    setId("");
    setPassword("");
  };

  const onClick = () => {
    onReset();
  };

  return (
    <S.LoginContainer>
      <S.LoginWrapper>
        <InputBox placeholder="아이디" setData={setId} />
        <InputBox placeholder="비밀번호" setData={setPassword} />
        <S.LoginButton onClick={onClick} />
      </S.LoginWrapper>
    </S.LoginContainer>
  );
};

export default LoginPage;
