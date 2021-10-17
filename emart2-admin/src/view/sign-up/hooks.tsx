import authAPI from "@/api/auth";
import { MSG } from "@/asset/constant";
import { useCallback, useEffect, useState } from "react";

export const useInputBox = () => {
  const [info, setInfo] = useState({
    id: "",
    password: "",
    password2: "",
    email: "",
  });

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

    if (password.length < 1 && password2.length < 1) {
      setPwdValid(true);
      return;
    }
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

  return {
    empty,
    pwdValid,
    handleChange,
    info,
  };
};

export const useSignupButton = (
  empty: boolean,
  pwdValid: boolean,
  idValid: boolean,
  info
) => {
  const [disabled, setDisable] = useState<boolean>(true);
  const [msg, setMsg] = useState<string>("");
  const [redirect, setRedirect] = useState<string>("/signup");
  const [alert, setAlert] = useState<boolean>(false);

  useEffect(() => {
    if (!empty && pwdValid && idValid) {
      setDisable(false);
    }
  }, [empty, pwdValid]);

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      onClickSignup();
    }
  };

  const signup = useCallback(async () => {
    const input = {
      username: info.id,
      password: info.password,
      email: info.email,
    };
    try {
      setAlert(true);
      await authAPI.signup(input);
    } catch (err) {
      setMsg(MSG.ERROR);
      return;
    }
    setMsg("회원가입 성공!");
    setRedirect("/login");
  }, [info]);

  const onClickSignup = () => {
    if (disabled) {
      return;
    }
    signup();
  };

  return {
    disabled,
    onKeyPress,
    onClickSignup,
    msg,
    redirect,
    alert,
  };
};

export const useId = (info) => {
  const [idValid, setValidId] = useState(false);
  const [toast, setToast] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState("");

  const checkId = async (id) => {
    setToast(true);
    try {
      const res = await authAPI.checkId(id);
      if (!res) {
        setValidId(true);
        setToastMsg("사용가능한 id입니다");
      } else {
        setValidId(false);
        setToastMsg("사용불가능합니다.");
      }
    } catch (err) {
      setValidId(false);
      setToastMsg("사용불가능합니다.");
    }
  };

  const onCheckId = () => {
    checkId(info.id);
  };
  return {
    onCheckId,
    idValid,
    toast,
    setToast,
    toastMsg,
  };
};
