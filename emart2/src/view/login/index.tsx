import React from "react";
import * as S from "./styles";
import { useInput, useLogin } from "./hooks";

import LoginForm from "@/container/login-container";
import Alert from "@/component/common/alert";

const LoginPage = () => {
  const { setData, empty, account } = useInput();
  const {
    onKeyPress,
    onClickLogin,
    isAlert,
    redirectUrl,
    alertMsg,
    onClickRedirect,
  } = useLogin(empty, account);

  return (
    <S.LoginPage>
      <LoginForm
        onKeyPress={onKeyPress}
        setData={setData}
        onClickLogin={onClickLogin}
        onClickRedirect={onClickRedirect}
      />
      {isAlert && <Alert redirect={redirectUrl} message={alertMsg} />}
    </S.LoginPage>
  );
};

export default LoginPage;
