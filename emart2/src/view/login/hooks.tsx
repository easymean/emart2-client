import authAPI from "@/api/auth";
import { LoginModel } from "@/model/authModel";
import { useEffect, useState } from "react";

export const useLoginInput = () => {
  const [account, setAccount] = useState({} as LoginModel);
  const [empty, setEmpty] = useState(true);

  const setData = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
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
    empty,
    account,
  };
};
export const useLogin = (empty, account) => {
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClickLogin();
    }
  };

  const login = async () => {
    await authAPI.login(account).catch((err) => {
      alert(err);
      return;
    });
    //window.location.replace("/"); //메인으로
  };

  const onClickLogin = () => {
    if (empty) {
      alert("아이디 혹은 비밀번호를 입력해주세요");
    }
    login();
  };
  return {
    onKeyPress,
    onClickLogin,
  };
};

export const useSignup = () => {
  const onClickRedirect = () => {
    window.location.href = "/signup";
  };
  return {
    onClickRedirect,
  };
};
