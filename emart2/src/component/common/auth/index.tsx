import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { FC } from "react";
import { useEffect } from "react";
import Alert from "@/component/alert";

const Auth =
  (Component: FC, isMember: boolean): FC =>
  () => {
    const [authCookie] = useCookies(["accessToken"]);
    console.log(authCookie);
    const [redirectUrl, setRedirectUrl] = useState("/login");
    const [alertMsg, setAlertMsg] = useState("");
    const [isAuth, setIsAuth] = useState(false);

    const checkValidLogin = async () => {
      if (!authCookie) {
        setAlertMsg("로그인이 필요한 서비스입니다.");
      } else if (!isMember) {
        setAlertMsg("관리자에게 인증필요");
        setRedirectUrl("/");
      } else {
        setIsAuth(true);
      }
    };
    useEffect(() => {
      checkValidLogin();
    }, []);
    return (
      <>
        {isAuth ? (
          <Component />
        ) : (
          <Alert redirect={redirectUrl} message={alertMsg} />
        )}
      </>
    );
  };

export default Auth;
