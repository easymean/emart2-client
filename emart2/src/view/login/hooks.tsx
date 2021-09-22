import authAPI from "@/api/auth";
import { MSG } from "@/asset/constant";
import { LoginModel } from "@/model/authModel";
import { useEffect, useState } from "react";

export const useInput = () => {
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
  const [alertMsg, setAlertMsg] = useState<any>(null);
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClickLogin();
    }
  };

  const login = async () => {
    try {
      const res = await authAPI.login(account);

      setAlert(true);
      if (res !== true) {
        setAlertMsg("아이디와 비밀번호를 확인해주세요");
        return;
      }
    } catch (err) {
      setAlertMsg(MSG.ERROR);
      return;
    }
    setAlertMsg("로그인 성공");
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
