import authAPI from "@/api/auth";
import { LoginModel } from "@/model/authModel";
import { useCallback, useEffect, useState } from "react";

export const useLoginInputBox = () => {
  const [account, setAccount] = useState({} as LoginModel);
  const [empty, setEmpty] = useState(true);

  const setData = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    await authAPI.login(account);
  };

  const onClickLogin = () => {
    if (!empty) {
      alert("아이디 혹은 비밀번호를 입력해주세요");
    }
    login();
  };

  const onClickRedirect = () => {
    window.location.href = "/signup";
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClickLogin();
    }
  };

  useEffect(() => {
    if (isEmpty(account.username) || isEmpty(account.password)) {
      return;
    }
    setEmpty(false);
  }, [account]);

  const isEmpty = (text) => {
    if (text == null || (text != null && text == "")) {
      return true;
    }
    return false;
  };

  return {
    setData,
    onClickRedirect,
    onKeyPress,
    onClickLogin,
  };
};
