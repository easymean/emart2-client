import authAPI from "@/api/auth";
import { LoginModel } from "@/model/authModel";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

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
  const [isAlert, setAlert] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("/login");
  const [alertMsg, setAlertMsg] = useState("");
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClickLogin();
    }
  };

  const login = async () => {
    await authAPI.login(account).catch((err) => {
      setAlert(true);
      setAlertMsg(err);
      return;
    });
    //로그인 후 쿠키에 있는 토큰을 받아서 request 헤더에 넣는다.
    const token = useCookies(["accessToken"]);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setRedirectUrl("/"); //메인으로
  };

  const onClickLogin = () => {
    if (empty) {
      setAlert(true);
      setAlertMsg("아이디 혹은 비밀번호를 입력해주세요");
    }
    login();
  };
  return {
    onKeyPress,
    onClickLogin,
    isAlert,
    redirectUrl,
    alertMsg,
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
